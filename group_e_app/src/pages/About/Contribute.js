import ProjectButton from '../../components/ProjectButton/ProjectButton';
import React, { useState, useEffect } from 'react';

import axios from 'axios';

import H2 from '../../components/H2';
function Contribute() {
  const [countData, setCountData] = useState(0);

  const getCount = async () => {
    const response = await axios.get(`http://localhost:3600/willownews/count`);
    const resdata = response.data;
    // console.log("resdata",resdata.con);
    setCountData(resdata);
  };

  useEffect(() => {
    getCount();
  }, []);

  return (
    <>
      <section className="bingback">
        <H2 title="回饋社會" Entitle="Contribute " />
        <div className="d-flex flex-wrap">
          <div className="col-12 col-md-6">
            <div className="w-75 mx-auto">
              <p className="bingH4">我們重視猫的權益</p>
              <p className="bingH5 my-2">每賣出一個甜甜圈就捐贈一份猫糧</p>
              <p className="bingText-16 my-5 ">
                Pocki屋除了致力於研發美味的甜甜圈，秉持著「取之於社會，用之於社會」的理念，採用「賣一捐一」模式，每完成一筆訂單就捐贈一份猫糧予流浪動物之家，改善社區的環境汙染問題、提升流浪動物生活品質，創造雙贏局面，並給牠們溫暖的家。
              </p>
              <ProjectButton text="GO SHOPPING" />
              <p className="bingH4 text-center mt-5 mb-3">共已捐贈</p>
              <div className="text-center  mb-4">
                <span className="bingH2 CSRNum2">
                  {countData < 10
                    ? '00' + countData
                    : countData < 100
                    ? '0' + countData
                    : countData}
                </span>
                <span className="bingH5"> 份</span>
              </div>
              <div className="text-center">
                <img className="" src="./images/CSR-bowl.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 ">
            <img className="w-100" src="./images/CSR-img.svg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
export default Contribute;
