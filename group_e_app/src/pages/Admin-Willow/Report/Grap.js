import React, { useState, useEffect, useRef, useMemo } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';
import '../scssstyle/Reportstyle.scss';
function Grap(props) {
  const { setReportOption } = props;
  const [showChart, setShowChart] = useState([]);
  const [chooseValue, setChooseValue] = useState(10);

  //get grapdata
  const getshowchat = async () => {
    const response = await axios.get(
      `http://localhost:3600/willownews/grapdata`
    );
    const resdata = response.data;

    setShowChart(resdata);
  };

  const AGE_INTERVAL = chooseValue;

  const chartData = useMemo(() => {
    const ageIntervalList = [];
    const categories = {};
    showChart.map((row) => {
      const ageInterval = Math.floor((row.member_age - 1) / AGE_INTERVAL);

      //先找ageIntervalList 有沒有在裡面
      //如果沒有ageIntervalList.push
      const hasInterval = ageIntervalList.find(
        (x) => x.ageInterval === ageInterval
      );
      if (hasInterval) {
      } else {
        ageIntervalList.push({
          ageInterval,
        });
      }

      //如果有區間將+= row.total_quantity
      //如果沒有創空countByAge: {}
      //然後將row.total_quantity 設定進去
      //categories{row.p_name:ageInterval}
      //row.p_name等於categories[row.p_name]
      //countByAge[ageInterval]等於ageInterval
      if (categories[row.p_name]) {
        if (categories[row.p_name].countByAge[ageInterval])
          categories[row.p_name].countByAge[ageInterval] += row.quantity;
        else categories[row.p_name].countByAge[ageInterval] = row.quantity;
      } else {
        categories[row.p_name] = {
          countByAge: {},
        };
        categories[row.p_name].countByAge[ageInterval] = row.quantity;
      }
    });
    //最後return要的陣列以及類別
    ageIntervalList.sort((a, b) => (a.ageInterval > b.ageInterval ? 1 : -1));
    return {
      ageIntervalList,
      categories,
    };
  }, [showChart, chooseValue]);
  console.log(chartData.categories);
  console.log(chartData.ageIntervalList);
  const vshow = (e) => {
    setChooseValue(e.target.value);
  };

  //區間的下面的文字
  const getAgeIntervalName = (x) =>
    `${x * chooseValue + 1}-${(x + 1) * chooseValue}`;

  useEffect(() => {
    getshowchat();
  }, []);
  const test = Object.keys(chartData.categories);
  console.log('test', test);
  const series = Object.keys(chartData.categories).map((key) => {
    const countByAge = chartData.categories[key].countByAge;
    return {
      name: key,
      data: chartData.ageIntervalList.map(
        (x) => countByAge[x.ageInterval] || 0
      ),
    };
  });

  const options = {
    dataLabels: {
      enabled: false,
    },
    colors: ['#667302', '#BF0F30', '#F24405', '#0099DD', '#F2C849', '#801950'],
    legend: {
      fontSize: '23px',
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: chartData.ageIntervalList.map((x) =>
        getAgeIntervalName(x.ageInterval)
      ),
      labels: {
        style: {
          fontSize: '16px',
          fontWeight: 500,
        },
      },
    },
    yaxis: {
      title: {
        text: '$ (thousands)',
      },
      labels: {
        style: {
          fontSize: '16px',
          colors: ['#7286EA'],
          fontWeight: 700,
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return '$ ' + val + ' thousands';
        },
      },
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy',
      },
    },
    chart: {
      selection: {
        enabled: true,
      },
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true | '<img src="/static/icons/reset.png" width="20">',
          customIcons: [],
        },
        export: {
          csv: {
            filename: undefined,
            columnDelimiter: ',',
            headerCategory: 'category',
            headerValue: 'value',
            dateFormatter(timestamp) {
              return new Date(timestamp).toDateString();
            },
          },
          svg: {
            filename: undefined,
          },
          png: {
            filename: undefined,
          },
        },
        autoSelected: 'zoom',
      },
    },
  };

  return (
    <div id="willow_reportstyle">
      <label className="form-label">Example range</label>
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="btn  mt-3 willow_button"
          onClick={() => {
            setReportOption(0);
          }}
        >
          回上一頁
        </button>
      </div>
      <div className="">
        <div className="w-50 m-auto">
          <input
            type="range"
            className="form-range"
            id="customRange1"
            min={0}
            max={100}
            step={5}
            onChange={(e) => {
              vshow(e);
              console.log('chooseValue', chooseValue);
            }}
          />
        </div>
        <div className="w-25 m-auto text-center d-flex">
          <p className="align-items-center m-0 mt-1">區間為: </p>
          <input value={chooseValue + '   歲'} readOnly className="w-25 pb-2" />
        </div>
      </div>

      <div>
        <div>Grap</div>
        <div id="chart" className="willow_report_margin">
          <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={600}
            width={'100%'}
          />
        </div>
      </div>
    </div>
  );
}
export default Grap;
