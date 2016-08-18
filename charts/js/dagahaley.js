google.load("visualization", "1", {
	packages: ["corechart"]
});
google.setOnLoadCallback(drawChart);

function drawChart() {

	var data = google.visualization.arrayToDataTable([
		['Year', 'Population'],
		['2006', 39526],
		['2007', 39626],
		['2008', 65581],
		['2009', 93179],
		['2010', 93470],
		['2011', 122214],
		['2012', 121127],
		['2013', 104565],
		['2014', 88486],
		['2015', 87223]
	]);

	// set chart options
	var options = {
		backgroundColor: 'transparent',
		colors: ['#ffffff'],
		fontName: 'Muli',

		chartArea: {
			width: "80%",
			height: "70%",
			top: '15%',
			left: '10%'
		},

 		hAxis: {
			baselineColor: '#ffffff',
			textStyle: {
				fontSize: 9,
				color: '#ffffff',
			},
			maxAlternation: 1,
			minTextSpacing: 80,
		},

		vAxis: {
			format: 'short',
			baselineColor: '#ffffff',
			gridlines: {
				color: '#ffffff',
			},
			textStyle: {
				fontSize: 11,
				color: '#ffffff'
			}
		},
		tooltip: {
			textStyle: {
				color: '#333',
				fontSize: 13,
				bold: true
			},
			showColorCode: false
		},

		crosshair: {
			trigger: 'focus',
			opacity: 0.1
		},
		
		legend: {
			position: 'none'
		},
 
		lineWidth: 2.5,
		pointSize: 4,
		interpolateNulls: true		
	};

	var areaChart = new google.visualization.LineChart(document.getElementById('chart'));
	areaChart.draw(data, options);

	function resizeChart() {
		areaChart.draw(data, options);
	}
	if (document.addEventListener) {
		window.addEventListener('resize', resizeChart);
	} else if (document.attachEvent) {
		window.attachEvent('onresize', resizeChart);
	} else {
		window.resize = resizeChart;
	}
}