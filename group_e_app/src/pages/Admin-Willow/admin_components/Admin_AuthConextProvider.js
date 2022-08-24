import React, { useState } from 'react';
import AdminAuthContext from './AdminAuthContext';
import { useNavigate } from 'react-router-dom';
// const AdminAuthContext = React.createContext({
//   //admin_authorized 登入狀態
//   admin_authorized: false,
//   admin_sid: 0,
//   admin_name: '',
//   admin_account: '',
//   admin_token: '',
// });

function Admin_AuthConextProvider({ children }) {
  //先看localstorge的資料是否有登入
  //拿取localstorage資料
  const admin_localAuthStr = localStorage.getItem('admin_auth');
  console.log('admin_localAuthStr', admin_localAuthStr);
  console.log('admin_localAuthStr', typeof admin_localAuthStr);
  //-------------------------------------------------------------
  const admin_unAuthState = {
    admin_authorized: false,
    admin_sid: 0,
    admin_account: '',
    admin_token: '',
  };

  // 初始化admin_localAuth
  let admin_localAuth = { ...admin_unAuthState };
  //admin_localAuthStr 有拿到資料才開始
  if (admin_localAuthStr) {
    try {
      // admin_localAuthStr 拿localstorge的資料
      admin_localAuth = JSON.parse(admin_localAuthStr);
      if (admin_localAuth.admin_account && admin_localAuth.admin_token) {
        //展開admin_localAuth 將admin_authorized塞進
        admin_localAuth = { ...admin_localAuth, admin_authorized: true };
        console.log('admin_authi', admin_localAuth);
      }
      console.log('admin_autho', admin_localAuth);
    } catch (ex) {}
  } else {
    console.log('admin_auth1', admin_localAuth);
  }
  const [admin_auth, setAdmin_Auth] = useState(admin_localAuth);

  //去下一頁
  const navigate = useNavigate();

  const admin_logout = () => {
    localStorage.removeItem('admin_auth');
    setAdmin_Auth({ ...admin_unAuthState });
    navigate('/adminlogin');
  };

  return (
    // { ...admin_auth, setAdmin_Auth, admin_logout, admin_auth }
    <AdminAuthContext.Provider
      value={{ ...admin_auth, setAdmin_Auth, admin_logout }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}
export default Admin_AuthConextProvider;
