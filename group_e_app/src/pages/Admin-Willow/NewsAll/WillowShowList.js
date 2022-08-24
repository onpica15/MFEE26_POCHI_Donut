import React from 'react';
import { Table, Container, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../scssstyle/WillowShowList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BsPenFill } from 'react-icons/bs';
import { AiOutlinePlusCircle } from 'react-icons/ai';
function WillowShowList(props) {
  const [newsdata, setNewsdata] = useState([]);
  const [goodwritingdata, setGoodWritingdata] = useState([]);
  const [goodpricedata, setGoodPricedata] = useState([]);

  const { setOption, setChoosesid } = props;
  // 點選加1
  const [control, setControl] = useState(0);
  // 拿good price activty
  const getdatagoodprice = async () => {
    const response = await axios.get(
      `http://localhost:3600/willownews/goodpricedata`
    );
    const resdata = response.data;
    setGoodPricedata(resdata);
  };
  // 拿goodwritingsdata
  const getdatagoodwriting = async () => {
    const response = await axios.get(
      `http://localhost:3600/willownews/goodwritingdata`
    );
    const resdata = response.data;
    setGoodWritingdata(resdata);
  };

  // 拿newsdata
  const getdatanews = async () => {
    const response = await axios.get(
      `http://localhost:3600/willownews/newsdata`
    );
    const resdata = response.data;
    setNewsdata(resdata);
  };

  // -------------------------------------------
  // 刪除news
  const deledatanews = async (dsid) => {
    console.log(dsid);
    let con = control;

    const response = await axios.delete(
      `http://localhost:3600/willownews/newsdata?sid=${dsid}`
    );
    const resdata = response.data;
    setControl(con + 1);
  };
  // 刪除good
  const deledatagood = async (dsid) => {
    console.log(dsid);
    let con = control;
    const response = await axios.delete(
      `http://localhost:3600/willownews/goodwritingdata?sid=${dsid}`
    );
    const resdata = response.data;
    setControl(con + 1);
  };

  // 抓抓
  useEffect(() => {
    getdatanews();
    getdatagoodwriting();
    getdatagoodprice();
  }, [control]);

  return (
    <div id="willowshowlist">
      <div className="container-fuilter">
        <h1 className="w-75 m-auto">ShowList</h1>
        {/* ---News--- */}
        <div className="row col_bline justify-content-center">
          <div className="col-12 mt-5 willow_p_5 ">
            <h3 className="d-flex w-25 justify-content-around">
              <div>News</div>
              <div className="d-flex ">
                <div className="pt-1">新增</div>
                <div className="willow_icons_add">
                  <AiOutlinePlusCircle
                    onClick={() => {
                      setOption(1);
                    }}
                  />
                </div>
              </div>
            </h3>
            <div className="willow_focus_left willow_minh w-100">
              <table className="table table-striped text-center">
                <thead className="willow_table_thead_style3">
                  <tr>
                    <th scope="col">newsid</th>
                    <th scope="col">newsimg</th>
                    <th scope="col">newstitle</th>
                    <th scope="col">words</th>
                    <th scope="col">newsAt</th>
                  </tr>
                </thead>
                <tbody>
                  {console.log('newsdata', newsdata)}
                  {newsdata
                    ? newsdata.map((row) => (
                        <tr key={'news' + row.newsid}>
                          <th scope="row">
                            <div className="d-flex w-50 justify-content-around">
                              <div>
                                <button
                                  type="button"
                                  className="btn-close"
                                  aria-label="Close"
                                  onClick={() => {
                                    deledatanews(row.newsid);
                                  }}
                                ></button>
                              </div>
                              <div>{row.newsid}</div>
                            </div>
                          </th>
                          <td className="willow_hdsty">
                            <img
                              src={`http://localhost:3600/willowimgs/${row.newsimg}`}
                              className="willow_hmax"
                            />
                          </td>
                          <td>{row.newstitle}</td>

                          <td>
                            <div className="willow_ellipsis">{row.words} </div>
                          </td>
                          <td>
                            <div className="d-flex  justify-content-between">
                              <div className="willow_wspeace">
                                {row.news_at.slice(0, 10)}
                              </div>
                              <div className="willow_icons">
                                <BsPenFill
                                  onClick={() => {
                                    setChoosesid(row.newsid);
                                    console.log(row.newsid);
                                    setOption(11);
                                  }}
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-12 mt-5 willow_p_5">
            <h3 className="d-flex w-25 justify-content-around">
              <div>Activty</div>
              <div className="d-flex ">
                <div className="pt-1">新增</div>
                <div className="willow_icons_add">
                  <AiOutlinePlusCircle
                    onClick={() => {
                      setOption(2);
                    }}
                  />
                </div>
              </div>
            </h3>
            <div className="willow_focus_left willow_minh w-100">
              <table className="table table-striped text-center">
                <thead className="willow_table_thead_style3">
                  <tr>
                    <th scope="col">newsid</th>
                    <th scope="col">Start</th>
                    <th scope="col">Finish</th>
                    <th scope="col">newsimg</th>
                    <th scope="col">newstitle</th>
                    <th scope="col">words</th>
                    <th scope="col">newsAt</th>
                  </tr>
                </thead>
                <tbody>
                  {goodpricedata
                    ? goodpricedata.map((row) => (
                        <tr key={'act' + row.newsid}>
                          <th scope="row">
                            <div className="d-flex w-50 justify-content-around">
                              <div>
                                <button
                                  type="button"
                                  className="btn-close"
                                  aria-label="Close"
                                  onClick={() => {
                                    deledatanews(row.newsid);
                                  }}
                                ></button>
                              </div>
                              <div>{row.newsid}</div>
                            </div>
                          </th>
                          <td>
                            <div className="willow_wspeace">
                              {row.starttime.slice(0, 10)}
                            </div>
                          </td>
                          <td>
                            <div className="willow_wspeace">
                              {row.finishtime.slice(0, 10)}
                            </div>
                          </td>
                          <td className="willow_hdsty">
                            <img
                              src={`http://localhost:3600/willowimgs/${row.newsimg}`}
                              className="willow_hmax"
                            />
                          </td>
                          <td>{row.newstitle}</td>
                          <td>
                            <div className="willow_ellipsis">{row.words} </div>
                          </td>
                          <td>
                            <div className="d-flex  justify-content-between">
                              <div className="willow_wspeace">
                                {row.news_at.slice(0, 10)}
                              </div>
                              <div className="willow_icons  willow_pl">
                                <BsPenFill
                                  onClick={() => {
                                    setChoosesid(row.newsid);
                                    console.log(row.newsid);
                                    setOption(12);
                                  }}
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-12 mt-5 mb-5 willow_p_5">
            <h3 className="d-flex justify-content-around willow_w">
              <div>Good Writing</div>
              <div className="d-flex ">
                <div className="pt-1">新增</div>
                <div className="willow_icons_add">
                  <AiOutlinePlusCircle
                    onClick={() => {
                      setOption(3);
                    }}
                  />
                </div>
              </div>
            </h3>
            <div className="willow_focus_left willow_minh w-100">
              <table className="table table-striped text-center">
                <thead className="willow_table_thead_style3">
                  <tr>
                    <th scope="col">goodwritingid</th>
                    <th scope="col">goodimg</th>
                    <th scope="col">goodtitle</th>
                    <th scope="col">goodwords</th>
                    <th scope="col">good_at</th>
                  </tr>
                </thead>
                <tbody>
                  {console.log('goodwritingdata', goodwritingdata)}
                  {goodwritingdata
                    ? goodwritingdata.map((row) => (
                        <tr
                          key={'good' + row.goodwritingid}
                          className="align-items-center"
                        >
                          <th scope="row">
                            <div className="d-flex w-50">
                              <div>
                                <button
                                  type="button"
                                  className="btn-close"
                                  aria-label="Close"
                                  onClick={() => {
                                    deledatagood(row.goodwritingid);
                                  }}
                                ></button>
                              </div>
                              <div>{row.goodwritingid}</div>
                            </div>
                          </th>
                          <td className="willow_hdsty">
                            <img
                              src={`http://localhost:3600/willowimgs/${row.goodimg}`}
                              className="willow_hmax"
                            />
                          </td>
                          <td className="">
                            <p> {row.goodtitle}</p>
                          </td>
                          <td className="willow_p align-middle">
                            <div className="willow_ellipsis ">
                              {row.goodwords}
                            </div>
                          </td>
                          <td className="">
                            <div className="d-flex  justify-content-between">
                              <div className="willow_wspeace">
                                {row.good_at.slice(0, 10)}
                              </div>
                              <div className="willow_icons willow_pl">
                                <BsPenFill
                                  onClick={() => {
                                    setChoosesid(row.goodwritingid);
                                    setOption(13);
                                  }}
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WillowShowList;
