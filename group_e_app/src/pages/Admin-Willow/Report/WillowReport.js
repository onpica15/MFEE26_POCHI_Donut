import React, { useState } from 'react';
import Grap from './Grap';
import GrapTime from './Graptime';

function WillowReport() {
  const [reportOption, setReportOption] = useState(1);
  const roption = (e) => {
    let numv = parseInt(e.target.value);

    setReportOption(numv);
  };
  return (
    <div id="willowhavegoodprice">
      <h1>Report報表</h1>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <button
              type="button"
              className="btn willow_button"
              value={1}
              onClick={(e) => {
                roption(e);
                console.log();
              }}
            >
              依時間
            </button>
          </div>
          <div className="col-12 col-md-6">
            <button
              type="button"
              className="btn willow_button"
              value={2}
              onClick={(e) => {
                roption(e);
              }}
            >
              依年齡
            </button>
          </div>
        </div>
      </div>

      <div className="container  mb-5 willow_minh">
        <div className="row">
          {console.log('reportOption', reportOption)}

          {reportOption === 0 && <></>}
          {reportOption === 1 && <GrapTime setReportOption={setReportOption} />}
          {reportOption === 2 && <Grap setReportOption={setReportOption} />}
        </div>
      </div>
    </div>
  );
}

export default WillowReport;
