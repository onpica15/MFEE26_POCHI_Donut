const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require(__dirname + "/../modules/mysql-connect");

const router = express.Router(); // 建立 router 物件



//讀會員資料
router.get("/member", async (req, res) => {
  let newdata = [];
  const { sid } = req.query;
  const sql = `SELECT * FROM member WHERE sid = ${sid}`;
  const [result] = await db.query(sql);
  res.json(result);
});

// loveyu 購物車寫入資料庫 ----------------------------

router.post("/cartsData", async (req, res) => {
  let tempCount = 0;
  let tempPrice = 0;
  let memberSid = 0;
  let shipName = "";
  let shipPhone = 0;
  let shipEmail = "";
  let addressDetail = "";

  let output = {
    success: false,
    data: req.body,
    error: "",
    information: "",
  };
  //   memSid: 53,
  //   shipName: '111',
  //   shipPhone: '111',
  //   shipEmail: '111@ss.ss',
  //   country: 10,
  //   township: 2,
  //   addressDetail: '復興南路99號2樓',
  //   creditCardNum: '8899 3344 2244 2233',
  //   creditCardDate: '10/25',
  //   creditCardName: '游小豪',
  //   creditSecurityCode: '889'
  // sid: '3',
  // product_name: '歐菲香',
  // category_sid: '3',
  // product_price: '40',
  // product_img: '/images/old-fashion.jpeg',
  // product_desc: '歐菲香，嚼起來軟軟的，超好吃',
  // created_at: '2022-06-02 11:48:37',
  // count: 1
  // },
  // {
  // sid: '2',
  // product_name: '宇治抹茶波堤',
  // category_sid: '1',
  // product_price: '50',
  // product_img: '/images/uji-matcha.jpg',
  // product_desc: '濃郁的辻利宇治抹茶，配上 Meow Meow Donuts 的招牌波堤，讓我們享受吧～ Fêtons ça!',
  // created_at: '2022-05-31 22:48:28',
  // count: 1
  memberSid = req.body[req.body.length - 1].memSid;
  shipName = req.body[req.body.length - 1].shipName;
  shipPhone = +req.body[req.body.length - 1].shipPhone;
  shipEmail = req.body[req.body.length - 1].shipEmail;
  addressDetail = req.body[req.body.length - 1].addressDetail;

  console.log(req.body[req.body.length - 1].memSid);
  for (let i = 0; i < req.body.length - 1; i++) {
    if (req.body[i].sid) {
      tempPrice += +req.body[i].product_price;
      tempCount += +req.body[i].count;
    }
  }
  console.log(tempCount, tempPrice);
  if (!!req.body === true) {
    const sql =
      "INSERT INTO `cart_orders`(`member_sid`, `created_at`, `total_quantity`, `pay_price`, `ship_name`, `ship_phone`, `ship_email`, `ship_address`) VALUES (?,NOW(),?,?,?,?,?,?)";
    const [result] = await db.query(sql, [
      memberSid,
      tempCount,
      tempPrice,
      shipName,
      shipPhone,
      shipEmail,
      addressDetail,
    ]);
    // const [result] = await db.query(sql, [
    //   memSid,
    //   count,
    //   product_price,
    //   shipName,
    //   shipPhone,
    //   shipEmail,
    //   addressDetail,
    // ]);
    output.success = true;
    output.information = "insert ok";
    console.log(result);
    res.json(output);
  }
});

module.exports = router;
