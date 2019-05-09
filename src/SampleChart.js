import React from 'react';
import ReactEcharts from "echarts-for-react";

const SampleChart = () => {

    const chartRef = React.useRef(null);
    let coefficient = 1.005
    let coefficient2 = 1.005
    const [inputValue, setInputValue] = React.useState(coefficient);
    const [inputValue2, setInputValue2] = React.useState(coefficient2);
    let i = 0;
    let years = ['product', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'];
    let _18_24data = ['18-24', 35.5, 28.0, 25.0, 30.6, 31.5, 31.8, 32.6, 35.7, 36.7, 39.7, 41.2];
    let _25_49data = ['25-49', 84.3, 76.6, 74.8, 78.4, 79.7, 80.5, 80.9, 82.8, 82.1, 83.8, 83.9];
    let _50_74data = ['50-74', 51.1, 48.5, 45.8, 49.0, 51.1, 52.8, 53.6, 54.9, 56.2, 57.3, 57.9];
    let _18_24data2 = ['18-24(2)', 5.7, 4.4, 2.5, 3.3, 3.5, 3.3, 2.4, 1.8, 1.8, 2.8, 1.8];
    let _25_49data2 = ['25-49(2)', 54.8, 54.5, 51.7, 48.5, 46.7, 48.5, 48.9, 47.7, 46.9, 47.3, 47.4];
    let _50_74data2 = ['50-74(2)', 39.5, 41.1, 45.8, 48.2, 49.8, 48.2, 48.7, 50.4, 49.5, 49.9, 50.8];

    function calcNumber(number, inputValue) {
        let numberVal = (Number)(number[number.length - 1] * inputValue).toFixed(1);
        return numberVal > 100 ? 100 : numberVal;
    }

    while (i < 22) {
        years.push(((Number)(years[years.length - 1]) + 1).toFixed(0))
        _18_24data.push(calcNumber(_18_24data, inputValue));
        _25_49data.push(calcNumber(_25_49data, inputValue));
        _50_74data.push(calcNumber(_50_74data, inputValue));
        _18_24data2.push(calcNumber(_18_24data2, inputValue2));
        _25_49data2.push(calcNumber(_25_49data2, inputValue2));
        _50_74data2.push(calcNumber(_50_74data2, inputValue2));
        i++;

    }
    const opts = {
        legend: {},
        tooltip: {
            trigger: 'axis',
            showContent: true
        },
        dataset: {
            source: [
                years,
                _18_24data,
                _25_49data,
                _50_74data,
                _18_24data2,
                _25_49data2,
                _50_74data2,
            ]
        },
        xAxis: {type: 'category'},
        yAxis: {gridIndex: 0},
        grid: {top: '55%'},
        series: [
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'bar', smooth: true, seriesLayoutBy: 'row'},
            {type: 'bar', smooth: true, seriesLayoutBy: 'row'},
            {type: 'bar', smooth: true, seriesLayoutBy: 'row'},
            {
                type: 'pie',
                id: 'pie',
                radius: '30%',
                center: ['35%', '25%'],
                label: {
                    formatter: '{b}: {@2008} ({d}%)'
                },
                encode: {
                    itemName: 'product',
                    value: '2008',
                    tooltip: '2008'
                },
                data: [_18_24data, _25_49data, _50_74data]
            },
            {
                type: 'pie',
                id: 'pie2',
                radius: '30%',
                center: ['65%', '25%'],
                label: {
                    formatter: '{b}: {@2008} ({d}%)'
                },
                encode: {
                    itemName: 'product',
                    value: '2008',
                    tooltip: '2008'
                },
                data: [_18_24data2, _25_49data2, _50_74data2]
            }
        ]
    }

    let onEvents = {
        'updateAxisPointer': (event) => {
            let xAxisInfo = event.axesInfo[0];
            if (xAxisInfo) {
                let dimension = xAxisInfo.value + 1;
                chartRef.current.getEchartsInstance().setOption({
                    series: {
                        id: 'pie',
                        label: {
                            formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                        },
                        encode: {
                            value: dimension,
                            tooltip: dimension
                        }
                    }
                });
            }
            let xAxisInfo2 = event.axesInfo[0];
            if (xAxisInfo2) {
                let dimension = xAxisInfo2.value + 1;
                chartRef.current.getEchartsInstance().setOption({
                    series: {
                        id: 'pie2',
                        label: {
                            formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                        },
                        encode: {
                            value: dimension,
                            tooltip: dimension
                        }
                    }
                });
            }
        }
    };

    return (
        <div className="chart">
            <ReactEcharts ref={chartRef} option={opts} style={{height: "70vh"}} onEvents={onEvents}/>
            <label for="coef">Eestlaste tööhõivemäära trend</label>
            <input step="0.005" type="number" value={inputValue} id="coef"
                   onChange={(evt) => setInputValue(evt.target.value)}/>
            <label htmlFor="coef2">Välistööjõu tööhõivemäära trend</label>
            <input step="0.005" type="number" value={inputValue2} id="coef"
                   onChange={(evt) => setInputValue2(evt.target.value)}/>
        </div>
    )
};

export default SampleChart;
