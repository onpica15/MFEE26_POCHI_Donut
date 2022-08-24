import { Link } from 'react-router-dom';
import H2 from '../../components/H2';

function CartOrderCompleted() {
  return (
    <>
      <H2 title={'訂購成功'} Entitle={'CartOrderCompleted'} />
      <section className="cartBox">
        <div className="container">
          <div className="love-OrderCompletedCard">
            <div className="loveyu-OrderCompletedFontBox">
              <p className="love-OrderCompletedFont">您的商品已經訂購成功</p>
              <p className="love-OrderCompletedFont">
                訂單編號為
                <Link className="text-decoration-none" to="/MemberHistory">
                  <span>MEOW00867738</span>
                </Link>
              </p>
              <p className="love-OrderCompletedFont">
                請於<span>3日內</span>到店取貨
              </p>
              <Link className="text-decoration-none" to="/">
                <button className="ProjectButton w-25">回首頁</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CartOrderCompleted;
