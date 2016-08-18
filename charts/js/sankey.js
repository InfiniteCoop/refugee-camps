      google.charts.load('current', {
        'packages': ['sankey']
      });
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'From');
        data.addColumn('string', 'To');
        data.addColumn('number', 'Weight');
        data.addColumn({
          type: 'string',
          role: 'tooltip'
        });
        data.addRows([
          ["Syria", "Turkey", 2503549, "Syria to Turkey: 2,503,549"],
          ["Syria", "Lebanon", 1062690, "Syria to Lebanon: 1,062,690"],
          ["Syria", "Jordan", 628223, "Syria to Jordan: 628,223"],
          ["Syria", "Other countries", 678123, "Syria to other countries: 678,123"],
          ["Afghanistan", "Pakistan", 1560592, "Afghanistan to Pakistan: 1,560,592"],
          ["Afghanistan", "Iran", 951142, "Afghanistan to Iran: 951,142"],
          ["Afghanistan", "Other countries", 154520, "Afghanistan to other countries: 154,520"],
          ["Somalia", "Kenya", 417920, "Somalia to Kenya: 417,920"],
          ["Somalia", "Ethiopia", 256669, "Somalia to Ethiopia: 256,669"],
          ["Somalia", "Yemen", 253215, "Somalia to Yemen: 253,215"],
          ["Somalia", "Other countries", 195248, "Somalia to other countries: 195,248"],
          ["South Sudan", "Ethiopia", 281508, "South Sudan to Ethiopia: 281,248"],
          ["South Sudan", "Uganda", 199359, "South Sudan to Uganda: 199,359"],
          ["South Sudan", "Sudan ", 194404, "South Sudan to Sudan: 194,404"],
          ["South Sudan", "Kenya", 95671, "South Sudan to Kenya: 95,671"],
          ["South Sudan", "Other countries", 7755, "South Sudan to other countries: 7,755"],
          ["Sudan", "Chad", 299750, "Sudan to Chad: 299,750"],
          ["Sudan", "South Sudan ", 241002, "Sudan to South Sudan: 241,002"],
          ["Sudan", "Other", 88018, "Sudan to other countries: 88,018"]
        ]);

        var colors = ['fff'];

        var options = {
          backgroundColor: 'transparent',
          colors: ['#ffffff'],
          fontName: 'Muli',

          chartArea: {
            width: "80%",
            height: "60%",
            top: '15%',
            left: '10%'
          },

          tooltip: {
            isHtml: true,
            textStyle: {
              color: '#333',
              fontSize: 18,
              bold: true
            },
            showColorCode: false
          },         
          sankey: {
            link: {
              color: {
                fill: '#ffffff'
              }
            },
            node: {
              colors: [ '#ffffff' ],
              label: {
                fontSize: 11,
                color: '#005eb8'
              }
            }
          }
        };
        // Instantiates and draws our chart, passing in some options.
        var chart = new google.visualization.Sankey(document.getElementById('chart'));
        chart.draw(data, options);


        function resizeChart() {
            chart.draw(data, options);
          }
          if (document.addEventListener) {
            window.addEventListener('resize', resizeChart);
          } else if (document.attachEvent) {
            window.attachEvent('onresize', resizeChart);
          } else {
            window.resize = resizeChart;
          } 
      }