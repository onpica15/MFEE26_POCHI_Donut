import * as React from 'react';
// import './Login.css';
import '../../components/Member/Eye.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../member/components/AuthContext';
import cat from './images/logincat.svg';
import catHide from './images/logincat_blind.svg';
import eye from './images/Eye.svg';
import eyeSlash from './images/EyeSlash.svg';
import { confirm } from '../../components/Confirm';
import { faSleigh } from '@fortawesome/free-solid-svg-icons';
import Mail from './Mail';
import gsap from 'gsap';
import { useEffect } from 'react';

function Login() {
  //設定密碼眼睛&貓貓
  // const [eye, setEye] = useState('password');

  const [isCatHide, setIsCatHide] = useState(false);
  const [isHide, setIsHide] = useState(true);
  const [loginTrue, setLoginTrue] = useState(false);

  const yu_header = useRef(null);
  const yu_loginwhitecard = useRef(null);

  useEffect(() => {
    gsap.from(yu_header.current, {
      duration: 2,
      y: -100,
    });
    gsap.from(yu_loginwhitecard.current, {
      duration: 2,
      y: -100,
      opacity: 0,
    });
  }, []);

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
    account: '',
    password: '',
  });

  const changeFields = (event) => {
    const id = event.target.id;
    const val = event.target.value;
    console.log({ id, val });
    setMyform({ ...myform, [id]: val });
  };

  //轉頁
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const whenSubmit = (event) => {
    event.preventDefault();

    // console.log(myform);
    // TODO: 欄位檢查-----------------------------------------------------------------
    if (myform.account === '' || myform.password === '') {
      return;
    }
    fetch('http://localhost:3600/login-jwt', {
      method: 'POST',
      body: JSON.stringify(myform),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((result) => {
        console.log('result', result);
        if (result.success) {
          //登入成功 寫進localstorage & 跳轉到首頁
          //登入成功需刷新才能更改navbar -->使用authorized判定-->result 把authcontext的authorized放進去
          //登入成功會發回來 該會員 token account 及會員等級
          localStorage.setItem('auth', JSON.stringify(result.data));
          console.log('result.data', result.data);
          setAuth({
            ...result.data,
            authorized: true,
          });
          confirm('登入成功!');
        } else {
          confirm('帳號或密碼錯誤!');
        }
      });
  };

  return (
    <>
      <div className="container yu_container" onClick={checkIfHide}>
        <header className="yu_header">
          <p ref={yu_header}>會員登入</p>
        </header>
        <div ref={yu_loginwhitecard} className="row">
          <div className="col">
            <div className="logincat d-flex justify-content-center">
              <img src={isCatHide ? catHide : cat} alt="" />
              {/* <img src="../../../images/logincat_blind.svg" alt="" /> */}
            </div>
            <form action="" onSubmit={whenSubmit}>
              <div className="yu_logincard d-flex">
                <div className="yu_inputblock">
                  <label htmlFor="">帳號</label>
                  <input
                    id="account"
                    name="account"
                    type="text"
                    value={myform.account}
                    onChange={changeFields}
                  />
                </div>
                <div className="yu_inputblock ">
                  <label htmlFor="">密碼</label>
                  <input
                    id="password"
                    type={isHide ? 'password' : 'text'}
                    name="passwrod"
                    onChange={changeFields}
                    onFocus={checkIfHide}
                    onBlur={checkIfHide}
                    value={myform.password}
                  />
                  <div className="yu_logineye_absolute" onClick={checkIfHide}>
                    <img
                      className="yu_logineye"
                      src={isHide ? eyeSlash : eye}
                      alt=""
                    />
                  </div>
                  <p>
                    <Link to="/PsdForgot">忘記密碼</Link>
                  </p>
                </div>
                <button type="submit" className="ProjectButton">
                  登入
                </button>
                <p>
                  第一次光臨嗎?
                  <Link to="/MemberRegister">點此註冊</Link>
                </p>
                <p>
                  <Link className="nav-link" to="/adminlogin">
                    admin
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
