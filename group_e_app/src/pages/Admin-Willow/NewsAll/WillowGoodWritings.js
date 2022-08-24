import React from 'react';
import { useState, useEffect } from 'react';
import '../scssstyle/WillowHavegoodPrice.scss';
import axios from 'axios';

function WillowGoodWritings(props) {
  const { setOption, choosesid } = props;

  const [imgname, setImgname] = useState('');
  const [mainform, setMainform] = useState({
    // userid,newstitle ,words, newsimg
    userid: 0,
    goodtitle: '',
    goodwords: '',
    goodimg: '',
  });
  const fakeClickUploadimage = () => {
    const c = document.getElementById('newsimg');
    console.log(c);
    c.click();
  };

  const clickSubmit = async (e) => {
    e.preventDefault();
    // console.log('asdqwe');
    const tempdata = new FormData(document.uploadimgFrom);
    // console.log('data', data.get('newsimg'));
    const opt = tempdata.get('newsimg').name;
    if (opt) {
      const data = mainform;
      console.log(data);
      const response = await axios.post(
        'http://localhost:3600/willownews/goodwritingsadd',
        data
      );
      const resdata = response.data;
      const info_bar = document.querySelector('#info-bar-success');
      info_bar.style.display = 'block';
      console.log(resdata);
      setTimeout(() => {
        console.log('Delayed for 1 second.');
        setOption(0);
      }, '1000');
    } else {
      const info_bar = document.querySelector('#info-bar-danger');
      info_bar.style.display = 'block';
    }
  };

  const logsee = async (e) => {
    const info_bar = document.querySelector('#info-bar-danger');
    info_bar.style.display = 'none';
    const data = new FormData(document.uploadimgFrom);

    const response = await axios.post(
      'http://localhost:3600/willow-upload',
      data
    );
    const resdata = response.data;
    console.log(resdata.filename);
    setImgname(resdata.filename);

    setMainform({ ...mainform, ['goodimg']: resdata.filename });
  };
  // console.log(mainform);
  const changeFields = (event) => {
    const id = event.target.id;
    const val = event.target.value;
    console.log({ id, val });
    setMainform({ ...mainform, [id]: val });
  };

  useEffect(() => {}, [imgname]);

  return (
    <div id="willowhavegoodprice">
      <div className="container">
        <div className="row">
          <h3>WillowGoodWritings</h3>
          <div className="d-flex justify-content-end">
            <button
              type="button"
              className="btn  mt-3 willow_button"
              onClick={() => {
                setOption(0);
              }}
            >
              回首頁
            </button>
          </div>

          <form
            name="mainForm"
            onSubmit={(e) => {
              clickSubmit(e);
            }}
          >
            <div className="form-group mt-3">
              <div className="d-flex">
                <div className="mt-2 willow_mar_sm">
                  <label>文章標題:</label>
                </div>
                <div className="flex-grow-1">
                  <input
                    required
                    type="text"
                    id="goodtitle"
                    placeholder="文章標題"
                    className="form-control"
                    value={mainform.goodtitle}
                    onChange={(e) => {
                      changeFields(e);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="form-group mt-3">
              <div className="d-flex">
                <div className="mt-2 willow_mar_sm">
                  <label>上傳圖片:</label>
                </div>

                <div>
                  {!!imgname ? (
                    <img
                      src={`http://localhost:3600/willowimgs/${imgname}`}
                      className="img-fluid rounded willow_mar_sm"
                      alt="example"
                    />
                  ) : (
                    <img
                      src="http://mdbootstrap.com/img/new/standard/city/044.webp"
                      className="img-fluid rounded willow_mar_sm"
                      alt="example"
                    />
                  )}
                </div>
                <div>
                  <input
                    type="hidden"
                    name="photos"
                    value={`${imgname}`}
                    required
                  />
                </div>
                <div>
                  <button
                    type="button"
                    className="btn willow_button"
                    onClick={() => {
                      fakeClickUploadimage();
                    }}
                  >
                    上傳圖片
                  </button>
                  <div
                    id="info-bar-danger"
                    className="alert alert-danger"
                    role="alert"
                    style={{ display: 'none' }}
                  >
                    請選擇圖片
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3 mt-3">
              <div className="d-flex">
                <div className="mt-2 willow_mar_sm">
                  <label>詳細內容:</label>
                </div>
                <div className=" flex-grow-1">
                  <textarea
                    className="form-control"
                    id="goodwords"
                    cols="30"
                    rows="10"
                    value={mainform.goodwords}
                    onChange={(e) => {
                      changeFields(e);
                    }}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="d-flex d-flex justify-content-center mt-5 mb-5">
              <button type="submit" className="btn  mt-3 willow_button">
                Submit
              </button>
            </div>
          </form>
          <div
            id="info-bar-success"
            className="alert alert-success"
            role="alert"
            style={{ display: 'none' }}
          >
            送出成功
          </div>

          {/* hidden form */}
          <form name="uploadimgFrom" className="willow_hidden">
            <div>
              <input
                id="newsimg"
                name="newsimg"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  logsee(e);
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WillowGoodWritings;
