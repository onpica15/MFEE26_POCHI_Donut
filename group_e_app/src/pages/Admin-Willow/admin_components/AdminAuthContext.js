import React from 'react';

const AdminAuthContext = React.createContext({
  //admin_authorized 登入狀態
  admin_authorized: false,
  admin_sid: 0,
  admin_name: '',
  admin_account: '',
  admin_token: '',
});

export default AdminAuthContext;
