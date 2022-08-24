import React, { useState, useEffect, useRef, useMemo } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';
import '../scssstyle/Reportstyle.scss';
function Graptime(props) {
  const { setReportOption } = props;
  const [reportCount, setReportCount] = useState(0);
  const [originData, setOriginData] = useState([]);
  const [chooseValue, setChooseValue] = useState(1);
  const [chooseReportDate, setChooseReportDate] = useState({
    start: '',
    end: '',
  });
  //get grapdata
  const roption = (e) => {
    let numv = parseInt(e.target.value);

    setChooseValue(numv);
  };
  const getshowchat = async () => {
    if (chooseValue !== 6) {
      console.log('!!chooseasdasdReportDate.start1', !!chooseReportDate.start);
      const response = await axios.get(
        `http://localhost:3600/willownews/graptimedata?sid=${chooseValue}`
      );
      const resdata = response.data;
      console.log(resdata);
      setOriginData(resdata);
    } else if (chooseReportDate.start && chooseReportDate.end) {
      console.log('!!chooseReportDate.start2', !!chooseReportDate.start);
      const response = await axios.get(
        `http://localhost:3600/willownews/graptimedata?sid=${chooseValue}&&start=${chooseReportDate.start}&&end=${chooseReportDate.end}`
      );
      const resdata = response.data;
      console.log('resdata6', resdata);
      setOriginData(resdata);
    }
    console.log('!!chooseReportDate.start3', !!chooseReportDate.start);
  };
  useEffect(() => {
    getshowchat();
  }, [chooseValue, reportCount]);

  const changeFields = (event) => {
    const id = event.target.id;
    const val = event.target.value;
    console.log({ id, val });
    setChooseReportDate({ ...chooseReportDate, [id]: val });
  };
  const chartData = useMemo(() => {
    const TastList = [];
    const chatCount = {};

    originData.map((p) => {
      const tastThing = p.created_at.slice(0, 10);
      const hasTast = TastList.find((x) => x.tastOption === tastThing);
      if (hasTast) {
      } else {
        TastList.push({
          tastOption: tastThing,
        });
      }

      if (chatCount[p.p_name]) {
        if (chatCount[p.p_name].countByThing[tastThing])
          chatCount[p.p_name].countByThing[tastThing] += p.quantity;
        else chatCount[p.p_name].countByThing[tastThing] = p.quantity;
      } else {
        chatCount[p.p_name] = {
          countByThing: {},
        };
        chatCount[p.p_name].countByThing[tastThing] = p.quantity;
      }
      TastList.sort((a, b) => (a.tastOption > b.tastOption ? 1 : -1));

      console.log('tempCount1', chatCount.strawberry);
    });
    return {
      TastList,
      chatCount,
    };
  }, [originData, chooseValue]);
  console.log('chartDataasdasdasd', chartData.chatCount);
  console.log('chartDataasdasdasd', chartData.TastList);
  const series = Object.keys(chartData.chatCount).map((key) => {
    const countByThing = chartData.chatCount[key].countByThing;
    console.log('countByThing', countByThing);
    return {
      name: key,
      data: chartData.TastList.map((x) => countByThing[x.tastOption] || 0),
    };
  });

  const options = {
    chart: {
      height: 350,
      type: 'area',
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      fontSize: '20px',
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      type: 'datetime',
      categories: chartData.TastList.map((x) => `${x.tastOption}`),
      labels: {
        style: {
          fontSize: '16px',
          fontWeight: 500,
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '16px',
          colors: ['#7286EA'],
          fontWeight: 700,
        },
      },
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  };

  return (
    <div id="willow_reportstyle">
      <div>Graptime</div>
      <div className="d-flex justify-content-end mb-5">
        <button
          type="button"
          className="btn  mt-3 willow_button "
          onClick={() => {
            setReportOption(0);
          }}
        >
          回上一頁
        </button>
      </div>
      <div className="container mb-5">
        <div className="row">
          <div className="col willow_marbottom">
            <button
              type="button"
              className="btn  mt-3 willow_button2 willow_marleft"
              value={5}
              onClick={(e) => {
                let con = reportCount;
                roption(e);
                setReportCount(con + 1);
              }}
            >
              近一年
            </button>
            {/* ----------------------- */}
            <button
              type="button"
              className="btn  mt-3 willow_button2 willow_marleft"
              value={4}
              onClick={(e) => {
                let con = reportCount;
                roption(e);
                setReportCount(con + 1);
              }}
            >
              近半年
            </button>
            {/* ----------------------- */}
            <button
              type="button"
              className="btn  mt-3 willow_button2 willow_marleft"
              value={3}
              onClick={(e) => {
                let con = reportCount;
                roption(e);
                setReportCount(con + 1);
              }}
            >
              近三個月
            </button>
            {/* ----------------------- */}
            <button
              type="button"
              className="btn  mt-3 willow_button2 willow_marleft"
              value={2}
              onClick={(e) => {
                let con = reportCount;
                roption(e);
                setReportCount(con + 1);
              }}
            >
              近一個月
            </button>
            {/* ----------------------- */}
            <button
              type="button"
              className="btn  mt-3 willow_button2 willow_marleft"
              value={1}
              onClick={(e) => {
                let con = reportCount;
                roption(e);
                setReportCount(con + 1);
              }}
            >
              近一個禮拜
            </button>
            {/* ----------------------- */}
          </div>
          <div className="col d-flex justify-content-around align-items-center willow_border">
            <div className="form-group mt-3">
              <div className="d-flex">
                <div className="mt-2 willow_mar_sm">
                  <label>開始時間:</label>
                </div>
                <div>
                  <input
                    type="date"
                    id="start"
                    value={chooseReportDate.start}
                    onChange={(e) => {
                      changeFields(e);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="form-group  mt-3">
              <div className="d-flex">
                <div className="mt-2 willow_mar_sm">
                  <label>結束時間:</label>
                </div>
                <div>
                  <input
                    type="date"
                    id="end"
                    value={chooseReportDate.end}
                    onChange={(e) => {
                      changeFields(e);
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="mb-2">
                <button
                  type="button"
                  className="btn willow_button2  "
                  value={6}
                  onClick={(e) => {
                    let con = reportCount;
                    roption(e);
                    setReportCount(con + 1);
                  }}
                >
                  搜尋
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="willow_report_margin">
        <div id="chart">
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={600}
            width={'100%'}
          />
        </div>
      </div>
    </div>
  );
}

export default Graptime;
