import React from 'react';

const Footer = () => {
  return (
    <footer className="d-none d-md-block">
      <div className="d-flex align-items-center justify-content-around h300">
        <div className="text-center">
          <div className="w-100">
            <img className="w-75" src="./images/footer_logo.svg" alt="" />
          </div>
          {/* 社群網站LOGO */}
          <div>
            <ul className="d-flex icon p-0 mt-4">
              <li className="mx-2 d-flex align-items-center justify-content-center">
                <i className="fa-brands fa-facebook-f"></i>
              </li>
              <li className="mx-2 d-flex align-items-center justify-content-center">
                <i className="fa-brands fa-instagram-square"></i>
              </li>
              <li className="mx-2 d-flex align-items-center justify-content-center">
                <i className="fa-brands fa-twitter"></i>
              </li>
            </ul>
          </div>
        </div>
        {/* footer選單 */}
        <ul className="d-flex">
          <li className="mx-5">
            <div className="">
              <i className="fa-solid fa-paw"></i>關於我們
            </div>
            <ul className="ps-0">
              <li>最新消息</li>
              <li>品牌理念</li>
              <li>熱銷商品</li>
              <li>產品評價</li>
              <li>店鋪資訊</li>
            </ul>
          </li>
          <li className="mx-5">
            <div className="">
              <i className="fa-solid fa-paw"></i>活動資訊
            </div>
            <ul className="ps-0">
              <li>產品訊息</li>
              <li>活動訊息</li>
              <li>最新優惠</li>
            </ul>
          </li>
          <li className="mx-5">
            <div className="">
              <i className="fa-solid fa-paw"></i>商品一覽
            </div>
            <ul className="p-0">
              <li>甜甜圈</li>
              <li>飲料</li>
              <li>點心</li>
              <li>客製化</li>
            </ul>
          </li>
          <li className="mx-5">
            <div className="">
              <i className="fa-solid fa-paw"></i>會員專區
            </div>
            <ul className="p-0">
              <li>會員登入</li>
              <li>帳戶管理</li>
              <li>訂單資訊</li>
            </ul>
          </li>
        </ul>
        <div>
          <p>今日訪客 9,527 人</p>
        </div>
      </div>
      <p className="text-center footerp">All Rights Reserved© MeowMeowDonut</p>
    </footer>
  );
};

export default Footer;
