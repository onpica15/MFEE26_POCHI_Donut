import { React, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../pages/member/components/AuthContext';
import AdminAuthContext from '../../pages/Admin-Willow/admin_components/AdminAuthContext';

function Navbar(props) {
  const { authorized, account, logout } = useContext(AuthContext);
  const { carts, setCarts } = props;

  const {
    admin_authorized,
    admin_sid,
    admin_name,
    admiadmin_account,
    admin_logout,
  } = useContext(AdminAuthContext);

  const Author = (props) => {
    const authorized = props.authorized;
    // console.log('123', authorized);
    console.log('1', authorized);
    if (authorized === true) {
      //todosomthing
      console.log('2', authorized);
      return (
        <>
          <li className="nav-item">
            <Link className="nav-link" to="Membercenter">
              <i className="fa-solid fa-user"></i>會員專區{account}
            </Link>
          </li>
          <div className="nav-item">
            <li
              className="nav-link yu_pointer"
              onClick={() => {
                console.log(carts);
                setCarts([]);
                logout();
              }}
            >
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
              登出
            </li>
          </div>
        </>
      );
    } else {
      console.log('3', authorized);
      if (admin_authorized === true) {
        console.log('4', admin_authorized);
        return (
          <>
            <li className="nav-item nav-link">
              <i className="fa-solid fa-user "></i>Admin-Place-{admin_name}
            </li>
            <div className="nav-item">
              <li
                className="nav-link yu_pointer"
                onClick={() => admin_logout()}
              >
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                登出
              </li>
            </div>
          </>
        );
      } else {
        return (
          <li className="nav-item">
            <Link className="nav-link" to="Login">
              <i className="fa-solid fa-user"></i>會員登入
            </Link>
          </li>
        );
      }
    }
    // else if(authorizedadmin==="true"){

    // }else if(authorizedadmin==="false"){

    // }
  };

  return (
    <div className="navContainer">
      <nav className="navbar navbar-expand-lg navbar-light ml-3  ">
        <Link className="navbar-brand" to="/">
          <img src="./images/main-Logo.png" alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="navbar-brand" to="/">
                關於我們<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand" to="/">
                最新消息
              </Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand" to="/">
                品牌故事
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <Author
              authorized={authorized}
              admin_authorized={admin_authorized}
            />

            {/* {authorized ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="Membercenter">
                    <i className="fa-solid fa-user"></i>會員專區
                  </Link>
                </li>
                <div className="nav-item">
                <li className="nav-link yu_pointer" onClick={() => logout()} >
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                  登出
                </li>
                  <li className="nav-link yu_pointer" onClick={() => logout()}>
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    登出
                  </li>
                </div>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="Login">
                  <i className="fa-solid fa-user"></i>會員登入
                </Link>
              </li>
            )} */}

            <li className="nav-item">
              <Link className="nav-link" to="Cart">
                <i className="fa-solid fa-cart-shopping"></i>購物車
                {carts.length === 0 ? (
                  ''
                ) : (
                  <span className="cartTag">{carts ? carts.length : 0}</span>
                )}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Product">
                <i className="fa-solid fa-shop"></i>商品一覽
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
