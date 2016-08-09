      google.charts.load('current', {'packages':['sankey']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'From');
        data.addColumn('string', 'To');
        data.addColumn('number', 'Weight');
        data.addRows([
  ["Syrian Arab Rep.","Turkey",2503549],
  ["Syrian Arab Rep.","Lebanon",1062690 ],
  ["Syrian Arab Rep.","Jordan",628223],
  ["Syrian Arab Rep.","Other",678123],
  ["Afghanistan","Pakistan",1560592],
  ["Afghanistan","Iran (Islamic Rep. of)",951142],
  ["Afghanistan","Other",154520],
  ["Somalia","Kenya",417920],
  ["Somalia","Ethiopia",256669],
  ["Somalia","Yemen",253215],
  ["Somalia","Other",195248],
  ["South Sudan","Ethiopia",281508],
  ["South Sudan","Uganda",199359],
  ["South Sudan","Sudan ",194404],
  ["South Sudan","Kenya",95671],
  ["South Sudan","Other",7755],
  ["Sudan","Chad",299750],
  ["Sudan","South Sudan ",241002],
  ["Sudan","Other",88018]
        ]);

    var colors = ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f',
                  '#cab2d6', '#ffff99', '#1f78b4', '#33a02c'];

    var formatter = new google.visualization.NumberFormat({
    suffix: ' gigawatt hours (GWh)',
    fractionDigits: 0
  });

  formatter.format(data, 1);
  formatter.format(data, 2);

    var options = {
      title: 'Refugee Flows',
      height: 400,
      tooltip: {
      textStyle: {
        color: '#333',
        fontSize: 13
      },
      showColorCode: true
    },
      sankey: {
        node: {
          colors: colors
        },
        link: {
          colorMode: 'gradient',
          colors: colors
        }
      }
    };
        // Instantiates and draws our chart, passing in some options.
        var chart = new google.visualization.Sankey(document.getElementById('chart'));
        chart.draw(data, options);
      }