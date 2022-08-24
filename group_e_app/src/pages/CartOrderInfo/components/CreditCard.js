// creditCardNum: '',
// creditCardDate: '',
// creditCardName: '',
// creditSecurityCode: '',

function CreditCard(props) {
  const { personalData, setPersonalData, handleFieldChange } = props;

  return (
    <>
      <div className="container">
        <div className="love-shipInfoBox">
          <p className="loveyu-orderTitle">信用卡資訊</p>
          <button
            className="ProjectButton"
            onClick={(e) => {
              e.preventDefault();
              console.log('fill');
              setPersonalData({
                ...personalData,
                creditCardNum: '8899 3344 2244 2233',
                creditCardDate: '10/25',
                creditCardName: '游小豪',
                creditSecurityCode: '889',
              });
            }}
          >
            自動填入
          </button>
        </div>
        {console.log('personalData', personalData)}
        <section className="cartBox">
          <div className="card">
            <div className="row">
              <div className="yu_inputblock col-md-6 creditCardBlock">
                <label>卡號</label>
                <input
                  type="text"
                  name="creditCardNum"
                  value={personalData.creditCardNum}
                  onChange={handleFieldChange}
                />
                <label>到期日</label>
                <input
                  type="text"
                  name="creditCardDate"
                  value={personalData.creditCardDate}
                  onChange={handleFieldChange}
                />
                <label>持卡人姓名</label>
                <input
                  type="text"
                  name="creditCardName"
                  value={personalData.creditCardName}
                  onChange={handleFieldChange}
                />
                <label>檢核碼</label>
                <input
                  type="text"
                  name="creditSecurityCode"
                  value={personalData.creditSecurityCode}
                  onChange={handleFieldChange}
                />
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <img
                  className="w-75 "
                  src="/images/credit_card_platina_silver.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default CreditCard;
