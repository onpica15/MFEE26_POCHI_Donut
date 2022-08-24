import React, { useState, useContext, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminAuthContext from '../Admin-Willow/admin_components/AdminAuthContext';
import './scssstyle/AdminLoginStyle.scss';
import axios from 'axios';
import gsap from 'gsap';

function AdminLogin() {
  const navigate = useNavigate();
  const { setAdmin_Auth } = useContext(AdminAuthContext);

  const upToDown = useRef(null);
  const upToDownThreeImages1 = useRef(null);
  const upToDownThreeImages2 = useRef(null);
  const upToDownThreeImages3 = useRef(null);
  const [adminlogin, setAdminLogin] = useState({
    admin_account: '',
    admin_password: '',
  });

  const changeFields = (event) => {
    const id = event.target.id;
    const val = event.target.value;
    console.log({ id, val });
    setAdminLogin({ ...adminlogin, [id]: val });
  };

  const clickSubmit = async (e) => {
    e.preventDefault();
    const data = adminlogin;
    console.log('asd', data);
    const response = await axios.post(
      'http://localhost:3600/adminlogin-jwt',
      data
    );
    const resdata = response.data;
    // const info_bar = document.querySelector('#info-bar-success');
    // info_bar.style.display = 'block';
    // console.log(resdata);
    // console.log(resdata.admin_success);
    // console.log(resdata.admin_data.admin_account);
    // console.log(resdata.admin_data.admin_name);
    if (resdata.admin_success) {
      localStorage.setItem('admin_auth', JSON.stringify(resdata.admin_data));

      setAdmin_Auth({ ...resdata.admin_data, admin_authorized: true });
      navigate('/adminplace');
    } else {
      alert('帳號密碼輸入有誤');
    }
    // setTimeout(() => {
    //   console.log('Delayed for 1 second.');
    // }, '1000');
  };

  // gsap.to(".green",  { duration: 2, x:700, ease: "bounce.out", yoyoEase: "power2.out",  repeat:10, repeatDelay:0.1});
  useEffect(() => {
    gsap.from(upToDown.current, {
      duration: 0.8,
      y: -100,
    });

    gsap.to(upToDownThreeImages1.current, {
      duration: 0.8,
      ease: 'bounce.out',
      yoyoEase: 'power2.out',
      y: 75,
    });
    gsap.to(upToDownThreeImages2.current, {
      duration: 0.8,
      ease: 'bounce.out',
      yoyoEase: 'power2.out',
      y: 65,
    });
    gsap.to(upToDownThreeImages3.current, {
      duration: 0.8,
      ease: 'bounce.out',
      yoyoEase: 'power2.out',
      y: 55,
    });
  }, []);

  return (
    <div id="willow_adminloginstyle">
      {/*  style={{ width: '100%', height: '100vh' }} */}
      <div className="container willow_minhight">
        <div className="row willow_margin justify-content-around">
          <div className="col-md-6">
            <div className="card " ref={upToDown}>
              <div className="card-body">
                <h3 className="card-title">AdminLogin</h3>
                <form name="myadminform">
                  <div className="mb-3">
                    <label className="form-label ">*帳號</label>
                    <input
                      type="text"
                      className="form-control"
                      id="admin_account"
                      name="admin_account"
                      value={adminlogin.admin_account}
                      onChange={(e) => {
                        changeFields(e);
                      }}
                      required
                    />
                    <div className="form-text red"></div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">密碼</label>
                    <input
                      type="password"
                      className="form-control"
                      id="admin_password"
                      name="admin_password"
                      value={adminlogin.admin_password}
                      onChange={(e) => {
                        changeFields(e);
                      }}
                    />
                    <div className="form-text red"></div>
                  </div>
                  <button
                    type="submit"
                    className="btn willow_button"
                    onClick={(e) => {
                      clickSubmit(e);
                    }}
                  >
                    登入
                  </button>
                </form>
                <div
                  id="info-bar"
                  className="alert alert-success"
                  role="alert"
                  style={{ display: 'none' }}
                >
                  登入成功
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="d-flex justify-content-center ">
            <div ref={upToDownThreeImages1}>
              <img
                src="./images/willowflag1.svg"
                alt=""
                className="willow_img h-75"
              />
            </div>
            <div ref={upToDownThreeImages2}>
              <img
                src="./images/willowflag4.svg"
                alt=""
                className="willow_img h-75"
              />
            </div>
            <div ref={upToDownThreeImages3}>
              <img
                src="./images/willowflag3.svg"
                alt=""
                className="willow_img h-75"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
