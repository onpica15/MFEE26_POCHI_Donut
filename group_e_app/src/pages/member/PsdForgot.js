import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState, useContext, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../member/components/AuthContext';
import cat from './images/logincat.svg';
import catHide from './images/logincat_blind.svg';
import eye from './images/Eye.svg';
import eyeSlash from './images/EyeSlash.svg';
import PsdForgot02 from './PsdForgot02';
import PsdForgot03 from './PsdForgot03';
import { display, style } from '@mui/system';
import { confirm } from '../../components/Confirm';
import gsap from 'gsap';

function PsdForgot(props) {
  const [isCatHide, setIsCatHide] = useState(false);
  const [isHide, setIsHide] = useState(true);

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
    email: '',
  });
  const [confirmedEmail, setConfirmedEmail] = useState('');
  const [didConfirmed, setDidConfirmed] = useState(false);

  const [uuu, setUuu] = useState(false);
  const [bbb, setBbb] = useState(false);

  const changeFields = (event) => {
    const id = event.target.id;
    const val = event.target.value;
    console.log({ id, val });
    setMyform({ ...myform, [id]: val });
  };

  const whenSubmit = (event) => {
    event.preventDefault();

    console.log(myform);
    if (myform.email === '') {
      return;
    }

    fetch('http://localhost:3600/member/checkmail', {
      method: 'POST',
      body: JSON.stringify(myform),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((result) => {
        // console.log('result', result[0].email);
        if (!result.success) {
          confirm('查無此信箱!');
        } else {
          setDidConfirmed(true);
          setConfirmedEmail(result[0].email);
          setUuu(true);
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
        <header className="yu_header">
          <p>忘記密碼</p>
        </header>
        <div className="row">
          <div className="col">
            {/* <div className="logincat d-flex justify-content-center">
              <img src={isCatHide ? catHide : cat} alt="" /> */}
            {/* <img src="../../../images/logincat_blind.svg" alt="" /> */}
            {/* </div> */}
            {uuu ? (
              bbb ? (
                <PsdForgot03 userEmail={confirmedEmail}></PsdForgot03>
              ) : (
                <PsdForgot02
                  userEmail={confirmedEmail}
                  setBbb={setBbb}
                ></PsdForgot02>
              )
            ) : (
              <form
                ref={psdforgot01}
                action=""
                onSubmit={whenSubmit}
                className="eee"
                id="myDIV"
              >
                <div className="yu_logincard d-flex">
                  <div className="yu_inputblock">
                    <label htmlFor="">請輸入信箱</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={myform.email}
                      onChange={changeFields}
                    />
                  </div>
                  <div className="yu-psdforgot-btn-div">
                    <button
                      type="submit"
                      className="ProjectButton yu-psdforgot-btn"
                    >
                      送出
                    </button>
                    <button
                      type="submit"
                      className="ProjectButton yu-psdforgot-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log('fill');
                        setMyform({
                          ...myform,
                          email: 'sunnymail0705@gmail.com',
                        });
                      }}
                    >
                      自動
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default PsdForgot;
