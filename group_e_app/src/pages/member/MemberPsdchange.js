import React, { useState, useContext } from 'react';
import cat from './images/logincat.svg';
import catHide from './images/logincat_blind.svg';
import eye from './images/Eye.svg';
import eyeSlash from './images/EyeSlash.svg';
import AuthContext from '../../pages/member/components/AuthContext';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {confirm} from '../../components/Confirm';

function MemberPsdchange() {
  const [isCatHide, setIsCatHide] = useState(false);
  const [isHide, setIsHide] = useState(true);

  const { authorized, token } = useContext(AuthContext);

  const [error, setError] = useState({
    psdOld_error: '',
    psdNew_error: '',
  });

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

  //設定輸入資料
  const [myform, setMyform] = useState({
    psdOld: '',
    psdNew: '',
    psdNewCheck: '',
  });

  const changeFields = (event) => {
    const id = event.target.id;
    const val = event.target.value;
    console.log({ id, val });
    setMyform({ ...myform, [id]: val });
  };

  const whenSubmit = (event) => {
    event.preventDefault();
    //欄位檢查

    if (myform.psdNew === '' || myform.psdNewCheck === '') {
      setError({ ...error, psdNew_error: '請填寫新密碼' });
      return;
    }

    if (myform.psdNew !== myform.psdNewCheck) {
      setError({ ...error, psdNew_error: '新密碼需相同' });
      return;
    }
    //密碼檢查至少六碼包含英文小寫
    const psd_reg = /^(?=.*[a-z])(?=.*\d)[a-z\d]{6,}$/;
    if (
      psd_reg.test(myform.psdNew) === false &&
      psd_reg.test(myform.psdNewCheck) === false
    ) {
      // alert('新密碼格式錯誤');
      confirm('新密碼格式錯誤');
      return;
    }

    fetch('http://localhost:3600/member/membersdupdate', {
      method: 'POST',
      body: JSON.stringify(myform),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((result) => {
        console.log('result', result);
        if (result.success) {
          // console.log(result);
          confirm('修改成功!');
        } else {
          // console.log(result);
          setError({ ...error, psdOld_error: '舊密碼輸入錯誤' });
        }
      });
  };
  return (
    <>
      <div className="container">
        <header className="yu_header">
          <h2>密碼更新</h2>
        </header>
        <div className="row">
          <div className="col ">
            <nav className="yu_bar_nav">
              <div className="container yu_container">
                <ul className="yu_bar_ul">
                  <li>
                    <Link className="nav-link" to="/Membercenter">
                      <i className="fa-solid fa-user"></i>會員專區
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/MemberHistory">
                      <i className="fa-solid fa-user"></i>會員訂單
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="logincat d-flex justify-content-center yu_padchange_margintop ">
              <img src={isCatHide ? catHide : cat} alt="" />
            </div>
            <form action="" onSubmit={whenSubmit}>
              <div className="yu_logincard d-flex">
                <div className="yu_inputblock ">
                  <label htmlFor="">請輸入舊密碼</label>
                  <input
                    id="psdOld"
                    type={isHide ? 'password' : 'text'}
                    name="psdOld"
                    onFocus={checkIfHide}
                    onBlur={checkIfHide}
                    onChange={changeFields}
                    value={myform.psdOld}
                  />
                  <div
                    className="yu_psdchange_eye_relative"
                    onClick={checkIfHide}
                  >
                    <img
                      className="yu_psdchange_eye"
                      src={isHide ? eyeSlash : eye}
                      alt=""
                    />
                  </div>
                  <span className="psdchange_error">{error.psdOld_error}</span>
                </div>
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
                  <div
                    className="yu_psdchange_eye_relative"
                    onClick={checkIfHide}
                  >
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
                  <div
                    className="yu_psdchange_eye_relative"
                    onClick={checkIfHide}
                  >
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
        </div>
      </div>
    </>
  );
}

export default MemberPsdchange;
