import React, { useState, useContext, createContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import AuthContext from '../../pages/member/components/AuthContext';

import H2 from '../../components/H2';

import PersonalInfo from './components/PersonalInfo';
import CurrentOrder from './components/CurrentOrder';
import CreditCard from './components/CreditCard';
import ProjectButton from '../../components/ProjectButton/ProjectButton';
import { Axios } from 'axios';

function CartOrderInfo(props) {
  const { setCarts, carts, personalDataFinal, setPersonalDataFinal } = props;
  // 從後端資料庫拿到會員sid
  const { sid } = useContext(AuthContext);

  const [personalData, setPersonalData] = useState({
    memSid: sid,
    shipName: '',
    shipPhone: '',
    shipEmail: '',
    country: 0,
    township: 0,
    addressDetail: '',
    creditCardNum: '',
    creditCardDate: '',
    creditCardName: '',
    creditSecurityCode: '',
  });

  const handleFieldChange = (e) => {
    const newPersonalData = {
      ...personalData,
      [e.target.name]: e.target.value,
    };
    setPersonalData(newPersonalData);

    console.log(newPersonalData);
  };
  setPersonalDataFinal(personalData);
  console.log('carts', carts);

  // 建立表提交事件

  const navigate = useNavigate(); // 頁面轉跳

  const handleSubmit = (event) => {
    // alert('提交成功');
    // navigate('/CartOrderCheck');
    event.preventDefault();
  };
  // 點擊送出就把資料送到後端
  // const postOrderInfo = async () => {
  //   const response = await axios.post(
  // http://localhost:3600/CartDatabase
  //   );
  //   const resdata = response.data; // 這邊應該是用requist?
  //   setCustomData(resdata);  // 因為是送出資料，要不要set再研究看看
  // };

  // useEffect(() => {
  //   getCustomData();
  // }, []);

  return (
    <div className="container">
      <H2 title="訂單資訊" Entitle="ORDER INFO" />
      <div className="love-orderContainer">
        <form action="" onSubmit={handleSubmit}>
          <CurrentOrder setCarts={setCarts} carts={carts} />
          <PersonalInfo
            personalData={personalData}
            setPersonalData={setPersonalData}
            handleFieldChange={handleFieldChange}
            personalDataFinal={personalDataFinal}
            setPersonalDataFinal={setPersonalDataFinal}
            sid={sid}
          />
          <CreditCard
            personalData={personalData}
            setPersonalData={setPersonalData}
            handleFieldChange={handleFieldChange}
          />
          {/* 送出按鈕 */}
          <div className="d-flex justify-content-center">
            <div className="d-flex mb-5 justify-content-between w-50">
              <div className="">
                <Link to="/Cart">
                  <button className=" ProjectButton">回上一頁</button>
                </Link>
              </div>
              <div>
                <Link to="/Cart/CartOrderCheck">
                  <button className="ProjectButton" type="submit">
                    下一步
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CartOrderInfo;
