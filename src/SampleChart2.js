import React from 'react';
import ReactEcharts from "echarts-for-react";

const SampleChart = () => {


    const chartRef = React.useRef(null);
    let coefficient = 1.005
    let coefficient2 = 1.005
    const [inputValue, setInputValue] = React.useState(coefficient);
    let i = 0;
    let data1 =["Põllumajandus, metsamajandus ja kalapüük Põlisrahvastik", 4.9, 5.0, 5.2, 5.4, 5.5, 5.1, 4.6, 4.7, 4.6, 4.2, 3.9]
    let data2 =    ["Põllumajandus, metsamajandus ja kalapüük Immigrantrahvastik", 0.9 , 1.2 , 0.8 , 0.8 , 0, 1.2 , 1.0 , 0.9 , 1.0 , 0.7 , 0.7]
    let data3 =    ["Mäetööstus Põlisrahvastik", 0.6 , 0.8 , 0.8 , 0.6 , 0.5 , 0.4 , 0.3 , 0.3 , 0.4 , 0.6 , 0.6]
    let data4 =    ["Mäetööstus Immigrantrahvastik", 1.9 , 2.0 , 2.5 , 2.3 , 2.0 , 2.0 , 1.9 , 1.3 , 1.0 , 0.8 , 1.4]
    let data5 =    ["Töötlev tööstus Põlisrahvastik", 18.5 , 17.1 , 16.3 , 17.7 , 17.2 , 16.8 , 16.6 , 17.3 , 17.0 , 17.5 , 17.4]
    let data6 =    ["Töötlev tööstus Immigrantrahvastik", 26.3 , 24.6 , 27.2 , 27.1 , 24.6 , 25.5 , 24.5 , 24.6 , 25.5 , 24.8 , 23.4]
    let data7 =    ["Elektrienergia, gaasi, auru ja veevarustus; kanalisatsioon; jäätmekäitlus Põlisrahvastik", 1.3 , 1.3 , 1.3 , 1.5 , 1.7 , 1.4 , 1.3 , 1.2 , 1.4 , 1.4 , 1.2]
    let data8 =    ["Elektrienergia, gaasi, auru ja veevarustus; kanalisatsioon; jäätmekäitlus Immigrantrahvastik", 2.4 , 2.8 , 4.2 , 3.7 , 3.0 , 2.4 , 3.6 , 3.1 , 1.7 , 2.4 , 2.5]
    let data9 =    ["Ehitus Põlisrahvastik", 12.2 , 10.0 , 9.0 , 10.4 , 9.9 , 9.4 , 9.9 , 9.8 , 9.1 , 8.7 , 8.7]
     let data10 =   ["Ehitus Immigrantrahvastik", 12.5 , 9.1 , 6.5 , 7.6 , 8.0 , 8.1 , 7.3 , 9.2 , 8.4 , 8.4 , 9.1]
     let data11 =   ["Hulgi- ja jaekaubandus; mootorsõidukite ja mootorrataste remont Põlisrahvastik", 14.8 , 14.3 , 14.9 , 13.8 , 13.1 , 13.2 , 12.8 , 13.5 , 13.2 , 13.3 , 13.6]
     let data12 =   ["Hulgi- ja jaekaubandus; mootorsõidukite ja mootorrataste remont Immigrantrahvastik", 11.9 , 13.0 , 11.2 , 12.0 , 11.9 , 12.5 , 13.6 , 11.7 , 12.3 , 13.1 , 10.4]
     let data13 =   ["Veondus ja laondus Põlisrahvastik", 7.0 , 7.7 , 6.8 , 7.0 , 7.2 , 6.4 , 7.2 , 6.1 , 7.1 , 6.9 , 6.4]
     let data14 =   ["Veondus ja laondus Immigrantrahvastik", 10.1 , 11.1 , 11.3 , 11.6 , 12.2 , 11.7 , 11.6 , 11.7 , 11.2 , 12.4 , 12.0]
     let data15 =   ["Majutus ja toitlustus Põlisrahvastik", 3.4 , 3.3 , 3.5 , 3.0 , 3.1 , 3.9 , 4.3 , 4.1 , 4.2 , 4.0 , 4.3]
     let data16 =   ["Majutus ja toitlustus Immigrantrahvastik", 3.8 , 3.1 , 2.7 , 3.0 , 2.7 , 3.2 , 3.6 , 3.8 , 3.8 , 3.5 , 4.4]
     let data17 =   ["Info ja side Põlisrahvastik", 2.6 , 2.7 , 2.5 , 3.1 , 3.4 , 3.6 , 3.9 , 4.8 , 4.8 , 5.1 , 4.6]
     let data18 =   ["Info ja side Immigrantrahvastik", 1.7 , 1.9 , 1.3 , 1.5 , 1.7 , 1.8 , 2.1 , 0, 2.9 , 3.0 , 3.8]
     let data19 =   ["Finants- ja kindlustustegevus Põlisrahvastik", 1.8 , 2.2 , 1.8 , 1.7 , 1.9 , 1.8 , 1.4 , 1.5 , 1.7 , 2.0 , 2.0]
     let data20 =   ["Finants- ja kindlustustegevus Immigrantrahvastik", 0.9 , 1.0 , 0, 1.6 , 1.3 , 1.0 , 0, 1.4 , 1.7 , 0, 1.2]
     let data21 =   ["Kinnisvaraalane tegevus Põlisrahvastik", 1.3 , 1.1 , 1.3 , 1.3 , 1.2 , 1.5 , 1.7 , 1.2 , 1.6 , 1.3 , 1.2]
     let data22 =   ["Kinnisvaraalane tegevus Immigrantrahvastik", 2.5 , 2.8 , 3.4 , 3.6 , 3.6 , 3.2 , 2.2 , 3.2 , 2.8 , 2.6 , 2.6]
     let data23 =   ["Kutse-, teadus- ja tehnikaalane tegevus Põlisrahvastik", 3.7 , 4.0 , 4.2 , 4.5 , 4.3 , 4.8 , 4.6 , 4.2 , 4.3 , 5.0 , 5.2]
     let data24 =   ["Kutse-, teadus- ja tehnikaalane tegevus Immigrantrahvastik", 1.6 , 2.0 , 2.0 , 1.5 , 1.7 , 2.1 , 3.0 , 3.1 , 2.0 , 2.3 , 2.3]
     let data25 =   ["Haldus- ja abitegevused Põlisrahvastik", 2.2 , 2.5 , 3.2 , 2.7 , 3.1 , 3.1 , 2.6 , 2.5 , 3.1 , 3.4 , 3.4]
     let data26 =   ["Haldus- ja abitegevused Immigrantrahvastik", 4.0 , 4.2 , 3.9 , 3.7 , 4.6 , 5.5 , 4.7 , 4.4 , 4.3 , 4.4 , 5.1]
     let data27 =   ["Avalik haldus ja riigikaitse; kohustuslik sotsiaalkindlustus Põlisrahvastik", 6.7 , 7.3 , 8.4 , 7.6 , 7.6 , 8.3 , 8.4 , 8.0 , 7.3 , 6.9 , 6.6]
     let data28 =   ["Avalik haldus ja riigikaitse; kohustuslik sotsiaalkindlustus Immigrantrahvastik", 3.0 , 3.1 , 2.5 , 2.7 , 2.4 , 1.9 , 2.7 , 1.5 , 1.5 , 1.6 , 2.1]
     let data29 =   ["Haridus Põlisrahvastik", 9.5 , 10.9 , 10.2 , 9.8 , 10.2 , 9.4 , 9.3 , 10.3 , 9.5 , 8.9 , 9.7]
     let data30 =   ["Haridus Immigrantrahvastik", 7.9 , 9.1 , 8.5 , 7.9 , 9.6 , 7.8 , 7.1 , 6.3 , 6.9 , 7.4 , 7.3]
     let data31 =   ["Tervishoid ja sotsiaalhoolekanne Põlisrahvastik", 4.9 , 5.6 , 5.8 , 5.6 , 5.3 , 5.7 , 6.1 , 5.6 , 5.5 , 5.4 , 5.9]
     let data32 =   ["Tervishoid ja sotsiaalhoolekanne Immigrantrahvastik", 4.1 , 5.5 , 6.6 , 6.1 , 6.9 , 6.5 , 6.5 , 8.1 , 8.4 , 7.0 , 6.9]
     let data33 =   ["Kunst, meelelahutus ja vaba aeg Põlisrahvastik", 2.5 , 2.6 , 2.8 , 2.6 , 2.7 , 3.0 , 3.0 , 2.5 , 3.0 , 2.8 , 3.2]
     let data34 =   ["Kunst, meelelahutus ja vaba aeg Immigrantrahvastik", 1.8 , 1.7 , 1.8 , 1.6 , 1.3 , 1.8 , 1.5 , 1.2 , 1.8 , 1.5 , 1.9]
     let data35 =   ["Muud tegevusalad Põlisrahvastik", 2.1 , 1.9 , 2.0 , 1.7 , 2.0 , 2.0 , 1.9 , 2.5 , 2.4 , 2.4 , 2.0]
     let data36 =   ["Muud tegevusalad Immigrantrahvastik", 2.6 , 1.9 , 2.4 , 1.8 , 1.5 , 1.9 , 2.2 , 2.9 , 2.8 , 3.1 , 2.8]
    let years = ['product', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']

    function calcNumber(number, inputValue) {
        return (Number)(number[number.length - 1] * inputValue).toFixed(1);
    }

    while (i < 22) {
        years.push(((Number)(years[years.length - 1]) + 1).toFixed(0))
        data1.push(calcNumber(data1, inputValue));
        data2.push(calcNumber(data2, inputValue));
        data3.push(calcNumber(data3, inputValue));
        data4.push(calcNumber(data4, inputValue));
        data5.push(calcNumber(data5, inputValue));
        data6.push(calcNumber(data6, inputValue));
        data7.push(calcNumber(data7, inputValue));
        data8.push(calcNumber(data8, inputValue));
        data9.push(calcNumber(data9, inputValue));
        data10.push(calcNumber(data10, inputValue));
        data11.push(calcNumber(data11, inputValue));
        data12.push(calcNumber(data12, inputValue));
        data13.push(calcNumber(data13, inputValue));
        data14.push(calcNumber(data14, inputValue));
        data15.push(calcNumber(data15, inputValue));
        data16.push(calcNumber(data16, inputValue));
        data17.push(calcNumber(data17, inputValue));
        data18.push(calcNumber(data18, inputValue));
        data19.push(calcNumber(data19, inputValue));
        data20.push(calcNumber(data20, inputValue));
        data21.push(calcNumber(data21, inputValue));
        data22.push(calcNumber(data22, inputValue));
        data23.push(calcNumber(data23, inputValue));
        data24.push(calcNumber(data24, inputValue));
        data25.push(calcNumber(data25, inputValue));
        data26.push(calcNumber(data26, inputValue));
        data27.push(calcNumber(data27, inputValue));
        data28.push(calcNumber(data28, inputValue));
        data29.push(calcNumber(data29, inputValue));
        data30.push(calcNumber(data30, inputValue));
        data31.push(calcNumber(data31, inputValue));
        data32.push(calcNumber(data32, inputValue));
        data33.push(calcNumber(data33, inputValue));
        data34.push(calcNumber(data34, inputValue));
        data35.push(calcNumber(data35, inputValue));
        data36.push(calcNumber(data36, inputValue));
        i++;

    }
    const opts = {
        color: ['#dd6b66', '#759aa0', '#e69d87', '#8dc1a9', '#ea7e53', '#eedd78', '#73a373', '#73b9bc', '#7289ab', '#91ca8c', '#f49f42'],
        legend: {},
        tooltip: {
            trigger: 'axis',
            showContent: true
        },
        dataset: {
            source: [
                years,
                data1,
                data2,
                data3,
                data4,
                data5,
                data6,
                data7,
                data8,
                data9,
                data10,
                data11,
                data12,
                data13,
                data14,
                data15,
                data16,
                data17,
                data18,
                data19,
                data20,
                data21,
                data22,
                data23,
                data24,
                data25,
                data26,
                data27,
                data28,
                data29,
                data30,
                data31,
                data32,
                data33,
                data34,
                data35,
                data36,
            ]
        },
        xAxis: {type: 'category'},
        yAxis: {gridIndex: 0},
        grid: {top: '55%'},
        series: [
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
        ]
    }

    return (
        <div className="chart">
            <ReactEcharts ref={chartRef} option={opts} style={{height: "70vh"}}/>
            <label for="coef">Tegevusvaldkonna osakaalu trend</label>
            <input step="0.005" type="number" value={inputValue} id="coef"
                   onChange={(evt) => setInputValue(evt.target.value)}/>
        </div>
    )
};

export default SampleChart;
