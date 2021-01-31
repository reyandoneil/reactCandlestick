import Chart from "react-apexcharts";

function SampleChart(data) {

    console.log(data);
    const state = {
        options: {
            chart: {
                type: 'candlestick',
                height: 350,
                id: 'candles',
                toolbar: {
                    autoSelected: 'pan',
                    show: false
                },
                zoom: {
                    enabled: false
                },
                animations: {
                    enabled: true,
                    easing: 'easeinout',
                    speed: 800,
                    animateGradually: {
                        enabled: true,
                        delay: 200
                    },
                    dynamicAnimation: {
                        enabled: true,
                        speed: 350
                    }
                }
            },
            title: {
                text: '',
                align: 'left'
            },
            xaxis: {
                type: 'datetime'
            },
            yaxis: {
                tooltip: {
                    enabled: true
                }
            },
            plotOptions: {
                candlestick: {
                    colors: {
                        upward: '#3C90EB',
                        downward: '#DF7D46'
                    },
                    wick: {
                        useFillColor: true
                    }
                }
            },
        },
        series: [{
            data: data.data
        }],
    };
    return (
        <div >
            {data.isLoading ?
                <div>
                    <div className="mixed-chart">
                        <Chart
                            options={state.options}
                            series={state.series}
                            type="candlestick"
                            width={950}
                        />
                    </div>
                </div>
                :
                <div>
                    <div className="mixed-chart">
                        <Chart
                            options={state.options}
                            series={state.series}
                            type="candlestick"
                            width={950}
                        />
                    </div>
                </div>
            }
        </div>
    )
}



export default SampleChart;
