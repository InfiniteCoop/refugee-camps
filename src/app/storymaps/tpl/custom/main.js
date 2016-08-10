define([
	'dojo/topic',
	'dojo/_base/array',
	'dojo/dom-geometry',
	'dojo/_base/connect',
	'dijit/registry',
	'esri/map',
	'esri/layers/CSVLayer',
	'esri/layers/FeatureLayer',
	'esri/layers/ArcGISTiledMapServiceLayer',
	'esri/Color',
	'esri/symbols/SimpleMarkerSymbol',
	'esri/renderers/UniqueValueRenderer',
	'lib-app/jquery',
	'lib-app/jquery.mousewheel',
	'lib-build/css!./css/styles.css'
	],
	function(
		topic,
		array,
		domGeom,
		connect,
		registry,
		Map,
		CSVLayer,
		FeatureLayer,
		ArcGISTiledMapServiceLayer,
		Color,
		SimpleMarkerSymbol,
		UniqueValueRenderer
		){

	// The application is ready
	topic.subscribe("tpl-ready", function(){
		

		//Hide splash page on scroll/button click
		var showApp = function () {
			$(".splash").slideUp("800", function() {
				$(".content-wrapper").delay(100).animate({"opacity":"1.0"},800);
			});
		};

		//Trigger slide animation
		$(".splash-arrow").on('click',showApp);
		$('.splash').on('mousewheel',showApp);

		//Toggle index map when overview button is clicked
		$("#bt").click(function() {
			$(".sliding-panel").toggleClass("panel-active");
			console.log("Sliding panel clicked");
		});

		/* BASEMAP TOGGLE */
		basemapSwitcher();

		/*  OVERVIEW MAP IN SIDEBAR  */

		//Map CSV fields to JS variables;
		var LabelField = 'Label';
		var StoryIndexField = 'StoryIndex';
		var ActiveField = 'Active';

		// Set map marker colors
		var defaultMarkerColor = new Color([100,100,100, 1]);
		var activeMarkerColor = new Color([0,94,184, 1]);

		// Path to CSV file
		var csvPath = 'resources/index-map/index-map-layer.csv';

		// Variable to store selected graphic
		var selectedGraphic = false;

		// Remove the help text tooltip after the user first clicks on the map (not currently used)
		$('#index-map').click(function(){
			$('#index-map-helper').removeClass('active');
		});

		// Create default map extent and spatial reference
		var startExtent = new esri.geometry.Extent(400000, -2000000, 8000000, 6000000,
			new esri.SpatialReference(102100) );

		// Create the index map with minimal UI;
		var indexMap = new Map('index-map',{
			slider: false,
			logo: false,
			showAttribution: false,
			extent: startExtent,
			fitExtent: true
		});

		//Disable all map controls
		indexMap.on("load", function(){
			console.log("Map loaded");
			indexMap.disableMapNavigation();
			indexMap.disableKeyboardNavigation();
			indexMap.disablePan();
			indexMap.disableRubberBandZoom();
			indexMap.disableScrollWheelZoom();


			// Variables used for responsive map
			var resizeTimer;
			var height = $("#index-map").height();

			// Redraw map if container width changes; don't redraw when height changes
			indexMap.on("resize", function(){

				if (height == $("#index-map").height()) {
					console.log("Map width has changed; redrawing map");

					clearTimeout(resizeTimer);
					resizeTimer = setTimeout(function() {
						indexMap.setExtent(startExtent,true);
						indexMap.reposition();
					}, 500);
				}
				else {
					console.log("Map width has not changed; not redrawing map");
				}
			});
		});

		//Create country layer from Feature Service
		var countriesLayer = new FeatureLayer("http://services.arcgis.com/nzS0F0zdNLvs7nc8/arcgis/rest/services/CountriesGeneralized/FeatureServer/0");

		// Load CSV File as point later
		var indexMapLayer = new CSVLayer(csvPath);

		// Create simple point symbols
		var activeMarker =  new SimpleMarkerSymbol('solid', 12, null, activeMarkerColor);
		var defaultMarker = new SimpleMarkerSymbol('solid', 9, null, defaultMarkerColor);

		// Change the CSV Layer renderer to use the symbols we just created
		var renderer = new UniqueValueRenderer(defaultMarker,ActiveField);
		renderer.addValue('TRUE', activeMarker);
		indexMapLayer.setRenderer(renderer);

		// Add countries layer to map
		indexMap.addLayer(countriesLayer,0);

		// Add CSV layer to map
		indexMap.addLayer(indexMapLayer,1);

		// Select current section in index map on Loading
		setIconDisplay(app.data.getCurrentSectionIndex());

		// Add map events
		indexMapLayer.on('click',function(event){
			$('#index-map-helper').removeClass('active');
			hideIndexMapInfo();
			topic.publish('story-navigate-section', event.graphic.attributes[StoryIndexField]);
		});

		indexMapLayer.on('mouse-over',function(event){
			indexMap.setCursor('pointer');
			setIndexMapInfo(event.graphic);
		});

		indexMapLayer.on('mouse-out',function(){
			indexMap.setCursor('default');
			hideIndexMapInfo();
		});

		indexMap.on('extent-change',function(){
			indexMap.setCursor('default');
			hideIndexMapInfo();
			moveSelectedToFront();
		});

		topic.subscribe('story-load-section', setIconDisplay);

		// Select current section in index map (Update symbol color)
		function setIconDisplay(index){
			selectedGraphic = false;
			if (index !== null){
				array.forEach(indexMapLayer.graphics,function(g){
					if (g.attributes[StoryIndexField].toString() === index.toString()){
						g.attributes[ActiveField] = 'TRUE';
						if(g.getDojoShape()){
							selectedGraphic = g;
							g.getDojoShape().moveToFront();
						}
					}
					else{
						g.attributes[ActiveField] = 'FALSE';
					}
				});
				indexMapLayer.redraw();
			}
		}

		// Make sure selected point is on top.
		function moveSelectedToFront(){
			if (selectedGraphic && selectedGraphic.getDojoShape()) {
				selectedGraphic.getDojoShape().moveToFront();
				console.log("Moved item to front,")
			}
		}

		// Hide point tooltip
		function hideIndexMapInfo(){
			$('#index-map-info').hide();
		}

		// Show point tooltip
		function setIndexMapInfo(graphic){
			$('#index-map-info').html(graphic.attributes[LabelField]);
			if (graphic.getDojoShape()){
				graphic.getDojoShape().moveToFront();
			}
			positionIndexMapInfo(graphic);
		}

		// Move tooltip next to selected point
		function positionIndexMapInfo(graphic){
			var pos = domGeom.position(graphic.getNode());
			$('#index-map-info').css({
				'top': pos.y - (pos.h/2) - 3,
				'left': pos.x + pos.w
			}).show();
		}
	});

	/* Click handler for map symbols */

    var WEBMAP_ID = "0df1997ac587470f9e3713a15c532cb9",
        LAYER_ID = "UNHCR_PoC_2016_8102";

    var clickHandlerIsSetup = false;

    topic.subscribe("story-loaded-map", function(result){

    	/* Add thousands separator to attributes */
    	function numberWithCommas(x) {
    		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}

        if ( result.id == WEBMAP_ID && ! clickHandlerIsSetup ) {
            var map = app.maps[result.id].response.map,
                layer = map.getLayer(LAYER_ID);

            if ( layer ) {
                layer.on("mouse-over", function(e){
                    map.setMapCursor("pointer");
                    map.infoWindow.setContent(
                    	"<div style='font-weight:bold;font-size:14px'>"+e.graphic.attributes["Rank"]+". "+e.graphic.attributes["name"]+" ("+e.graphic.attributes["Country"]+")"+"</div><hr/>"+
						"<div><span style='font-weight:bold;font-size:12px'>People of concern | </span>"+numberWithCommas(e.graphic.attributes["PoCTotal"])+"</div>"+
						"<div><span style='font-weight:bold;font-size:12px'>Year of establishment | </span>"+e.graphic.attributes["EstabDate"]+"</div>"                   							 
                    	);
                    map.infoWindow.show(e.graphic.geometry);
                });

                layer.on("mouse-out", function(e){
                    map.setMapCursor("default");
                    map.infoWindow.hide();
                });

                layer.on("click", function(e){
                    var index = e.graphic.attributes["story_index_10"];
                    topic.publish("story-navigate-section", index);
                });
            }

            clickHandlerIsSetup = true;
        }
    });

	function basemapSwitcher(){

		/* BASEMAP TOGGLE */
		var activeBasemap = 'streets';
		$("#switcher-button").text("view satellite basemap");

		$("#switcher-button").click(function () {
			var satelliteBasemap = app.map.getLayer(app.map.layerIds[2]);
			var satelliteReference = app.map.getLayer(app.map.layerIds[3]);
			if (activeBasemap == 'streets'){
				satelliteBasemap.setVisibility(true);
				satelliteReference.setVisibility(true);
				activeBasemap = 'satellite';
				$("#switcher-button").text('view streets basemap');
			} else {
				//// Your aerial Layer
				/*var newbase = new VETiledLayer({
					bingMapsKey: "-Your Bing Key-",
					mapStyle: VETiledLayer.MAP_STYLE_AERIAL_WITH_LABELS
				}); //BING AERIAL */
				activeBasemap = 'streets';
				$("#switcher-button").text('view satellite basemap');
				satelliteBasemap.setVisibility(false);
				satelliteReference.setVisibility(false);			
			}
		});
	};
});

