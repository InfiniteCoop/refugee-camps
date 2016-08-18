google.load("visualization", "1", {
	packages: ["corechart"]
});
google.setOnLoadCallback(drawChart);

function drawChart() {

	var data = google.visualization.arrayToDataTable([
		['Year', 'Population'],
		['2006', null],
		['2007', 65033],
		['2008', 62293],
		['2009', 61822],
		['2010', 67332],
		['2011', 58819],
		['2012', 56820],
		['2013', 56295],
		['2014', 53816],
		['2015', 62264]
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