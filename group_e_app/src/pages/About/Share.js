import { useState, useEffect } from 'react';
import axios from 'axios';
import H2 from '../../components/H2';
import Pop from './component/Pop';
function Share() {
  const [shareData, setShareData] = useState([]);

  //資料結構
  // good_at: "2022-08-11T03:42:53.000Z"
  // goodimg: "732a871b-6268-47d5-a211-abb05369f218.jpg"
  // goodtitle: "123"
  // goodwords: "123"
  // goodwritingid: 14
  // userid: 0

  const getShareData = async () => {
    const response = await axios.get(
      `http://localhost:3600/willownews/goodwritingdata`
    );
    const resdata = response.data;
    setShareData(resdata);
  };

  useEffect(() => {
    getShareData();
  }, []);

  return (
    <>
      <H2 title="好文分享" Entitle="SHARE" />
      {shareData.length > 0 && (
        <section className="container">
          <div className="d-flex justify-content-center share">
            <div className="col-md-6">
              <div className="d-flex h-50 w-100">
                <div className="w-50 bingPoniter">
                  <Pop
                    imgPath={shareData[0].goodimg}
                    title={shareData[0].goodtitle}
                    content={shareData[0].goodwords}
                  ></Pop>
                </div>
                <div className="w-50 bingPoniter">
                  <Pop
                    imgPath={shareData[1].goodimg}
                    title={shareData[1].goodtitle}
                    content={shareData[1].goodwords}
                  ></Pop>
                </div>
              </div>
              <div className="d-flex h-50 w-100">
                <div className="shareW-40">
                  <div className="h-50 bingPoniter">
                    <Pop
                      imgPath={shareData[2].goodimg}
                      title={shareData[2].goodtitle}
                      content={shareData[2].goodwords}
                    ></Pop>
                  </div>
                  <div className="h-50 bingPoniter">
                    <Pop
                      imgPath={shareData[3].goodimg}
                      title={shareData[3].goodtitle}
                      content={shareData[3].goodwords}
                    ></Pop>
                  </div>
                </div>
                <div className="shareW-60 bingPoniter">
                  <Pop
                    imgPath={shareData[4].goodimg}
                    title={shareData[4].goodtitle}
                    content={shareData[4].goodwords}
                  ></Pop>
                </div>
              </div>
            </div>
            <div className="col-md-2 bingPoniter">
              <Pop
                imgPath={shareData[5].goodimg}
                title={shareData[5].goodtitle}
                content={shareData[5].goodwords}
              ></Pop>
            </div>
            <div className="col-md-4">
              <div className="h-50 bingPoniter">
                <Pop
                  imgPath={shareData[6].goodimg}
                  title={shareData[6].goodtitle}
                  content={shareData[6].goodwords}
                ></Pop>
              </div>
              <div className="h-50 bingPoniter">
                <Pop
                  imgPath={shareData[7].goodimg}
                  title={shareData[7].goodtitle}
                  content={shareData[7].goodwords}
                ></Pop>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Share;
