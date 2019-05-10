import React from 'react';
import ReactEcharts from "echarts-for-react";

const Employment = () => {

    const chartRef = React.useRef(null);
    const shadowColor = 'rgba(98, 67, 134, 0.3)';
    const blurRadius = 10;
    let lastYear = 2018;
    const [newImmigrants, setInputValue] = React.useState(0);
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

    while (i < 0) {
        years.push(((Number)(years[years.length - 1]) + 1).toFixed(0))
        let est = 1;
        let imm = 1;
        let up10k = 1.01;
        let up30k = 1.03;
        let up100k = 1.04;
        let down10k = 0.99;
        let down30k = 0.97;
        let down100k = 0.96;
        if (newImmigrants >= 40000) {
            est = down100k
            imm = up100k
        } else if (newImmigrants >= 25000) {
            est = down30k
            imm = up30k
        } else if (newImmigrants >= 5000) {
            est = down10k
            imm = up10k
        } else if (newImmigrants >= 0) {
            est = 1
            imm = 1
        } else if (newImmigrants >= -5000) {
            est = up10k
            imm = down10k
        } else if (newImmigrants >= -25000) {
            est = up30k
            imm = down30k
        } else {
            est = up100k
            imm = down100k
        }
        const minbound = 0.98;
        const maxbound = 1.02;
        let item = calcNumber(_18_24data, getRandomArbitrary(est * minbound, est * maxbound));
        _18_24data.push(item);
        _25_49data.push(calcNumber(_25_49data, getRandomArbitrary(est * minbound, est * maxbound)));
        _50_74data.push(calcNumber(_50_74data, getRandomArbitrary(est * minbound, est * maxbound)));
        _18_24data2.push(calcNumber(_18_24data2, getRandomArbitrary(imm * minbound, imm * maxbound)));
        _25_49data2.push(calcNumber(_25_49data2, getRandomArbitrary(imm * minbound, imm * maxbound)));
        _50_74data2.push(calcNumber(_50_74data2, getRandomArbitrary(imm * minbound, imm * maxbound)));
        i++;
    }
    const opts = {
        grid: {
            bottom: "20%"
        },
        color: [
            '#F64B6D', '#FF8E32', '#FED114',
            '#72272E', '#5EAFFF', '#434D88'
        ],
        tooltip: {
            trigger: 'axis',
            showContent: false,
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
        xAxis: {
            type: 'category',
            show: false,
        },
        yAxis: {
            gridIndex: 0,
            show: false,
        },
        series: [
            {
                type: 'line', smooth: true, seriesLayoutBy: 'row', itemStyle: {
                    normal: {
                        shadowBlur: blurRadius,
                        shadowColor: shadowColor
                    }
                },
            },
            {
                type: 'line', smooth: true, seriesLayoutBy: 'row', itemStyle: {
                    normal: {
                        shadowBlur: blurRadius,
                        shadowColor: shadowColor
                    }
                },
            },
            {
                type: 'line', smooth: true, seriesLayoutBy: 'row', itemStyle: {
                    normal: {
                        shadowBlur: blurRadius,
                        shadowColor: shadowColor
                    }
                },
            },
            {
                type: 'bar', smooth: true, seriesLayoutBy: 'row', itemStyle: {
                    normal: {
                        shadowBlur: blurRadius,
                        shadowColor: shadowColor
                    }
                },
            },
            {
                type: 'bar', smooth: true, seriesLayoutBy: 'row', itemStyle: {
                    normal: {
                        shadowBlur: blurRadius,
                        shadowColor: shadowColor
                    }
                },
            },
            {
                type: 'bar', smooth: true, seriesLayoutBy: 'row', itemStyle: {
                    normal: {
                        shadowBlur: blurRadius,
                        shadowColor: shadowColor
                    }
                },
            },

        ]
    }

    let onEvents = {};

    return (
        <div className="thumbnail">
            <ReactEcharts ref={chartRef} option={opts} onEvents={onEvents} style={{height: "100%"}}/>
        </div>
    )
};

export default Employment;
