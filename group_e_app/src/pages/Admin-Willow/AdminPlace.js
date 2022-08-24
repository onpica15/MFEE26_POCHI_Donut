import React from 'react';
import { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';

import WillowShowList from './NewsAll/WillowShowList';
import WillowNews from './NewsAll/WillowNews';
import WillowHavegoodPrice from './NewsAll/WillowHavegoodPrice';
import WillowGoodWritings from './NewsAll/WillowGoodWritings';
import WillowNewsupdate from './NewsAll/WillowNewsupdate';
import WillowHavegoodPriceupdate from './NewsAll/WillowHavegoodPriceupdate';
import WillowGoodWritingupdate from './NewsAll/WillowGoodWritingupdate';

import WillowReport from './Report/WillowReport';

import './scssstyle/AdminPlace.scss';

function AdminPlace() {
  const [opennews, setOpennews] = useState(false);
  const [openreports, setOpenreports] = useState(false);
  const [option, setOption] = useState(0);
  const [choosesid, setChoosesid] = useState(0);

  const clickoption = (v) => {
    //console.log(v);
    let numv = parseInt(v);
    setOption(numv);
  };
  return (
    <div id="willow_adminplace">
      <div className="container">
        <div className="row">
          <h1 className="text-center">後台管理者頁面</h1>
        </div>
      </div>
      <div className="container-fuild mt-5 mb-5  willow_littlenavbar_hight">
        <div className="row w-75 m-auto">
          <div className="col-8">
            <h3 className="ml-4">Spuer Visor 您好</h3>
          </div>
          <div className="col-sm-6 col-md-2 willow_palce_rel">
            <div>
              <Button
                onClick={() => setOpennews(!opennews)}
                aria-controls="example-collapse-text"
                aria-expanded={opennews}
                className="mb-3 willow_button willow_btn-primary"
              >
                最新消息管理
              </Button>
            </div>

            <div>
              <Collapse in={opennews} className="willow_palce_abs">
                <div id="example-collapse-text">
                  <div>
                    <button
                      className="willow_list_button"
                      value={1}
                      onClick={(e) => {
                        clickoption(e.target.value);
                        //console.log('1', e.target.value);
                      }}
                    >
                      News
                    </button>
                  </div>
                  <div>
                    <button
                      className="willow_list_button"
                      value={2}
                      onClick={(e) => {
                        clickoption(e.target.value);
                        //console.log(e.target.value);
                      }}
                    >
                      Activty
                    </button>
                  </div>
                  <div>
                    <button
                      className="willow_list_button"
                      value={3}
                      onClick={(e) => {
                        clickoption(e.target.value);
                        //console.log(e.target.value);
                      }}
                    >
                      Good Writing
                    </button>
                  </div>
                </div>
              </Collapse>
            </div>
          </div>
          <div className="col-sm-6 col-md-2 willow_palce_rel">
            <Button
              onClick={() => setOpenreports(!openreports)}
              aria-controls="example-collapse-text"
              aria-expanded={openreports}
              className="mb-3 willow_button willow_btn-primary"
            >
              商品報表管理
            </Button>

            <Collapse in={openreports} className="willow_palce_abs">
              <div id="example-collapse-text">
                <div>
                  <button
                    className="willow_list_button"
                    value={4}
                    onClick={(e) => {
                      clickoption(e.target.value);
                      // console.log(e.target.value);
                    }}
                  >
                    Report
                  </button>
                </div>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
      <div className="container-fuild willow_minhight">
        <div className="row">
          {console.log(option, choosesid)}
          {option === 0 && (
            <WillowShowList setOption={setOption} setChoosesid={setChoosesid} />
          )}
          {option === 1 && (
            <WillowNews setOption={setOption} setChoosesid={setChoosesid} />
          )}
          {option === 2 && (
            <WillowHavegoodPrice
              setOption={setOption}
              setChoosesid={setChoosesid}
            />
          )}
          {option === 3 && (
            <WillowGoodWritings
              setOption={setOption}
              setChoosesid={setChoosesid}
            />
          )}
          {option === 4 && (
            <WillowReport setOption={setOption} setChoosesid={setChoosesid} />
          )}

          {option === 11 && (
            <WillowNewsupdate setOption={setOption} choosesid={choosesid} />
          )}
          {option === 12 && (
            <WillowHavegoodPriceupdate
              setOption={setOption}
              choosesid={choosesid}
            />
          )}
          {option === 13 && (
            <WillowGoodWritingupdate
              setOption={setOption}
              choosesid={choosesid}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminPlace;
