import React from 'react';
import ReactEcharts from "echarts-for-react";

const SampleChart = () => {


    const chartRef = React.useRef(null);
    let coefficient = 1.005
    let coefficient2 = 1.005
    const [inputValue, setInputValue] = React.useState(coefficient);
    let i = 0;
    let data1 = ["Agriculture, forestry and fishing", 4.9, 5.0, 5.2, 5.4, 5.5, 5.1, 4.6, 4.7, 4.6, 4.2, 3.9]
    let data3 = ["Mining and quarrying", 0.6, 0.8, 0.8, 0.6, 0.5, 0.4, 0.3, 0.3, 0.4, 0.6, 0.6]
    let data5 = ["Manufacturing", 18.5, 17.1, 16.3, 17.7, 17.2, 16.8, 16.6, 17.3, 17.0, 17.5, 17.4]
    let data7 = ["Electricity, gas, steam, water supply; sewerage, waste management", 1.3, 1.3, 1.3, 1.5, 1.7, 1.4, 1.3, 1.2, 1.4, 1.4, 1.2]
    let data9 = ["Construction", 12.2, 10.0, 9.0, 10.4, 9.9, 9.4, 9.9, 9.8, 9.1, 8.7, 8.7]
    let data11 = ["Wholesale and retail trade; repair of motor vehicles and motorcycles", 14.8, 14.3, 14.9, 13.8, 13.1, 13.2, 12.8, 13.5, 13.2, 13.3, 13.6]
    let data13 = ["Transportation and storage", 7.0, 7.7, 6.8, 7.0, 7.2, 6.4, 7.2, 6.1, 7.1, 6.9, 6.4]
    let data15 = ["Accommodation and food service activities", 3.4, 3.3, 3.5, 3.0, 3.1, 3.9, 4.3, 4.1, 4.2, 4.0, 4.3]
    let data17 = ["Information and communication", 2.6, 2.7, 2.5, 3.1, 3.4, 3.6, 3.9, 4.8, 4.8, 5.1, 4.6]
    let data19 = ["Financial and insurance activities", 1.8, 2.2, 1.8, 1.7, 1.9, 1.8, 1.4, 1.5, 1.7, 2.0, 2.0]
    let data21 = ["Real estate activities", 1.3, 1.1, 1.3, 1.3, 1.2, 1.5, 1.7, 1.2, 1.6, 1.3, 1.2]
    let data23 = ["Professional, scientific and technical activities", 3.7, 4.0, 4.2, 4.5, 4.3, 4.8, 4.6, 4.2, 4.3, 5.0, 5.2]
    let data25 = ["Administrative and support service activities", 2.2, 2.5, 3.2, 2.7, 3.1, 3.1, 2.6, 2.5, 3.1, 3.4, 3.4]
    let data27 = ["Public administration and defence, compulsory social security", 6.7, 7.3, 8.4, 7.6, 7.6, 8.3, 8.4, 8.0, 7.3, 6.9, 6.6]
    let data29 = ["Education", 9.5, 10.9, 10.2, 9.8, 10.2, 9.4, 9.3, 10.3, 9.5, 8.9, 9.7]
    let data31 = ["Human health and social work activities", 4.9, 5.6, 5.8, 5.6, 5.3, 5.7, 6.1, 5.6, 5.5, 5.4, 5.9]
    let data33 = ["Arts, entertainment and recreation", 2.5, 2.6, 2.8, 2.6, 2.7, 3.0, 3.0, 2.5, 3.0, 2.8, 3.2]
    let data35 = ["Other economic activity", 2.1, 1.9, 2.0, 1.7, 2.0, 2.0, 1.9, 2.5, 2.4, 2.4, 2.0]
    let years = ['product', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']

    function calcNumber(number, inputValue) {
        return (Number)(number[number.length - 1] * inputValue).toFixed(1);
    }

    while (i < 0) {
        years.push(((Number)(years[years.length - 1]) + 1).toFixed(0))
        data1.push(calcNumber(data1, inputValue));
        data3.push(calcNumber(data3, inputValue));
        data5.push(calcNumber(data5, inputValue));
        data7.push(calcNumber(data7, inputValue));
        data9.push(calcNumber(data9, inputValue));
        data11.push(calcNumber(data11, inputValue));
        data13.push(calcNumber(data13, inputValue));
        data15.push(calcNumber(data15, inputValue));
        data17.push(calcNumber(data17, inputValue));
        data19.push(calcNumber(data19, inputValue));
        data21.push(calcNumber(data21, inputValue));
        data23.push(calcNumber(data23, inputValue));
        data25.push(calcNumber(data25, inputValue));
        data27.push(calcNumber(data27, inputValue));
        data29.push(calcNumber(data29, inputValue));
        data31.push(calcNumber(data31, inputValue));
        data33.push(calcNumber(data33, inputValue));
        data35.push(calcNumber(data35, inputValue));
        i++;

    }
    const opts = {
        color: ['#F64B6D', '#624386', '#FED114', '#434D88', '#B2033C', '#FF8E32', '#78D7C1', '#72272E', '#5EAFFF'],
        legend: {
            orient: 'vertical',
            x: 'left',
            data: years
        },
        dataset: {
            source: [
                years,
                data1,
                data3,
                data5,
                data7,
                data9,
                data11,
                data13,
                data15,
                data17,
                data19,
                data21,
                data23,
                data25,
                data27,
                data29,
                data31,
                data33,
                data35,
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
            {type: 'line', smooth: true, seriesLayoutBy: 'row',symbol: 'none'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row',symbol: 'none'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row',symbol: 'none'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row',symbol: 'none'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row',symbol: 'none'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row',symbol: 'none'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row',symbol: 'none'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row',symbol: 'none'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row',symbol: 'none'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row',symbol: 'none'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row',symbol: 'none'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row',symbol: 'none'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row',symbol: 'none'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row',symbol: 'none'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row',symbol: 'none'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row',symbol: 'none'},

        ]
    }

    let onEvents = {

    };

    return (
        <div className="thumbnail">
            <ReactEcharts ref={chartRef} option={opts} style={{height: "100%"}} onEvents={onEvents}/>
        </div>
    )
};

export default SampleChart;
