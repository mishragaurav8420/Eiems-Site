import {
    ApexStrokeDefault,
    ApexChartDefault,
    COLOR_1
} from '../constant/chart.constant';

class Chart {
  
    static init() {
        const basicOptions = {
            series: [
                {
                    name: "Desktops",
                    data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
                    color: COLOR_1
                }
            ],
            chart: {
                ...ApexChartDefault,
                height: 350,
                type: "line",
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: ApexStrokeDefault,
            title: {
                text: "Product Trends by Month",
                align: "left"
            },
            grid: {
                row: {
                    colors: ["#f3f3f3", "transparent"],
                    opacity: 0.5
                }
            },
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep"
                ]
            }
        };

        new ApexCharts(document.querySelector("#basic-chart"), basicOptions).render();
    }
}

$(() => { Chart.init(); });