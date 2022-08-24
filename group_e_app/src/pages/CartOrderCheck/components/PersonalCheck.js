import * as React from 'react';

function PersonalCheck(props) {
  const { personalDataFinal, setPersonalDataFinal } = props;

  // shipName: '',
  // shipPhone: '',
  // shipEmail: '',
  // country: '',
  // township: '',
  // addressDetail: '',
  // creditCardNum: '',
  // creditCardDate: '',
  // creditCardName: '',
  // creditSecurityCode: '',

  return (
    <>
      <section className="cartBox">
        <div className="container">
          <div className="card">
            <div className="row">
              <table className="table">
                <tbody>
                  <tr>
                    <th scope="row"></th>
                    <td>姓名</td>
                    <td>{personalDataFinal.shipName}</td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td>行動電話</td>
                    <td>{personalDataFinal.shipPhone}</td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td>電子信箱</td>
                    <td>{personalDataFinal.shipEmail}</td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td>通訊地址</td>
                    <td>
                      {personalDataFinal.country}
                      {personalDataFinal.township}
                      {personalDataFinal.addressDetail}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td>付款方式</td>
                    <td>信用卡</td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td>取貨方式</td>
                    <td>到店取貨</td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PersonalCheck;
