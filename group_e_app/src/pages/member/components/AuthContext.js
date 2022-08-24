import React from 'react';

const authContext = React.createContext({
  //使用authorized 判定是否為登入狀態
  authorized: false,
  sid: 0,
  account: '',
  token: '',
  level: 0,
});

export default authContext;
