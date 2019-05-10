import React from 'react';
import ReactEcharts from "echarts-for-react";

const SampleChart = () => {

    const chartRef = React.useRef(null);
    let lastYear = 2018;
    const [newImmigrants, setInputValue] = React.useState(0);
    const [tillYear, setYear] = React.useState(lastYear);
    let i = 0;
    let data2 =    ["Agriculture, forestry and fishing", 0.9 , 1.2 , 0.8 , 0.8 , 0, 1.2 , 1.0 , 0.9 , 1.0 , 0.7 , 0.7]
    let data4 =    ["Mining and quarrying", 1.9 , 2.0 , 2.5 , 2.3 , 2.0 , 2.0 , 1.9 , 1.3 , 1.0 , 0.8 , 1.4]
    let data6 =    ["Manufacturing", 26.3 , 24.6 , 27.2 , 27.1 , 24.6 , 25.5 , 24.5 , 24.6 , 25.5 , 24.8 , 23.4]
    let data8 =    ["Electricity, gas, steam, water supply; sewerage, waste management", 2.4 , 2.8 , 4.2 , 3.7 , 3.0 , 2.4 , 3.6 , 3.1 , 1.7 , 2.4 , 2.5]
     let data10 =   ["Construction", 12.5 , 9.1 , 6.5 , 7.6 , 8.0 , 8.1 , 7.3 , 9.2 , 8.4 , 8.4 , 9.1]
     let data12 =   ["Wholesale and retail trade; repair of motor vehicles and motorcycles", 11.9 , 13.0 , 11.2 , 12.0 , 11.9 , 12.5 , 13.6 , 11.7 , 12.3 , 13.1 , 10.4]
     let data14 =   ["Transportation and storage", 10.1 , 11.1 , 11.3 , 11.6 , 12.2 , 11.7 , 11.6 , 11.7 , 11.2 , 12.4 , 12.0]
     let data36 =   ["Other economic activity", 2.6 , 1.9 , 2.4 , 1.8 , 1.5 , 1.9 , 2.2 , 2.9 , 2.8 , 3.1 , 2.8]
     let data16 =   ["Accommodation and food service activities", 3.8 , 3.1 , 2.7 , 3.0 , 2.7 , 3.2 , 3.6 , 3.8 , 3.8 , 3.5 , 4.4]
     let data18 =   ["Information and communication", 1.7 , 1.9 , 1.3 , 1.5 , 1.7 , 1.8 , 2.1 , 0, 2.9 , 3.0 , 3.8]
     let data20 =   ["Financial and insurance activities", 0.9 , 1.0 , 0, 1.6 , 1.3 , 1.0 , 0, 1.4 , 1.7 , 0, 1.2]
     let data22 =   ["Real estate activities", 2.5 , 2.8 , 3.4 , 3.6 , 3.6 , 3.2 , 2.2 , 3.2 , 2.8 , 2.6 , 2.6]
     let data24 =   ["Professional, scientific and technical activities", 1.6 , 2.0 , 2.0 , 1.5 , 1.7 , 2.1 , 3.0 , 3.1 , 2.0 , 2.3 , 2.3]
     let data26 =   ["Administrative and support service activities", 4.0 , 4.2 , 3.9 , 3.7 , 4.6 , 5.5 , 4.7 , 4.4 , 4.3 , 4.4 , 5.1]
     let data28 =   ["Public administration and defence, compulsory social security", 3.0 , 3.1 , 2.5 , 2.7 , 2.4 , 1.9 , 2.7 , 1.5 , 1.5 , 1.6 , 2.1]
     let data30 =   ["Education", 7.9 , 9.1 , 8.5 , 7.9 , 9.6 , 7.8 , 7.1 , 6.3 , 6.9 , 7.4 , 7.3]
     let data32 =   ["Human health and social work activities", 4.1 , 5.5 , 6.6 , 6.1 , 6.9 , 6.5 , 6.5 , 8.1 , 8.4 , 7.0 , 6.9]
     let data34 =   ["Arts, entertainment and recreation", 1.8 , 1.7 , 1.8 , 1.6 , 1.3 , 1.8 , 1.5 , 1.2 , 1.8 , 1.5 , 1.9]
    let years = ['product', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']

    function calcNumber(number, inputValue) {
        return (Number)(number[number.length - 1] * inputValue).toFixed(1);
    }

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    while (i < (tillYear - lastYear)) {
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
        data2.push(calcNumber(data2, getRandomArbitrary(est * minbound, est * maxbound)));
        data4.push(calcNumber(data4, getRandomArbitrary(est * minbound, est * maxbound)));
        data6.push(calcNumber(data6, getRandomArbitrary(est * minbound, est * maxbound)));
        data8.push(calcNumber(data8, getRandomArbitrary(est * minbound, est * maxbound)));
        data10.push(calcNumber(data10, getRandomArbitrary(est * minbound, est * maxbound)));
        data12.push(calcNumber(data12, getRandomArbitrary(est * minbound, est * maxbound)));
        data14.push(calcNumber(data14, getRandomArbitrary(est * minbound, est * maxbound)));
        data16.push(calcNumber(data16, getRandomArbitrary(est * minbound, est * maxbound)));
        data36.push(calcNumber(data36, getRandomArbitrary(est * minbound, est * maxbound)));
        data18.push(calcNumber(data18, getRandomArbitrary(imm * minbound, imm * maxbound)));
        data20.push(calcNumber(data20, getRandomArbitrary(imm * minbound, imm * maxbound)));
        data22.push(calcNumber(data22, getRandomArbitrary(imm * minbound, imm * maxbound)));
        data24.push(calcNumber(data24, getRandomArbitrary(imm * minbound, imm * maxbound)));
        data26.push(calcNumber(data26, getRandomArbitrary(imm * minbound, imm * maxbound)));
        data28.push(calcNumber(data28, getRandomArbitrary(imm * minbound, imm * maxbound)));
        data30.push(calcNumber(data30, getRandomArbitrary(imm * minbound, imm * maxbound)));
        data32.push(calcNumber(data32, getRandomArbitrary(imm * minbound, imm * maxbound)));
        data34.push(calcNumber(data34, getRandomArbitrary(imm * minbound, imm * maxbound)));
        i++;
    }
    const opts = {
        color: ['#F64B6D', '#624386', '#FED114',
            '#434D88', '#B2033C',  '#FF8E32',
            '#78D7C1',  '#72272E', '#5EAFFF'],
        title: {
            text: 'Where do immigrants work?',
            subtext: 'Employed immigration population by economic activity IR20',
            textStyle: {
                fontWeight: 400,
                fontFamily: "Muli, Roboto, Helvetica, Arial, sans-serif"
            }
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
                data2,
                data4,
                data6,
                data8,
                data10,
                data12,
                data14,
                data16,
                data18,
                data20,
                data22,
                data24,
                data26,
                data28,
                data30,
                data32,
                data34,
                data36,
            ]
        },
        avoidLabelOverlap: true,
        xAxis: {type: 'category'},
        yAxis: {gridIndex: 0},
        grid: {top: '45%', bottom: "20%"},
        series: [
            {type: 'line', smooth: true, seriesLayoutBy: 'row', },
            {type: 'line', smooth: true, seriesLayoutBy: 'row', },
            {type: 'line', smooth: true, seriesLayoutBy: 'row', },
            {type: 'line', smooth: true, seriesLayoutBy: 'row', },
            {type: 'line', smooth: true, seriesLayoutBy: 'row', },
            {type: 'line', smooth: true, seriesLayoutBy: 'row', },
            {type: 'line', smooth: true, seriesLayoutBy: 'row', },
            {type: 'line', smooth: true, seriesLayoutBy: 'row', },
            {type: 'line', smooth: true, seriesLayoutBy: 'row', },
            {type: 'line', smooth: true, seriesLayoutBy: 'row', },
            {type: 'line', smooth: true, seriesLayoutBy: 'row', },
            {type: 'line', smooth: true, seriesLayoutBy: 'row', },
            {type: 'line', smooth: true, seriesLayoutBy: 'row', },
            {type: 'line', smooth: true, seriesLayoutBy: 'row', },
            {type: 'line', smooth: true, seriesLayoutBy: 'row', },
            {type: 'line', smooth: true, seriesLayoutBy: 'row', },
            {
                type: 'pie',
                id: 'pie',
                radius: ['20%','30%'],
                center: ['50%', '25%'],
                label: {
                    formatter: '{b}: {@2008} ({d}%)',
                    color: '#000'
                },
                labelLine: {
                    lineStyle: {
                        color: '#000'
                    }
                },
                encode: {
                    itemName: 'product',
                    value: '2008',
                    tooltip: '2008'
                }
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
        }
    };

    return (
        <div className="chart">
            <ReactEcharts ref={chartRef} option={opts} onEvents={onEvents}/>
            <div className="field">
                <div className="control">
                    <label className="label">Number of new immigrant workers</label>
                    <input className="input" step="1000" type="number" value={newImmigrants} id="coef"
                           onChange={(evt) => setInputValue(evt.target.value)}/>
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <label className="label">Years</label>
                    <input className="input" step="1" type="number" value={tillYear} id="coef2"
                           onChange={(evt) => setYear(evt.target.value)}/>
                </div>
            </div>
        </div>
    )
};

export default SampleChart;
