import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  // 接收傳進來的panTo函式
  const {
    moveTo,
    stores,
    caculateRoute,
    caculateRoute2,
    move,
    setMove,
    distance,
    duration,
  } = props;

  const [value, setValue] = React.useState(0);
  const moveOptions = [
    // eslint-disable-next-line no-undef
    google.maps.TravelMode.BICYCLING,
    // eslint-disable-next-line no-undef
    google.maps.TravelMode.DRIVING,
    // eslint-disable-next-line no-undef
    google.maps.TravelMode.TRANSIT,
    // eslint-disable-next-line no-undef
    google.maps.TravelMode.WALKING,
  ];
  const [moveTw, setMoveTw] = useState('');
  const moveOptionstw = ['騎腳踏車', '開車', '大眾運輸', '走路'];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            onClick={() => {
              moveTo(stores[0]);
            }}
            sx={{
              fontSize: '2rem',
              margin: '0 auto',
              fontFamily: 'Zen Maru Gothic',
            }}
            label="大安店"
            {...a11yProps(0)}
          />
          <Tab
            onClick={() => {
              moveTo(stores[1]);
            }}
            sx={{
              fontSize: '2rem',
              margin: '0 auto',
              fontFamily: 'Zen Maru Gothic',
            }}
            label="北車店"
            {...a11yProps(1)}
          />
          <Tab
            onClick={() => {
              moveTo(stores[2]);
            }}
            sx={{
              fontSize: '2rem',
              margin: '0 auto',
              fontFamily: 'Zen Maru Gothic',
            }}
            label="市府店"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <p className="bingH5">ポッチーパン屋 大安店</p>

        <ul>
          <li>
            <p className="bingH6" style={{ fontWeight: 'bold' }}>
              地址
            </p>
            <p className="bingText-16">台北市大安區復興南路一段390號2樓</p>
          </li>
          <hr />
          <li>
            <p className="bingH6" style={{ fontWeight: 'bold' }}>
              聯絡電話
            </p>
            <p className="bingText-16">02-33778778</p>
          </li>
          <hr />

          <li>
            <p className="bingH6" style={{ fontWeight: 'bold' }}>
              E-MAIL
            </p>
            <p className="bingText-16">LoveDonut@meow.com</p>
          </li>
          <hr />
          <li>
            <table className="table">
              <thead>
                <tr>
                  <th
                    className="bingH6 bingTable"
                    scope="col"
                    style={{ fontWeight: 'bold' }}
                  >
                    營業時間
                  </th>
                  <th scope="col">月</th>
                  <th scope="col">火</th>
                  <th scope="col">水</th>
                  <th scope="col">木</th>
                  <th scope="col">金</th>
                  <th scope="col">土</th>
                  <th scope="col">日</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="bingH6 bingTable" scope="row">
                    10：00～20：00
                  </th>
                  <td>
                    <i className="fa-regular fa-circle"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-circle"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-circle"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-circle"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-circle"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-circle"></i>
                  </td>
                  <td>
                    <i className="fa-regular fa-circle"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
          <li className="mt-5">
            <p className="bingH6" style={{ fontWeight: 'bold' }}>
              計算距離與時間
            </p>
            <div className="d-flex justify-content-around">
              {moveOptions.map((v, i) => {
                return (
                  <div className="bingSelect" key={i}>
                    <input
                      type="radio"
                      checked={move === v}
                      value={v}
                      onChange={(e) => {
                        setMove(e.target.value);
                        setMoveTw(moveOptionstw[i]);
                        caculateRoute(moveOptions[i]);
                      }}
                    />
                    <img
                      style={
                        move === v
                          ? { background: '#616153' }
                          : { background: '#f5f5f5' }
                      }
                      src={`./images/map/${v}.png`}
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
            <span className="bingText-16">
              距離<span className="bingH6">{distance}</span>，{moveTw}
              前往預估<span className="bingH6">{duration}</span>{' '}
            </span>
          </li>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <p className="bingH5">ポッチーパン屋 北車店</p>

        <ul>
          <li>
            <p className="bingH6" style={{ fontWeight: 'bold' }}>
              地址
            </p>
            <p className="bingText-16">台北市中正區北平西路3號</p>
          </li>
          <hr />
          <li>
            <p className="bingH6" style={{ fontWeight: 'bold' }}>
              聯絡電話
            </p>
            <p className="bingText-16">02-23713558</p>
          </li>
          <hr />

          <li>
            <p className="bingH6" style={{ fontWeight: 'bold' }}>
              E-MAIL
            </p>
            <p className="bingText-16">LoveDonut@meow.com</p>
          </li>
          <hr />
          <li>
            <table className="table">
              <thead>
                <tr>
                  <th
                    className="bingH6 bingTable"
                    scope="col"
                    style={{ fontWeight: 'bold' }}
                  >
                    營業時間
                  </th>
                  <th scope="col">月</th>
                  <th scope="col">火</th>
                  <th scope="col">水</th>
                  <th scope="col">木</th>
                  <th scope="col">金</th>
                  <th scope="col">土</th>
                  <th scope="col">日</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="bingH6 bingTable" scope="row">
                    10：00～20：00
                  </th>
                  <td>
                    <i className="fa-solid fa-circle"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-circle"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-circle"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-circle"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-circle"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-circle"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-circle"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
          <li className="mt-5">
            <p className="bingH6" style={{ fontWeight: 'bold' }}>
              計算距離與時間
            </p>
            <div className="d-flex justify-content-around">
              {moveOptions.map((v, i) => {
                return (
                  <div className="bingSelect" key={i}>
                    <input
                      type="radio"
                      checked={move === v}
                      value={v}
                      onChange={(e) => {
                        setMove(e.target.value);
                        setMoveTw(moveOptionstw[i]);
                        caculateRoute(moveOptions[i]);
                      }}
                    />
                    <img
                      style={
                        move === v
                          ? { background: '#616153' }
                          : { background: '#f5f5f5' }
                      }
                      src={`./images/map/${v}.png`}
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
            <span className="bingText-16">
              距離<span className="bingH6">{distance}</span>，{moveTw}
              前往預估<span className="bingH6">{duration}</span>{' '}
            </span>
          </li>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <p className="bingH5">ポッチーパン屋 市府店</p>
        <ul>
          <li>
            <p className="bingH6" style={{ fontWeight: 'bold' }}>
              地址
            </p>
            <p className="bingText-16">台北市信義區忠孝東路五段2號</p>
          </li>
          <hr />
          <li>
            <p className="bingH6" style={{ fontWeight: 'bold' }}>
              聯絡電話
            </p>
            <p className="bingText-16">02-55671284</p>
          </li>
          <hr />

          <li>
            <p className="bingH6" style={{ fontWeight: 'bold' }}>
              E-MAIL
            </p>
            <p className="bingText-16">LoveDonut@meow.com</p>
          </li>
          <hr />
          <li>
            <table className="table">
              <thead>
                <tr>
                  <th
                    className="bingH6 bingTable"
                    scope="col"
                    style={{ fontWeight: 'bold' }}
                  >
                    營業時間
                  </th>
                  <th scope="col">月</th>
                  <th scope="col">火</th>
                  <th scope="col">水</th>
                  <th scope="col">木</th>
                  <th scope="col">金</th>
                  <th scope="col">土</th>
                  <th scope="col">日</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="bingH6 bingTable" scope="row">
                    10：00～20：00
                  </th>
                  <td>
                    <i className="fa-solid fa-circle"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-circle"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-circle"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-circle"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-circle"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-circle"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-circle"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
          <li className="mt-5">
            <p className="bingH6" style={{ fontWeight: 'bold' }}>
              計算距離與時間
            </p>
            <div className="d-flex justify-content-around">
              {moveOptions.map((v, i) => {
                return (
                  <div className="bingSelect" key={i}>
                    <input
                      type="radio"
                      checked={move === v}
                      value={v}
                      onChange={(e) => {
                        setMove(e.target.value);
                        setMoveTw(moveOptionstw[i]);
                        caculateRoute2(moveOptions[i]);
                      }}
                    />
                    <img
                      style={
                        move === v
                          ? { background: '#616153' }
                          : { background: '#f5f5f5' }
                      }
                      src={`./images/map/${v}.png`}
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
            <span className="bingText-16">
              距離<span className="bingH6">{distance}</span>，{moveTw}
              前往預估<span className="bingH6">{duration}</span>
            </span>
          </li>
        </ul>
      </TabPanel>
    </Box>
  );
}
