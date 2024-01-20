import { Component, OnInit } from '@angular/core';
import { ApexOptions } from 'ng-apexcharts';

interface option {
  name: string;
  code:string;
}
@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent implements OnInit{
  chartOptions!: ApexOptions; 
  options:option[] | undefined;


  ngOnInit(): void {
    this.options = [
      { name: '2022', code: 'NY' },
      { name: '2021', code: 'RM' },
      { name: '2020', code: 'LDN' },
      { name: '2019', code: 'IST' },
      { name: '2018', code: 'PRS' }
  ];

    this.chartOptions = {
      series: [
        {
          name: "استخدام",
          data:  [
            150,
            230,
            150,
            130,
            250,
            130,
            30,
            210,
            150,
            210,
            140,
            200
            
          ],
        }
      ],
      title: {
        text: undefined,
      },
      colors:['#5C6BC0'],
      chart: {
        height:200,
        width: '100%',
        parentHeightOffset:0,
        type: "area",
        // offsetX: 20,
        offsetY:0,
        // height: 350,
        zoom: {
          enabled: false
        },
        animations:{
          enabled:false,
        },
        toolbar: {
          show:false,
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 3,
        show: true,
        curve: "smooth",
        lineCap: "round",
      },
      subtitle: {
        text: "Price Movements",
        align: "left"
      },
      labels: [
        "ديسمبر",
        "نوفمبر",
        "اكتوبر",
        "سبتمبر",
        "اغسطس",
        "يوليو",
        "يونيو",
        "مايو",
        "ابريل",
        "مارس",
        "فبراير",
        "يناير"
      ],
      xaxis: {
        type: "category",
        labels: {
          offsetX:0,
          // offsetY:0,
          style: {
            fontFamily:'Tajawal',
            fontSize:'14px',
            fontWeight: 500,
            colors:'#5C6BC0',
          }
        },
        crosshairs:{
          show:true,
          width: 1,
          position: 'front',
          // opacity?: number;
          stroke: {
              color: '#5C6BC0',
              width: 2,
              dashArray: 0,
          },

        },
        axisTicks:{
          show:false,
        },
        axisBorder: {
          show: false,
        },
        tooltip: {
          enabled: false,
      },
      },
      yaxis: {
        show:true,
        tickAmount: 3,
        labels:{
          show:false,
        }
      },
   
      states:{
        normal: {
          filter: {
              type: 'lighten',
              value:0.1,
             },
      },
        hover: {
          filter: {
              type: 'light',
              value: 0.7,
          },
      }
      },
      tooltip: {
        shared: true,
        x:{
          show:false
        },
        enabled: true,
        theme:'dark',
        y: {
          formatter: function (value: number, opts?: any) {
            // Customize the tooltip's y-value format here
            const sum = opts.series[0].reduce((accumulator: any, currentValue: any) => {
              return accumulator + currentValue;
            }, 0);
            let average = ((value/sum) * 100).toFixed(1);
            return value + ' استخدام' + '<br/>' + average +'%'; // Format the value as needed (e.g., two decimal places)
          },
        },
        marker: {
          show: true,
      },
        onDatasetHover: {
          highlightDataSeries: true,
      },
      // custom: function({series, seriesIndex, dataPointIndex, w}) {
      //   return '<div ' +
      //     '<span>' + series[seriesIndex][dataPointIndex] + '</span>' +
      //     '</div>'
      // }
      },
      markers: {
          size: 0,
          colors: ['#5C6BC0'],
          shape: "circle",
          radius: 2,
          offsetX: 0,
          offsetY: 0,
          hover: {
            size: 8,
        },
      },
      legend: {
        show:false,
      },
      grid:{
        padding: {
          top: 0,
          bottom: 0,
          left:0,
          right:0,
        },  
    },
    fill: {
      colors:['#5C6BC0'],
      opacity:0.7,
      type:"gradient",
      gradient: {
        type: "vertical",
        opacityFrom: 0.7,
        opacityTo: 0.4,
        stops:[0,600],
        
      }
    }
    };
  }
}
