import React from 'react';
import '../../components/Member/Eye.js';
import { useState, useEffect, useRef } from 'react';
import cat from './images/logincat.svg';
import catHide from './images/logincat_blind.svg';
import eye from './images/Eye.svg';
import eyeSlash from './images/EyeSlash.svg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { confirm } from '../../components/Confirm';

function MemberRegister() {
  const [isCatHide, setIsCatHide] = useState(false);
  const [isHide, setIsHide] = useState(true);
  //給飄入效果使用
  const register01 = useRef(null);
  const register02 = useRef(null);
  const register03 = useRef(null);
  const register04 = useRef(null);
  const register05 = useRef(null);
  const registerbtn = useRef(null);
  const registerturntologin = useRef(null);

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

  const [regForm, setRegForm] = useState({
    account: '',
    pass_hash: '',
    password_check: '',
    birthday: '',
    email: '',
  });

  const [regFormError, setRegFormError] = useState({
    account: '',
    pass_hash: '',
    password_check: '',
    birthday: '',
    email: '',
  });

  const changeFields = (event) => {
    const id = event.target.id;
    const val = event.target.value;
    console.log({ id, val });
    setRegForm({ ...regForm, [id]: val });
  };
  const navigate = useNavigate();
  const whenSubmit = (event) => {
    //預設行為:送給自己
    event.preventDefault();

    console.log(regForm);

    if (regForm.pass_hash !== regForm.password_check) {
      setRegFormError({
        ...regFormError,
        pass_hash: '密碼需與密碼確認欄位相同',
        password_check: '密碼需與密碼確認欄位相同',
      });

      return;
    }

    fetch('http://localhost:3600/member/add', {
      method: 'POST',
      body: JSON.stringify(regForm),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((result) => {
        // console.log(result);
        // confirm('註冊成功!請嘗試登入。');
        navigate('/Login');
      });
  };

  // 表單用，有不合法的驗証出現時會觸發
  const handleInvalid = (e) => {
    // 先阻擋預設行為-泡泡訊息
    e.preventDefault();

    // 錯誤訊息
    // console.log(e.target.validationMessage);

    // 填入錯誤訊息
    setRegFormError({
      ...regFormError,
      [e.target.name]: e.target.validationMessage,
    });
  };

  //給表單用,使用者回來修正錯誤,使用onchange錯誤訊息更新
  const errorCheck = (e) => {
    setRegFormError({
      ...regFormError,
      [e.target.name]: '',
    });
  };

  useEffect(() => {
    gsap.from(register01.current, {
      duration: 1,
      x: -100,
    });
    gsap.from(register02.current, {
      duration: 1,
      delay: 1,
      x: -100,
      opacity: 0,
    });
    gsap.from(register03.current, {
      duration: 1,
      delay: 2,
      x: -100,
      opacity: 0,
    });
    gsap.from(register04.current, {
      duration: 1,
      delay: 3,
      x: -100,
      opacity: 0,
    });
    gsap.from(register05.current, {
      duration: 1,
      delay: 4,
      x: -100,
      opacity: 0,
    });
    gsap.from(registerbtn.current, {
      duration: 1,
      delay: 5,
      x: -100,
      opacity: 0,
    });
    gsap.from(registerturntologin.current, {
      duration: 1,
      delay: 5,
      x: -100,
      opacity: 0,
    });
  }, []);

  return (
    <>
      <div className="container yu_container">
        <header className="yu_header">
          <p>會員註冊</p>
        </header>
        <div className="row">
          <div className="col">
            <div className="yu_regCat d-flex justify-content-center">
              <img src={isCatHide ? catHide : cat} alt="" />
            </div>

            <div className="yu_regcard">
              <form
                name="register"
                className="yu_reg_form "
                onSubmit={whenSubmit}
                onInvalid={handleInvalid}
                onChange={errorCheck}
              >
                <div className="reg_form">
                  <div className="inputblock" ref={register01}>
                    <label htmlFor="" required>
                      *帳號
                    </label>
                    <div className="yu_eye_rela">
                      <input
                        id="account"
                        type="text"
                        name="account"
                        value={regForm.account}
                        onChange={changeFields}
                        required
                      />
                    </div>

                    <p className="reg_error">{regFormError.account}</p>
                  </div>
                  <div className="inputblock" ref={register02}>
                    <label htmlFor="" required>
                      *密碼
                    </label>
                    <input
                      id="pass_hash"
                      type={isHide ? 'password' : 'text'}
                      name="pass_hash"
                      onFocus={checkIfHide}
                      onBlur={checkIfHide}
                      value={regForm.pass_hash}
                      onChange={changeFields}
                      minLength={6}
                      required
                    />
                    <p className="reg_error">{regFormError.pass_hash}</p>
                    <div className="reg_absolute" onClick={checkIfHide}>
                      <img
                        className="reg_eye"
                        src={isHide ? eyeSlash : eye}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="inputblock " ref={register03}>
                    <label htmlFor="" required>
                      *密碼確認
                    </label>
                    <input
                      id="password_check"
                      type={isHide ? 'password' : 'text'}
                      name="password_check"
                      onFocus={checkIfHide}
                      onBlur={checkIfHide}
                      value={regForm.password_check}
                      onChange={changeFields}
                      required
                    />
                    <p className="reg_error">{regFormError.password_check}</p>
                    <div className="reg_absolute" onClick={checkIfHide}>
                      <img
                        className="reg_eye"
                        src={isHide ? eyeSlash : eye}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="inputblock" ref={register04}>
                    <label htmlFor="">生日</label>
                    <input
                      id="birthday"
                      type="date"
                      name="birthday"
                      value={regForm.birthday}
                      onChange={changeFields}
                    />
                  </div>
                  <div className="inputblock" ref={register05}>
                    <label htmlFor="" required>
                      *電子信箱
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={regForm.email}
                      onChange={changeFields}
                      required
                    />
                    <p className="reg_error"> {regFormError.email}</p>
                  </div>
                  <div ref={registerbtn}>
                    <button type="submit" className="ProjectButton">
                      註冊
                    </button>
                  </div>

                  <button
                    className="ProjectButton"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log('fill');
                      setRegForm({
                        ...regForm,
                        account: 'yuchen',
                        pass_hash: 'yuchen123',
                        password_check: 'yuchen123',
                        birthday: '2012-12-12',
                        email: 'yuchen@mail.com',
                      });
                    }}
                  >
                    自動
                  </button>
                </div>
              </form>

              <p ref={registerturntologin}>
                已擁有帳號
                <Link className="nav-link yu_reg_link_p" to="/Login">
                  點此登入
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberRegister;
