import axios from 'axios';
import AuthContext from '../../pages/member/components/AuthContext';
import React, { useState, useContext, useEffect, useRef } from 'react';

function Mail() {
  const { authorized, token, account, level, logout, setAuth, auth } =
    useContext(AuthContext);
  const sendmail = async () => {
    const response = await axios.get('http://localhost:3600/member/mail', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const r = response.data;
    const res_data = r[0];
    console.log('mailtest', res_data);
  };
  return (
    <div>
      <p onClick={sendmail}>忘記密碼</p>
    </div>
  );
}

export default Mail;
