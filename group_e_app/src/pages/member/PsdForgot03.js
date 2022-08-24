import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState, useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../member/components/AuthContext';
import cat from './images/logincat.svg';
import catHide from './images/logincat_blind.svg';
import eye from './images/Eye.svg';
import eyeSlash from './images/EyeSlash.svg';
import { confirm } from '../../components/Confirm';
import gsap from 'gsap';

function PsdForgot03(props) {
  const [isCatHide, setIsCatHide] = useState(false);
  const [isHide, setIsHide] = useState(true);

  const { userEmail } = props;

  const [error, setError] = useState({
    psdOld_error: '',
    psdNew_error: '',
  });

  const psdforgot01 = useRef(null);

  const checkIfHide = (e) => {
    console.log('hi', e.target.tagName);
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
    psdNew: '',
    psdNewCheck: '',
  });

  const changeFields = (event) => {
    const id = event.target.id;
    const val = event.target.value;
    // console.log({ id, val });
    setMyform({ ...myform, [id]: val, email: userEmail });
    // console.log('myform', myform);
    setError({ ...error, psdNew_error: '' });
  };

  const whenSubmit = (event) => {
    event.preventDefault();

    console.log(myform);
    if (myform.valid === '') {
      return;
    }

    if (myform.psdNew !== myform.psdNewCheck) {
      setError({ ...error, psdNew_error: '新密碼需相同' });
      return;
    }
    fetch('http://localhost:3600/member/checkvalidtochangepsd', {
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
          confirm('修改成功');
        } else {
          confirm('修改失敗');
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
      <div className="container">
        {/* <div className="logincat d-flex justify-content-center yu_padchange_margintop ">
          <img src={isCatHide ? catHide : cat} alt="" />
        </div> */}
        <form ref={psdforgot01} action="" onSubmit={whenSubmit}>
          <div className="yu_logincard d-flex">
            <div className="yu_inputblock ">
              <label htmlFor="">請輸入新密碼</label>
              <input
                id="psdNew"
                type={isHide ? 'password' : 'text'}
                name="psdNew"
                onFocus={checkIfHide}
                onBlur={checkIfHide}
                onChange={changeFields}
                value={myform.psdNew}
              />
              <div className="yu_psdchange_eye_relative" onClick={checkIfHide}>
                <img
                  className="yu_logineye"
                  src={isHide ? eyeSlash : eye}
                  alt=""
                />
              </div>
              <span className="psdchange_error">{error.psdNew_error}</span>
            </div>
            <div className="yu_inputblock ">
              <label htmlFor="">請再次輸入新密碼</label>
              <input
                id="psdNewCheck"
                type={isHide ? 'password' : 'text'}
                name="psdNewCheck"
                onFocus={checkIfHide}
                onBlur={checkIfHide}
                onChange={changeFields}
                value={myform.psdNewCheck}
              />
              <div className="yu_psdchange_eye_relative" onClick={checkIfHide}>
                <img
                  className="yu_logineye"
                  src={isHide ? eyeSlash : eye}
                  alt=""
                />
              </div>
              <span className="psdchange_error">{error.psdNew_error}</span>
            </div>
            <button type="submit" className="ProjectButton">
              密碼確認更新
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default PsdForgot03;
