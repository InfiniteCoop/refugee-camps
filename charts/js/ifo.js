google.load("visualization", "1", {
	packages: ["corechart"]
});
google.setOnLoadCallback(drawChart);

function drawChart() {

	var data = google.visualization.arrayToDataTable([
		['Year', 'Population'],
		['2006', 54157],
		['2007', 61832],
		['2008', 79469],
		['2009', 79424],
		['2010', 97610],
		['2011', 118972],
		['2012', 98294],
		['2013', 99761],
		['2014', 83750],
		['2015', 84089]
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
				fontSize: 11,
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

		animation: {
			duration: 1200,
			easing: 'out',
			startup: true
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