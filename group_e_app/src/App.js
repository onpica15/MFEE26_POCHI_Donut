import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
// import BackgroundWaveAnimation from './components/BackgroundWaveAnimation/BackgroundWaveAnimation';
import './App.css';

//LOVEYU
import Cart from './pages/Cart/Cart';
import CartOrderInfo from './pages/CartOrderInfo/CartOrderInfo';
import CartOrderCompleted from './pages/CartOrderCompleted/CartOrderCompleted';
import CartOrderCheck from './pages/CartOrderCheck/CartOrderCheck';

//Yuchen
import Membercenter from './pages/member/Membercenter';
import Login from './pages/member/Login';
import MemberRegister from './pages/member/MemberRegister';
import MemberHistory from './pages/member/MemberHistory';
import MemberPsdchange from './pages/member/MemberPsdchange';
import Cat from './pages/member/Cat';
import PsdForgot from './pages/member/PsdForgot';
import PsdForgot02 from './pages/member/PsdForgot02';

// Mars
import ProductWrap from './pages/Product/ProductWrap';
import Product from './pages/Product/Product';
import Content from './pages/Product/Content';

// Willow

import WillowAdminLogin from './pages/Admin-Willow/AdminLogin';
import WillowAdminPlace from './pages/Admin-Willow/AdminPlace';

import WillowNews from './pages/Admin-Willow/NewsAll/WillowNews';
import WillowHavegoodPrice from './pages/Admin-Willow/NewsAll/WillowHavegoodPrice';
import WillowGoodWritings from './pages/Admin-Willow/NewsAll/WillowGoodWritings';

import WillowReport from './pages/Admin-Willow/Report/WillowReport';
import Grap from './pages/Admin-Willow/Report/Grap';
import Graptime from './pages/Admin-Willow/Report/Graptime';

// 首頁 客製化
import AbingIndex from './pages/About/AbingIndex';
import BingCustomized from './pages/About/BingCustomized';

//context
import AuthContextProvider from '../src/pages/member/components/AuthConextProvider';

// willow context
import AdminAuthConextProvider from '../src/pages/Admin-Willow/admin_components/Admin_AuthConextProvider';

// react router 錄影檔 7/19 14:33
function App() {
  // 設定會員登入狀態 錄影檔 7/19 14:55
  // const [auth, setAuth] = useState(false);

  //------- 設定購物車 -----------------------
  const [carts, setCarts] = useState([]);
  const [personalDataFinal, setPersonalDataFinal] = useState([]);
  //------- 設定購物車 -----------------------

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <AdminAuthConextProvider>
          <Navbar carts={carts} setCarts={setCarts} />

          {/* 路由表 */}
          <Routes>
            {/* bing的頁面 */}
            <Route path="/" element={<AbingIndex />} />
            <Route
              path="/abingindex/customized"
              element={<BingCustomized carts={carts} setCarts={setCarts} />}
            />

            {/* Yu的頁面 */}
            <Route path="Login" element={<Login />} />
            <Route path="Membercenter" element={<Membercenter />} />
            <Route path="MemberRegister" element={<MemberRegister />} />
            <Route path="MemberHistory" element={<MemberHistory />} />
            <Route path="MemberPsdchange" element={<MemberPsdchange />} />
            <Route path="Cat" element={<Cat />} />
            <Route path="PsdForgot" element={<PsdForgot />} />
            <Route path="PsdForgot02" element={<PsdForgot02 />} />

            {/* LoveYu的頁面 */}
            <Route
              path="Cart"
              element={<Cart setCarts={setCarts} carts={carts} />}
            />
            <Route
              path="/Cart/CartOrderInfo"
              element={
                <CartOrderInfo
                  carts={carts}
                  setCarts={setCarts}
                  personalDataFinal={personalDataFinal}
                  setPersonalDataFinal={setPersonalDataFinal}
                />
              }
            />
            <Route
              path="/Cart/CartOrderCheck"
              element={
                <CartOrderCheck
                  setCarts={setCarts}
                  carts={carts}
                  personalDataFinal={personalDataFinal}
                  setPersonalDataFinal={setPersonalDataFinal}
                />
              }
            />
            <Route
              path="/Cart/CartOrderCompleted"
              element={<CartOrderCompleted setCarts={setCarts} carts={carts} />}
            />

            {/* 莊惟的頁面 */}
            <Route path="Product" element={<ProductWrap />}>
              <Route
                index
                element={<Product setCarts={setCarts} carts={carts} />}
              />
              <Route
                path=":productId"
                element={<Content setCarts={setCarts} carts={carts} />}
              />
            </Route>

            {/* willow的頁面 */}

            <Route path="adminlogin" element={<WillowAdminLogin />} />

            <Route path="adminplace" element={<WillowAdminPlace />} />
            <Route path="willownews" element={<WillowNews />} />
            <Route
              path="willowhavegoodprice"
              element={<WillowHavegoodPrice />}
            />
            <Route path="willowgoodwritings" element={<WillowGoodWritings />} />
            <Route path="willowreport" element={<WillowReport />} />
            <Route path="grap" element={<Grap />} />
            <Route path="graptime" element={<Graptime />} />
          </Routes>

          <Footer />
        </AdminAuthConextProvider>
      </AuthContextProvider>
      {/* <BackgroundWaveAnimation /> */}
    </BrowserRouter>
  );
}

export default App;
