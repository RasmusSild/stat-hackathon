import React from 'react';
import ReactEcharts from "echarts-for-react";

const SampleChart = () => {


    const chartRef = React.useRef(null);
    let coefficient = 1.005
    let coefficient2 = 1.005
    const [inputValue, setInputValue] = React.useState(coefficient);
    let i = 0;
    let data2 =    ["Agriculture, forestry and fishing", 0.9 , 1.2 , 0.8 , 0.8 , 0, 1.2 , 1.0 , 0.9 , 1.0 , 0.7 , 0.7]
    let data4 =    ["Mining and quarrying", 1.9 , 2.0 , 2.5 , 2.3 , 2.0 , 2.0 , 1.9 , 1.3 , 1.0 , 0.8 , 1.4]
    let data6 =    ["Manufacturing", 26.3 , 24.6 , 27.2 , 27.1 , 24.6 , 25.5 , 24.5 , 24.6 , 25.5 , 24.8 , 23.4]
    let data8 =    ["Electricity, gas, steam, water supply; sewerage, waste management", 2.4 , 2.8 , 4.2 , 3.7 , 3.0 , 2.4 , 3.6 , 3.1 , 1.7 , 2.4 , 2.5]
     let data10 =   ["Construction", 12.5 , 9.1 , 6.5 , 7.6 , 8.0 , 8.1 , 7.3 , 9.2 , 8.4 , 8.4 , 9.1]
     let data12 =   ["Wholesale and retail trade; repair of motor vehicles and motorcycles", 11.9 , 13.0 , 11.2 , 12.0 , 11.9 , 12.5 , 13.6 , 11.7 , 12.3 , 13.1 , 10.4]
     let data14 =   ["Transportation and storage", 10.1 , 11.1 , 11.3 , 11.6 , 12.2 , 11.7 , 11.6 , 11.7 , 11.2 , 12.4 , 12.0]
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
     let data36 =   ["Other economic activity", 2.6 , 1.9 , 2.4 , 1.8 , 1.5 , 1.9 , 2.2 , 2.9 , 2.8 , 3.1 , 2.8]
    let years = ['product', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']

    function calcNumber(number, inputValue) {
        return (Number)(number[number.length - 1] * inputValue).toFixed(1);
    }

    while (i < 0) {
        years.push(((Number)(years[years.length - 1]) + 1).toFixed(0))
        data2.push(calcNumber(data2, inputValue));
        data4.push(calcNumber(data4, inputValue));
        data6.push(calcNumber(data6, inputValue));
        data8.push(calcNumber(data8, inputValue));
        data10.push(calcNumber(data10, inputValue));
        data12.push(calcNumber(data12, inputValue));
        data14.push(calcNumber(data14, inputValue));
        data16.push(calcNumber(data16, inputValue));
        data18.push(calcNumber(data18, inputValue));
        data20.push(calcNumber(data20, inputValue));
        data22.push(calcNumber(data22, inputValue));
        data24.push(calcNumber(data24, inputValue));
        data26.push(calcNumber(data26, inputValue));
        data28.push(calcNumber(data28, inputValue));
        data30.push(calcNumber(data30, inputValue));
        data32.push(calcNumber(data32, inputValue));
        data34.push(calcNumber(data34, inputValue));
        data36.push(calcNumber(data36, inputValue));
        i++;
    }
    const opts = {
        color: ['#F64B6D', '#624386', '#FED114','#434D88', '#B2033C',  '#FF8E32', '#78D7C1',  '#72272E', '#5EAFFF'],

        legend: {
            orient: 'vertical',
            x: 'left',
            data: years
        },
        tooltip: {
            trigger: 'axis',
            showContent: false,
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
        ]
    }

    let onEvents = {

    };

    return (
        <div className="chart thumbnail">
            <ReactEcharts ref={chartRef} option={opts} style={{height: "100%"}} onEvents={onEvents}/>
        </div>
    )
};

export default SampleChart;
