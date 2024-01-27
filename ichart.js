const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      //label: 'Sales Trends',
      data: [7000, 18000, 3000, 28000, 8000, 45000, 9000, 18000, 31000, 4000, 25000, 20000],
      borderWidth: 0,
      borderRadius: {
        topLeft:20,
        topRight:20
      },
      width:'30',
      backgroundColor:'rgba(52, 202, 165, 0.1)',
    }]
  };

    //xScalePadding plugin 
    const barBox = {
      id: 'barBox',
      afterDatasetsDraw(chart, args, pluginOptions) {
        const {ctx, chartArea: {left, right, top, bottom}, data, scales: {x, y} } = chart;

        chart.getDatasetMeta(0).data.forEach((metaData, index)=> {
          console.log(ctx)
          const xHalf = metaData.width / 2
          const grd =  ctx.createLinearGradient(0,top,0,bottom)
          grd.addColorStop(0,'#34CAA5');
          grd.addColorStop(1,'rgba(52, 202, 165, 0)');
          //linear-gradient(180deg, #34CAA5 0%, rgba(52, 202, 165, 0) 100%);

          if (metaData.active === true) {
            ctx.beginPath();
            ctx.fillStyle = grd;
            ctx.roundRect(metaData.x - xHalf, metaData.base, metaData.width, -metaData.height, [0, 0, 20, 20])
            ctx.fill()
          }
        });
                   
      }
    };


  //xScalePadding plugin 
  const xScalePadding = {
    id: 'xScalePadding',
    beforeDatasetsDraw(chart, args, pluginOptions) {
        const {ctx, data, scales: {x, y} } = chart;
        
        x._labelItems.forEach((label) => {
            label.options.textBaseline = 'top';
      });              
    }
  };

  // config 
  const config = {
    type: 'bar',
    data,
    options: {
      scales: {
        x: {
          border: {
            dash: [6, 6],
            display:false,

          },
          grid: {
            drawTicks: false,
            drawBorder: false,
            color: (context) => {
              if (context.index === 0) {
                return ''
              }else {
                return 'transparent';
              }
            }

          }
        },
        y: {
          beginAtZero: true,
          border: {
            dash: [6, 6],
            display:false,
            
          },
          grid: {
            drawTicks: false,
            drawBorder: false,
            color: (context) => {
                if (context.index === 0) {
                    return ''
                }else {
                    return 'rgba(234, 234, 234, 1)';
                }
            }
          }
        }
      }
    },
    plugins:[xScalePadding],
    plugins:[barBox]
  };

  // render init block
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );