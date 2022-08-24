import React from 'react';
import { useState, useEffect } from 'react';
import '../scssstyle/WillowHavegoodPrice.scss';
import axios from 'axios';
function WillowHavegoodPrice(props) {
  const { setOption, choosesid } = props;
  const [showupdatenews, setShowupdatenews] = useState({
    userid: 0,
    starttime: '',
    finishtime: '',
    newsid: 0,
    newstitle: '',
    words: '',
    newsimg: '',
  });
  const [imgname, setImgname] = useState('');
  const [mainform, setMainform] = useState({
    // userid,newstitle ,words, newsimg
    userid: 0,
    starttime: '',
    finishtime: '',
    newstitle: '',
    words: '',
    newsimg: '',
    newsstyle: 2,
  });
  const fakeClickUploadimage = () => {
    const c = document.getElementById('newsimg');
    console.log(c);
    c.click();
  };
  // 拿點選sid的data
  const getdatanews = async (upsid) => {
    const response = await axios.get(
      `http://localhost:3600/willownews/goodpriceupdate?sid=${upsid}`
    );
    const resdata = response.data;
    const showdata = resdata[0];

    setImgname(showdata.newsimg);
    setMainform(showdata);
    setShowupdatenews(showdata);
    // setShowupdatenews(response.data);
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
      const response = await axios.put(
        'http://localhost:3600/willownews/goodpriceupdate',
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

    setMainform({ ...mainform, newsimg: resdata.filename });
  };
  // console.log(mainform);
  const changeFields = (event) => {
    const id = event.target.id;
    const val = event.target.value;
    console.log({ id, val });
    setMainform({ ...mainform, [id]: val });
  };
  console.log('mainform1', mainform);
  useEffect(() => {
    getdatanews(choosesid);
  }, []);
  return (
    <div id="willowhavegoodprice">
      {
        ((mainform.starttime = mainform.starttime.slice(0, 10)),
        (mainform.finishtime = mainform.finishtime.slice(0, 10)),
        console.log(
          'mainformtest show',
          mainform.starttime,
          mainform.finishtime
        ))
      }
      <div className="container">
        <div className="row">
          <h3>WillowHavegoodPrice-Activty-update</h3>
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
                  <label>開始時間:</label>
                </div>
                <div>
                  <input
                    type="date"
                    className="form-control"
                    id="starttime"
                    value={mainform.starttime}
                    onChange={(e) => {
                      changeFields(e);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="form-group  mt-3">
              <div className="d-flex">
                <div className="mt-2 willow_mar_sm">
                  <label>結束時間:</label>
                </div>
                <div>
                  <input
                    type="date"
                    className="form-control"
                    id="finishtime"
                    value={mainform.finishtime}
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
                  <label>文章標題:</label>
                </div>
                <div className="flex-grow-1">
                  <input
                    required
                    type="text"
                    id="newstitle"
                    placeholder="文章標題"
                    className="form-control"
                    value={mainform.newstitle}
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
                    className="btn  willow_button"
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
            {/* writing detail */}
            <div className="mb-3 mt-3">
              <div className="d-flex">
                <div className="mt-2 willow_mar_sm">
                  <label>詳細內容:</label>
                </div>
                <div className=" flex-grow-1">
                  <textarea
                    className="form-control"
                    id="words"
                    cols="30"
                    rows="10"
                    value={mainform.words}
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

export default WillowHavegoodPrice;
