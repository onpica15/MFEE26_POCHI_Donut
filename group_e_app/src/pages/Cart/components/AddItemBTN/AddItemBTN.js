import { useNavigate } from 'react-router-dom';
import { React, useState } from 'react';
import { Button } from 'react-bootstrap';

function AddItemBTN(props) {
  const { auth, setAuth } = props;

  const navigate = useNavigate();
  return (
    <>
      <Button
        variant="primary"
        onClick={() => {
          const newAuth = !auth;

          setAuth(newAuth);

          if (newAuth) {
            // 跳出歡迎訊息
            alert('成功加入購物車!!');

            // 導向首頁
            navigate('/', { replace: true });
          } else {
            alert('成功移除購物車');
          }
        }}
      >
        {auth ? '移除商品' : '加入購物車'}
      </Button>
    </>
  );
}

export default AddItemBTN;
