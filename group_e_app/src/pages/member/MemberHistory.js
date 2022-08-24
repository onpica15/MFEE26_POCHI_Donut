import React, { useState, useContext, useEffect, useRef, version } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AuthContext from '../../pages/member/components/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ProductList from './MemberHistoryList';

function MemberHistory(props) {
  const { authorized, token, account, level, logout, setAuth, auth } =
    useContext(AuthContext);

  // 第一次記錄伺服器的原始資料用
  const [usersRaw, setUsersRaw] = useState([]);

  const [PODisplay, setPODisplay] = useState([]);
  const [getPO, setGetPO] = useState(false);
  //轉頁
  const navigate = useNavigate();

  const getdata = async () => {
    const response = await axios.get(
      'http://localhost:3600/member/memberhistory',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    //回來是陣列rrrr
    const res_data = response.data;
    console.log('res', res_data.length);
    if (res_data.length !== 0) {
      setGetPO(true);
    }
    //原始資料set state
    console.log('123',res_data);
    setUsersRaw(res_data);
    setPODisplay(res_data);
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <div className="container">
        <header className="yu_header">
          <h2>會員訂單</h2>
        </header>
        <nav className="yu_bar_nav">
          <div className="container yu_container">
            <ul className="yu_bar_ul">
              <li>
                <Link className="nav-link" to="/Membercenter">
                  <i className="fa-solid fa-user"></i>會員專區
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/MemberPsdchange">
                  <i className="fa-solid fa-user"></i>密碼更新
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="row">
          <div className="col yu_history_col_table">
            <table className="table table-hover yu_history_table">
              {getPO ? (
                <thead className="yu_history_thead">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">訂單總數量</th>
                    <th scope="col">訂單總金額</th>
                    <th scope="col">訂單成立日期</th>
                  </tr>
                </thead>
              ) : (
                <>
                  <p
                    onClick={() => {
                      navigate('/Product');
                    }}
                    style={{
                      color: '#616153',
                      margin: '3rem 0 0 0',
                      cursor: 'pointer',
                      textAlign: 'center',
                    }}
                  >
                    目前未有訂單，點擊前往商品頁面
                  </p>
                </>
              )}

              <tbody className="yu_history_tbody">
                {PODisplay.map((v, i) => {
                  return <ProductList key={i} num={i} detail={v} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberHistory;
