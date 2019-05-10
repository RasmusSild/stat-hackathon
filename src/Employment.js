import React from 'react';
import ReactEcharts from "echarts-for-react";

const Employment = () => {

    const chartRef = React.useRef(null);
    const shadowColor = 'rgba(98, 67, 134, 0.3)';
    const blurRadius = 10;
    let coefficient = 1.005;
    let coefficient2 = 1.005;
    let lastYear = 2018;
    const [inputValue, setInputValue] = React.useState(coefficient);
    const [inputValue2, setInputValue2] = React.useState(coefficient2);
    const [tillYear, setYear] = React.useState(lastYear);
    let i = 0;
    let years = ['product', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'];
    let _18_24data = ['Native population, ages 18-24', 35.5, 28.0, 25.0, 30.6, 31.5, 31.8, 32.6, 35.7, 36.7, 39.7, 41.2];
    let _25_49data = ['Native population, ages 25-49', 84.3, 76.6, 74.8, 78.4, 79.7, 80.5, 80.9, 82.8, 82.1, 83.8, 83.9];
    let _50_74data = ['Native population, ages 50-74', 51.1, 48.5, 45.8, 49.0, 51.1, 52.8, 53.6, 54.9, 56.2, 57.3, 57.9];
    let _18_24data2 = ['Immigrant population, ages 18-24', 5.7, 4.4, 2.5, 3.3, 3.5, 3.3, 2.4, 1.8, 1.8, 2.8, 1.8];
    let _25_49data2 = ['Immigrant population, ages 25-49', 54.8, 54.5, 51.7, 48.5, 46.7, 48.5, 48.9, 47.7, 46.9, 47.3, 47.4];
    let _50_74data2 = ['Immigrant population, ages 50-74', 39.5, 41.1, 45.8, 48.2, 49.8, 48.2, 48.7, 50.4, 49.5, 49.9, 50.8];

    function calcNumber(number, coefficient) {
        let numberVal = (Number)(number[number.length - 1] * coefficient * getRandomArbitrary(0.95, 1.05)).toFixed(1);
        return numberVal > 100 ? 100 : numberVal;
    }

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    while (i < (tillYear- lastYear)) {
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
        grid: {
            bottom: "20%"
        },
        color: ['#F64B6D', '#624386', '#FED114','#434D88', '#B2033C',  '#FF8E32', '#78D7C1',  '#72272E', '#5EAFFF'],
        title: {
            text: 'Employment rate',
            subtext: 'Employment rate of native and immigrant population by age group IR03'
        },
        legend: {
            bottom: 0,
            height: 'auto',
            padding: [
                0, 0, 20, 0
            ]
        },
        tooltip: {
            trigger: 'axis',
            showContent: true,
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
        series: [
            {
                type: 'line', smooth: true, seriesLayoutBy: 'row', itemStyle: {
                    normal: {
                        shadowBlur: blurRadius,
                        shadowColor: shadowColor
                    }
                },},
            {type: 'line', smooth: true, seriesLayoutBy: 'row',                itemStyle: {
                    normal: {
                    shadowBlur: blurRadius,
                    shadowColor: shadowColor
                    }
                },},
            {
                type: 'line', smooth: true, seriesLayoutBy: 'row', itemStyle: {
                    normal: {
                        shadowBlur: blurRadius,
                        shadowColor: shadowColor
                    }
                },},
            {
                type: 'bar', smooth: true, seriesLayoutBy: 'row', itemStyle: {
                    normal: {
                        shadowBlur: blurRadius,
                        shadowColor: shadowColor
                    }
                },},
            {
                type: 'bar', smooth: true, seriesLayoutBy: 'row', itemStyle: {
                    normal: {
                        shadowBlur: blurRadius,
                        shadowColor: shadowColor
                    }
                },},
            {
                type: 'bar', smooth: true, seriesLayoutBy: 'row', itemStyle: {
                    normal: {
                        shadowBlur: blurRadius,
                        shadowColor: shadowColor
                    }
                },},

        ]
    }

    let onEvents = {

    };

    return (
        <div className="chart">
            <ReactEcharts ref={chartRef} option={opts} style={{height: "80vh"}} onEvents={onEvents}/>
            <div className="field">
              <div className="control">
                <label className="label">todo Eestlaste tööhõivemäära trend</label>
                <input className="input" step="0.005"  type="number" value={inputValue} id="coef"
                       onChange={(evt) => setInputValue(evt.target.value)}/>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <label className="label">todo  Välistööjõu tööhõivemäära trend</label>
                <input className="input" step="0.005" type="number" value={inputValue2} id="coef2"
                       onChange={(evt) => setInputValue2(evt.target.value)}/>
              </div>
            </div>
            <div className="field">
                <div className="control">
                    <label className="label">Years</label>
                    <input className="input" step="1" type="number" max={2028} value={tillYear} id="coef2"
                           onChange={(evt) => setYear(evt.target.value)}/>
                </div>
            </div>
        </div>
    )
};

export default Employment;
