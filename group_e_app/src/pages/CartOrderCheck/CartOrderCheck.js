import React, { useState, useContext, createContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../../pages/member/components/AuthContext';

import H2 from '../../components/H2';
import CurrentOrder from '../CartOrderInfo/components/CurrentOrder';
import PersonalCheck from './components/PersonalCheck';
import ProjectButton from '../../components/ProjectButton/ProjectButton';

function CartOrderCheck(props) {
  const { setCarts, carts, personalDataFinal, setPersonalDataFinal } = props;
  const { sid } = useContext(AuthContext);

  // 購物車及訂單資料寫進資料庫
  // const totalOrderData = [carts, personalDataFinal];
  // const newCarts = {[...carts], [...personalDataFinal]};
  const newdata = carts.concat(personalDataFinal);

  // 有順利拿到兩個陣列;
  const [totalOrderData, setTotalOrderData] = useState(newdata);
  console.log('totalOrderData2', totalOrderData);

  // const [totalOrderData, setTotalOrderData] = useState({
  //   memSid: sid,
  //   shipName: '',
  //   shipPhone: '',
  //   shipEmail: '',
  //   country: '',
  //   township: '',
  //   addressDetail: '',
  //   creditCardNum: '',
  //   creditCardDate: '',
  //   creditCardName: '',
  //   creditSecurityCode: '',

  //   sid: '',
  //   product_name: '',
  //   category_sid: '',
  //   product_price: '',
  //   product_img: '',
  //   product_desc: '',
  //   created_at: '',
  //   conut: '',
  // });

  // 寫進資料庫
  const logsee = async (e) => {
    const data = totalOrderData;
    console.log('totalOrderData2', totalOrderData);

    const response = await axios.post(
      'http://localhost:3600/cartsData/cartsData',
      data
    );
    const resdata = response.data;
    setCarts([]);
  };

  return (
    <div className="container">
      <H2 title="請確認訂單資訊" Entitle="ORDER CHECK" />
      <div className="love-orderContainer">
        <CurrentOrder setCarts={setCarts} carts={carts} />
        <PersonalCheck
          personalDataFinal={personalDataFinal}
          setPersonalDataFinal={setPersonalDataFinal}
        />
        <div className="d-flex justify-content-center">
          <div className="d-flex mb-5 justify-content-between w-50">
            <div className="">
              <Link to="/Cart/CartOrderInfo">
                <button className="ProjectButton">回上一頁</button>
              </Link>
            </div>
            <div>
              <Link to="/Cart/CartOrderCompleted">
                <button
                  className="ProjectButton"
                  type="submit"
                  onClick={logsee}
                >
                  送出訂單
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartOrderCheck;
