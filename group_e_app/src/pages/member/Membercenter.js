import React, { useState, useContext, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AuthContext from '../../pages/member/components/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import cat from './images/footer_logo.svg';
import stone1 from './images/stone01.svg';
import stone2 from './images/stone02.svg';
import stone3 from './images/stone03.svg';
import stone4 from './images/stone04.svg';
import { confirm } from '../../components/Confirm';

function Membercenter() {
  const { authorized, token, level, setAuth, auth } = useContext(AuthContext);
  const navigate = useNavigate();
  //如未登入轉出至首頁
  if (authorized === false) {
    navigate('/');
  }

  // 第一次記錄伺服器的原始資料用
  const [usersRaw, setUsersRaw] = useState({});
  // 呈現資料用
  const [usersDisplay, setUsersDisplay] = useState({
    account: '',
    pass_hash: '',
    password_check: '',
    birthday: '',
    email: '',
    mobile: '',
    address: '',
    avatar: '',
    level: '',
  });
  //avatar state
  const [didavatar, setDidAvatar] = useState('');

  //是否正在修改
  const [isOnchange, setIsOnchange] = useState(false);
  //抓用戶輸入會員資料的值
  const [regForm, setRegForm] = useState({
    birthday: usersRaw.birthday,
    email: usersRaw.email,
    mobiel: usersRaw.mobiel,
    address: usersRaw.address,
    account: usersRaw.account,
  });

  const [regFormError, setRegFormError] = useState({
    birthday: '',
    email: '',
    mobile: '',
    address: '',
  });

  //大頭貼模擬點擊
  const avatarpic = useRef('');

  //一進入會員中心頁面拿取資料庫資料&設入state
  const getdata = async () => {
    const response = await axios.get(
      'http://localhost:3600/member/memberdata',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const r = response.data;
    const res_data = r;
    console.log('res_data', res_data);
    setUsersRaw(res_data);
    // 生日格式處理
    const date = r.birthday;
    const slicedate = date.slice(0, 10);
    const bitrDisplay = { ...res_data, birthday: slicedate };
    if (res_data.avatar) {
      setUsersDisplay(bitrDisplay);
      setDidAvatar(true);
      setAuth({
        ...auth,
        level: bitrDisplay.level,
      });
    } else {
      setUsersDisplay(bitrDisplay);
    }
  };

  useEffect(() => {
    getdata();
  }, []);
  //監聽level
  useEffect(() => {
    setAuth({
      ...auth,
      level: usersDisplay.level,
    });
  }, [level]);

  const mobile_errmessage = useRef('');
  const avatarchange = () => {
    const fd = new FormData(document.avatar_form);
    fetch('http://localhost:3600/member/yuupload', {
      method: 'POST',
      body: fd,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((r) => r.json())
      .then((data) => {
        getdata();
        //修改成功寫入呈現的state
        // setUsersDisplay({ ...usersDisplay, avatar: data.filename });
        // console.log('levelnow', usersDisplay);
        //判斷大頭貼修改成功
        setDidAvatar(true);

        console.log('auth頭貼', level);
      });
  };
  //錯誤訊息
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
  ///抓取用戶正在輸入資料的值
  const changeFields = (event) => {
    const id = event.target.id;
    const val = event.target.value;
    setIsOnchange(true);
    setRegForm({
      ...regForm,
      [id]: val,
      level: usersDisplay.level,
      account: usersDisplay.account,
    });
  };
  //修改會員資料
  const update_member_data = async (event) => {
    event.preventDefault();
    // if (confirm('確定要修改會員資料嗎?') === false) {
    //   return;
    // }
    // console.log('regForm',regForm.birthday);
    fetch('http://localhost:3600/member/memberupdate', {
      method: 'POST',
      body: JSON.stringify(regForm),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((result) => {
        confirm('修改成功')
        //修改成功設定至state
        setUsersDisplay(result);
        //設定authcontext會員等級
        setAuth({
          ...auth,
          level: result.level,
        });
        //畫面更新
        getdata();
        console.log('auth資料', level);
      });
  };

  return (
    <>
      <div className="h_full container yu_container">
        <header className="yu_header">
          <h2>會員中心</h2>
        </header>
        <nav className="yu_bar_nav">
          <div className="container yu_container">
            <ul className="yu_bar_ul">
              <li>
                <Link className="nav-link" to="/MemberHistory">
                  <i className="fa-solid fa-user"></i>會員訂單
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
        <div className="yu_profile">
          <div className="row-6 d-flex yu_center ">
            <div className="col">
              <div className="yu_avatar">
                <figure className="d-flex yu_avatar_pic">
                  <img
                    src={
                      didavatar
                        ? `http://localhost:3600/yuimgs/${usersDisplay.avatar}`
                        : cat
                    }
                    alt=""
                  />
                </figure>
                <div className="d-flex justify-content-center yu_avatar_upload">
                  <button
                    className="yu_avatar_btn"
                    onClick={() => {
                      avatarpic.current.click();
                    }}
                  >
                    上傳照片
                  </button>
                  <form name="avatar_form">
                    <input
                      type="file"
                      multiple
                      name="avatar"
                      accept="images/jpeg,images/png"
                      onChange={avatarchange}
                      style={{ display: 'none' }}
                      ref={avatarpic}
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="col-6 yu_profile_editing">
              <div className="yu_member_title">
                <p  onClick={(e) => {
                        e.preventDefault();
                        console.log('fill');
                        setRegForm({
                          ...regForm,
                          email: 'sunnymail0705@gmail.com',
                          birthday:'2019-12-01',
                          mobile:'0975264123',
                          address:'台北市復興南路一段390號2樓',

                        });
                      }}>
                  {isOnchange ? usersDisplay.account : usersDisplay.account}
                  目前會員等級
                  {isOnchange ? usersDisplay.level : usersDisplay.level}
                </p>
              </div>
              <form
                className="yu_flex"
                onInvalid={handleInvalid}
                onSubmit={update_member_data}
                onChange={errorCheck}
              >
                <div className="yu_profile_form_group form-group">
                  <label htmlFor="birthday" className="col-3">
                    生日
                  </label>
                  <input
                    type="date"
                    className="birthday col-8"
                    name="birthday"
                    id="birthday"
                    placeholder="birthday"
                    value={
                      isOnchange ? regForm.birthday : usersDisplay.birthday
                    }
                    onChange={changeFields}
                    required
                  />
                  <p className="error">{regFormError.birthday}</p>
                </div>
                <div className="yu_profile_form_group  form-group">
                  <label htmlFor="email" className="col-3">
                    電子郵件
                  </label>
                  <input
                    type="email"
                    className="email col-8"
                    name="email"
                    id="email"
                    placeholder="email"
                    value={isOnchange ? regForm.email : usersDisplay.email}
                    onChange={changeFields}
                  />
                  <p className="error">{regFormError.email}</p>
                </div>
                <div className="yu_profile_form_group  form-group">
                  <label htmlFor="mobile" className="col-3">
                    連絡電話
                  </label>
                  <input
                    type="mobile"
                    className="mobile col-8"
                    name="mobile"
                    id="mobile"
                    placeholder="mobile"
                    value={
                      isOnchange ? regForm.mobile : '0' + usersDisplay.mobile
                    }
                    onChange={changeFields}
                    minLength={10}
                    required
                  />
                  <p className="error" ref={mobile_errmessage}>
                    {regFormError.mobile}
                  </p>
                </div>
                <div className="yu_profile_form_group  form-group">
                  <label htmlFor="address" className="col-3">
                    地址
                  </label>
                  <input
                    type="address"
                    className="address col-8"
                    name="address"
                    id="address"
                    placeholder="address"
                    value={isOnchange ? regForm.address : usersDisplay.address}
                    onChange={changeFields}
                    required
                  />
                  <p className="error">{regFormError.address}</p>
                </div>
                <div className="yu_profile_form_group form-group">
                  <input
                    type="text"
                    className="birthday col-8"
                    name="level"
                    id="level"
                    value="'0'+{usersDisplay.level}"
                    style={{ display: 'none' }}
                  />
                </div>
                <div className="yu_profile_form_group form-group">
                  <input
                    type="text"
                    className="birthday col-8"
                    name="account"
                    id="account"
                    value={usersDisplay.account}
                    style={{ display: 'none' }}
                  />
                </div>
                <div className="d-flex ">
                  <button type="submit" className=" mt-5 yu_profile-btn">
                    修改會員資料
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <header className="yu_header">
          <h2>里程碑</h2>
        </header>
        <div className="yu_milestone d-flex">
          <div className="step">
            <div className="stone">
              <div className="yu_stone_figure">
                <img
                  src={
                    usersDisplay.level >= 1 ? stone1 : '../images/catpaw.svg'
                  }
                  alt=""
                />
              </div>
              <p className="yu_milestone_text">完成大頭貼上傳</p>
            </div>
          </div>
          <div className="step">
            <div className="stone">
              <div className="yu_stone_figure">
                <img
                  src={
                    usersDisplay.level >= 2 ? stone2 : '../images/catpaw.svg'
                  }
                  alt=""
                />
              </div>
              <p className="yu_milestone_text">完成個人資料</p>
            </div>
          </div>
          <div className="step">
            <div className="stone">
              <div className="yu_stone_figure">
                <img
                  src={
                    usersDisplay.level >= 3 ? stone3 : '../images/catpaw.svg'
                  }
                  alt=""
                />
              </div>
              <p className="yu_milestone_text">完成三筆訂單</p>
            </div>
          </div>
          <div className="step">
            <div className="stone">
              <div className="yu_stone_figure">
                <img
                  src={
                    usersDisplay.level >= 4 ? stone4 : '../images/catpaw.svg'
                  }
                  alt=""
                />
              </div>
              <p className="yu_milestone_text">完成十筆訂單</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Membercenter;
