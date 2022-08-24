import { useState } from 'react';
import { Link } from 'react-router-dom';

import MainButton from '../../../components/MainButton/MainButton';

function Summary(props) {
  const { totalNumber, totalPrice, carts, SetCarts } = props;

  return (
    <>
      <div className="col-md-4 summary">
        <div>
          <p className="loveyu-orderTitle">付款摘要</p>
        </div>
        <hr />
        <div className="row">
          <div className="col col-style"> 共 {totalNumber} 項目</div>
        </div>
        <div className="row row-style">
          <div className="col">總價</div>
          <div className="col text-right">${totalPrice}</div>
        </div>
        <div className="row ">
          <Link className="text-decoration-none col mt-3 " to="/Product">
            <button type="submit" className="ProjectButton loveyu-cartBtn">
              繼續購物
            </button>
          </Link>
          <Link
            className="text-decoration-none col mt-3"
            to="/Cart/CartOrderInfo"
          >
            {/* 判斷購物車數量是否有大於1，如果沒有，按鈕無效化 */}
            <button
              type="submit"
              className="ProjectButton loveyu-cartBtn"
              // disabled={!carts.length <= 0}
            >
              前往結賬
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Summary;
