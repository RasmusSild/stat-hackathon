import React from 'react';
import ReactEcharts from "echarts-for-react";

const SampleChart = () => {

    const chartRef = React.useRef(null);
    let coefficient = 1.005
    const [inputValue, setInputValue] = React.useState(coefficient);
    let i = 0;
    let years = ['product', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'];
    let _18_24data = ['18-24', 37.1, 32.1, 33.4, 32.6, 28.1, 30.1, 28.0, 30.1, 31.1, 33.8, 35.5, 28.0, 25.0, 30.6, 31.5, 31.8, 32.6, 35.7, 36.7, 39.7, 41.2];
    let _25_49data = ['25-49', 76.8, 76.8, 75.0, 75.9, 76.5, 78.3, 78.1, 79.4, 84.4, 84.7, 84.3, 76.6, 74.8, 78.4, 79.7, 80.5, 80.9, 82.8, 82.1, 83.8, 83.9];
    let _50_74data = ['50-74', 40.4, 39.8, 38.9, 39.7, 42.2, 42.8, 44.6, 46.1, 49.9, 50.8, 51.1, 48.5, 45.8, 49.0, 51.1, 52.8, 53.6, 54.9, 56.2, 57.3, 57.9];
    let _18_24data2 = ['18-24', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5.7, 4.4, 2.5, 3.3, 3.5, 3.3, 2.4, 1.8, 2.8, 1.8];
    let _25_49data2 = ['18-24', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 54.8, 54.5, 51.7, 48.5, 46.7, 48.5, 48.9, 47.7, 46.9, 47.3, 47.4];
    let _50_74data2 = ['18-24', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39.5, 41.1, 45.8, 48.2, 49.8, 48.2, 48.7, 50.4, 49.5, 49.9, 50.8];

    function calcNumber(number) {
        let numberVal = (Number)(number[number.length - 1] * inputValue).toFixed(1);
        return numberVal > 100 ? 100 : numberVal;
    }

    while (i < 22) {
        years.push(((Number)(years[years.length - 1]) + 1).toFixed(0))
        _18_24data.push(calcNumber(_18_24data));
        _25_49data.push(calcNumber(_25_49data));
        _50_74data.push(calcNumber(_50_74data));
        _18_24data2.push(calcNumber(_18_24data2));
        _25_49data2.push(calcNumber(_25_49data2));
        _50_74data2.push(calcNumber(_50_74data2));
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
                center: ['50%', '25%'],
                label: {
                    formatter: '{b}: {@1998} ({d}%)'
                },
                encode: {
                    itemName: 'product',
                    value: '1998',
                    tooltip: '1998'
                }
            }
        ]
    }

    let onEvents = {
        'updateAxisPointer': (event) => {
            var xAxisInfo = event.axesInfo[0];
            if (xAxisInfo) {
                var dimension = xAxisInfo.value + 1;
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
        }
    };

    return (
        <div className="chart">
            <ReactEcharts ref={chartRef} option={opts} style={{height: "70vh"}} onEvents={onEvents}/>
            <label for="coef">Pane mingi nr</label>
            <input step="0.005" type="number" value={inputValue} id="coef"
                   onChange={(evt) => setInputValue(evt.target.value)}/>
        </div>
    )
};


const data = [
    [[28604, 77, 17096869, 'Australia', 1990], [31163, 77.4, 27662440, 'Canada', 1990], [1516, 68, 1154605773, 'China', 1990], [13670, 74.7, 10582082, 'Cuba', 1990], [28599, 75, 4986705, 'Finland', 1990], [29476, 77.1, 56943299, 'France', 1990], [31476, 75.4, 78958237, 'Germany', 1990], [28666, 78.1, 254830, 'Iceland', 1990], [1777, 57.7, 870601776, 'India', 1990], [29550, 79.1, 122249285, 'Japan', 1990], [2076, 67.9, 20194354, 'North Korea', 1990], [12087, 72, 42972254, 'South Korea', 1990], [24021, 75.4, 3397534, 'New Zealand', 1990], [43296, 76.8, 4240375, 'Norway', 1990], [10088, 70.8, 38195258, 'Poland', 1990], [19349, 69.6, 147568552, 'Russia', 1990], [10670, 67.3, 53994605, 'Turkey', 1990], [26424, 75.7, 57110117, 'United Kingdom', 1990], [37062, 75.4, 252847810, 'United States', 1990]],
    [[44056, 81.8, 23968973, 'Australia', 2015], [43294, 81.7, 35939927, 'Canada', 2015], [13334, 76.9, 1376048943, 'China', 2015], [21291, 78.5, 11389562, 'Cuba', 2015], [38923, 80.8, 5503457, 'Finland', 2015], [37599, 81.9, 64395345, 'France', 2015], [44053, 81.1, 80688545, 'Germany', 2015], [42182, 82.8, 329425, 'Iceland', 2015], [5903, 66.8, 1311050527, 'India', 2015], [36162, 83.5, 126573481, 'Japan', 2015], [1390, 71.4, 25155317, 'North Korea', 2015], [34644, 80.7, 50293439, 'South Korea', 2015], [34186, 80.6, 4528526, 'New Zealand', 2015], [64304, 81.6, 5210967, 'Norway', 2015], [24787, 77.3, 38611794, 'Poland', 2015], [23038, 73.13, 143456918, 'Russia', 2015], [19360, 76.5, 78665830, 'Turkey', 2015], [38225, 81.4, 64715810, 'United Kingdom', 2015], [53354, 79.1, 321773631, 'United States', 2015]]
];

export default SampleChart;
