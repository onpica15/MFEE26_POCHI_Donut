import { useState, useRef, useEffect, useContext } from 'react';
import AuthContext from '../../pages/member/components/AuthContext';
import { confirm } from '../../components/Confirm';
import axios from 'axios';

import H2 from '../../components/H2';

function BingCustomized(props) {
  const { carts, setCarts } = props;
  const { sid } = useContext(AuthContext);

  const realRef = useRef();

  const changeFields = (event) => {
    const id = event.target.id;
    const val = event.target.value;
    setMain({ ...main, [id]: val });
  };

  // var can = realRef.current.toDataURL('image/png');
  // console.log(can);

  //挑選donut
  const [donut, setDonut] = useState('origin');
  const [donutPrice, setDonutPrice] = useState(15);
  const donutPriceOptions = [15, 20, 20, 25];
  const donutOptions = ['origin', 'strawberry', 'Ponde', 'matcha'];
  //挑選糖霜
  const [layer, setLayer] = useState('');
  const [layerPrice, setLayerPrice] = useState(0);
  const layerPriceOptions = [5, 10, 10, 15, 20];
  const layerOptions = ['sugar', 'chocolate', 'strawberry', 'milk', 'dot'];
  //配料
  const [decoration, setDecoration] = useState('');
  const [decorationPrice, setDecorationPrice] = useState(0);
  const decorationPriceOptions = [5, 5, 10, 10, 15];
  const decorationOptions = [
    'rice',
    'sugarpowder',
    'cotton',
    'strawberry',
    'onion',
  ];
  const totalPrice = donutPrice + layerPrice + decorationPrice;
  //取圖函式
  const getImageFromPath = (path) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = path;
      img.onload = () => {
        resolve(img);
      };
    });
  };
  //畫圖
  const renderCanvas = async () => {
    console.log(totalPrice);
    const ctx = realRef.current.getContext('2d');
    const bg = await getImageFromPath('/images/Customized/bg.jpg');
    ctx.drawImage(bg, 0, 0);

    const donutImg = await getImageFromPath(
      `/images/Customized/basic/${donut}.png`
    );
    ctx.drawImage(donutImg, 0, 0);

    if (layer) {
      const layerImg = await getImageFromPath(
        `/images/Customized/layer/${layer}.png`
      );
      ctx.drawImage(layerImg, 0, 0);
    }

    if (decoration) {
      const decorationImg = await getImageFromPath(
        `/images/Customized/decoration/${decoration}.png`
      );
      ctx.drawImage(decorationImg, 0, 0);
    }

    var base64 = realRef.current.toDataURL('image/jpeg', 0.5);

    setMain({ ...main, img: base64, price: totalPrice });
  };
  //客製化資料
  const [main, setMain] = useState({
    product_name: '客製化甜甜圈',
    mem: sid,
    img: '',
    donut: 'origin',
    layer: '',
    decoration: '',
    price: 0,
  });

  //寫入資料庫  停用
  // const logsee = async (e) => {
  //   setDonut('origin');
  //   setDonutPrice(15);
  //   setLayer('');
  //   setLayerPrice(0);
  //   setDecoration('');
  //   setDecorationPrice(0);
  //   //data等於主狀態寫入資料表
  //   const data = main;

  //   const response = await axios.post(
  //     'http://localhost:3600/willownews/addcustom',
  //     data
  //   );
  //   const resdata = response.data;
  // };

  //加入購物車
  const handleAddToCarts = (product_name, product_price, product_img) =>
    setCarts(
      carts.concat({
        product_name,
        product_price,
        product_img,
      }),
      confirm('成功加入購物車')
    );

  useEffect(() => {
    renderCanvas();
    // setMain({ ...main, price: totalPrice });
  }, [donut, layer, decoration]);

  return (
    <>
      <div className="container h-100">
        <H2 title={'製作獨特的甜甜圈'} Entitle={'Customized'}></H2>
        <div className="d-flex flex-wrap justify-content-center">
          <div className="col-12 col-md-5 h-100">
            <h6 className="bingText-16">挑選甜甜圈口味</h6>
            <div className="d-flex">
              {donutOptions.map((v, i) => {
                return (
                  <>
                    <div>
                      <div className="customSelect" key={i}>
                        <input
                          id="donut"
                          type="radio"
                          checked={donut === v}
                          value={v}
                          onChange={(e) => {
                            setDonut(e.target.value);
                            setDonutPrice(donutPriceOptions[i]);
                            changeFields(e);
                          }}
                        />
                        <img
                          src={`/images/Customized/basic/${v}Icon.png`}
                          alt=""
                        />
                      </div>
                      <p className="text-center bingText-16">
                        {donutPriceOptions[i]}元
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
            <h6 className="bingText-16">挑選糖霜</h6>
            <div className="d-flex">
              {layerOptions.map((v, i) => {
                return (
                  <>
                    <div>
                      <div className="customSelect" key={i}>
                        <input
                          id="layer"
                          type="radio"
                          checked={layer === v}
                          value={v}
                          onChange={(e) => {
                            setLayer(e.target.value);
                            setLayerPrice(layerPriceOptions[i]);
                            changeFields(e);
                          }}
                        />
                        <img
                          src={`/images/Customized/layer/${v}Icon.png`}
                          alt=""
                        />
                      </div>
                      <p className="text-center bingText-16">
                        {layerPriceOptions[i]}元
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
            <h6 className="bingText-16">挑選配料</h6>
            <div className="d-flex">
              {decorationOptions.map((v, i) => {
                return (
                  <>
                    <div>
                      <div className="customSelect" key={i}>
                        <input
                          id="decoration"
                          type="radio"
                          checked={decoration === v}
                          value={v}
                          onChange={(e) => {
                            setDecoration(e.target.value);
                            setDecorationPrice(decorationPriceOptions[i]);
                            changeFields(e);
                          }}
                        />
                        <img
                          className=""
                          src={`/images/Customized/decoration/${v}Icon.png`}
                          alt=""
                        />
                      </div>
                      <p className="text-center bingText-16">
                        {decorationPriceOptions[i]}元
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="w-100">
              <p className="bingText-16 d-flex justify-content-between">
                甜甜圈口味<span>+{donutPrice}元</span>
              </p>
              <p className="bingText-16 d-flex justify-content-between">
                糖霜<span>+{layerPrice}元</span>
              </p>
              <p className="bingText-16 d-flex justify-content-between">
                配料<span>+{decorationPrice}元</span>
              </p>
              <hr />
              <p className="d-flex justify-content-end bingH6">
                總金額
                <span className="bingH5" style={{ fontWeight: 'bold' }}>
                  {totalPrice}
                </span>
                元
              </p>
            </div>
          </div>
          <div className="col-12 col-md-7">
            <div className="d-flex flex-wrap">
              <canvas ref={realRef} width={750} height={600} />
            </div>
          </div>
          <div className="text-center">
            <button
              className="ProjectButton my-4"
              onClick={() => {
                handleAddToCarts(main.product_name, main.price, main.img);
              }}
            >
              <i className="fa-solid fa-circle-plus"></i> 加入購物車
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BingCustomized;

// 多選選單寫法
// for (let i of layer) {
//   const layerImg = await getImageFromPath(
//     `/images/Customized/layer/${i}.png`
//   );
//   ctx.drawImage(layerImg, 0, 0);
// }

//多選寫法

// <h6>挑選甜甜圈糖霜</h6>
//             {layerOptions.map((v, i) => {
//               return (
//                 <div key={i}>
//                   <input
//                     type="checkbox"
//                     checked={layer.includes(v)}
//                     value={v}
//                     onChange={(e) => {
//                       //先判斷是否有在likeList狀態陣列中
//                       if (layer.includes(e.target.value)) {
//                         // if有 -> 移出陣列
//                         const newLayer = layer.filter((v, i) => {
//                           return v !== e.target.value;
//                         });
//                         setLayer(newLayer);
//                       } else {
//                         // else -> 加入陣列
//                         const newLayer = [...layer, e.target.value];
//                         setLayer(newLayer);
//                       }
//                     }}
//                   />
//                   <label>{v}</label>
//                 </div>
//               );
//             })}
