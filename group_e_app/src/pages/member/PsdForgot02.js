import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState, useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../member/components/AuthContext';
import cat from './images/logincat.svg';
import catHide from './images/logincat_blind.svg';
import eye from './images/Eye.svg';
import eyeSlash from './images/EyeSlash.svg';
import gsap from 'gsap';

function PsdForgot02(props) {
  const [isCatHide, setIsCatHide] = useState(false);
  const [isHide, setIsHide] = useState(true);

  const psdforgot01 = useRef(null);

  const { userEmail, setBbb, setUuu } = props;

  const [error, setError] = useState({
    valid_error: '',
  });

  const checkIfHide = (e) => {
    // console.log('hi', e.target.tagName);
    if (e.target.tagName === 'INPUT' && e.type === 'focus') {
      setIsCatHide(isHide);
    } else if (e.target.tagName === 'INPUT' && e.type === 'blur') {
      setIsCatHide(false);
    } else if (e.target.tagName === 'DIV') {
      setIsCatHide(false);
    } else if (e.target.tagName === 'IMG') {
      const nowHide = !isHide;
      setIsCatHide(nowHide);
      setIsHide(nowHide);
    }
  };

  //設定登入資料
  const [myform, setMyform] = useState({
    valid: '',
  });

  const changeFields = (event) => {
    const id = event.target.id;
    const val = event.target.value;
    setMyform({ ...myform, [id]: val, email: userEmail });
    setError({ ...error, valid_error: '' });
  };

  const whenSubmit = (event) => {
    event.preventDefault();

    console.log(myform);
    if (myform.valid === '') {
      return;
    }
    fetch('http://localhost:3600/member/checkvalid', {
      method: 'POST',
      body: JSON.stringify(myform),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((result) => {
        console.log('result', result.success);
        if (result.success === true) {
          // 正確
          setBbb(true);
        } else {
          setError({ ...error, valid_error: '驗證碼輸入錯誤' });
        }
      });
  };

  useEffect(() => {
    gsap.from(psdforgot01.current, {
      duration: 2,
      x: -100,
      opacity: 0,
    });
  }, []);
  return (
    <>
      <div className="container yu_container" onClick={checkIfHide}>
        <form
          action=""
          onSubmit={whenSubmit}
          className="psdcard-margin"
          id="myDIV02"
          ref={psdforgot01}
        >
          <div className="yu_logincard d-flex">
            <div className="yu_inputblock">
              <label htmlFor="">電子信箱</label>
              <input id="email" name="email" type="email" value={userEmail} />
            </div>
            <div className="yu_inputblock">
              <label htmlFor="">請輸入驗證碼</label>
              <input
                id="valid"
                name="valid"
                type="text"
                value={myform.valid}
                onChange={changeFields}
              />
              <span className="psdchange_error">{error.valid_error}</span>
            </div>

            <div className="yu-psdforgot-btn-div">
              <button type="submit" className="ProjectButton yu-psdforgot-btn">
                送出
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default PsdForgot02;
