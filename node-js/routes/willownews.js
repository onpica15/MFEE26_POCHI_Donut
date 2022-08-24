const express = require("express");
const db = require(__dirname + "/../modules/mysql-connect");
const moment = require("moment-timezone");
// const { toDateString, toDatetimeString } = require(__dirname +
//     "/../modules/date-tools");

const Joi = require("joi");
const upload = require(__dirname + "/../modules/upload-images");

const router = express.Router(); // 建立 router 物件

//ReadCustom
router.get("/readcustom", async (req, res) => {
  let newdata = [];
  const { sid } = req.query;
  const sql = `SELECT * FROM customdata WHERE mem = ${sid}`;
  const [result] = await db.query(sql);
  res.json(result);
});

//AddCustom
router.post("/addcustom", async (req, res) => {
  const { mem, img, donut, layer, decoration, price } = req.body;
  let output = {
    success: false,
    data: req.body,
    error: "",
    information: "",
  };
  if (!!req.body === true) {
    const sql =
      "INSERT INTO `customdata`(`mem`, `img`, `donut`, `layer`, `decoration`, `price`) VALUES (?,?,?,?,?,?)";

    const [result] = await db.query(sql, [
      mem,
      img,
      donut,
      layer,
      decoration,
      price,
    ]);
    output.success = true;
    output.information = "insert ok";
  }
  res.json(output);
});
//Count
router.get("/count", async (req, res) => {
  let output = {
    count: 0,
  };
  
  const sql = `SELECT COUNT(*) FROM cart_orders WHERE 1`;
  const [[{ "COUNT(*)": result }]] = await db.query(sql);
  output.count = result;

  //   output.count = result.length;
  console.log("output", output.count);
  res.json(output.count);
});
//bing show
router.get("/showalldata", async (req, res) => {
  let newdata = [];
  const sql = `SELECT newsid,userid,newstitle,words,newsimg,newsstyle,news_at FROM willownews WHERE 1 ORDER BY newsid DESC LIMIT 5`;
  const [result] = await db.query(sql);
  res.json(result);
});

// 讀grap時間 data
router.get("/graptimedata", async (req, res) => {
  const { sid,start,end } = req.query;
  const numsid=+sid;
  let sql='';
console.log(numsid );
  if(numsid===1){
    console.log("11")
  sql = `SELECT d.sid, member_sid, created_at,d.product_sid,d.p_name, quantity, pay_price FROM willow_cart_orders as c,willow_cart_orderdetail as d 
  where d.orders_id=c.sid AND created_at>DATE_SUB(CURDATE(), INTERVAL 1 WEEK)`;
  }else if(numsid===2){
    console.log("12")
    sql = `SELECT d.sid, member_sid, created_at,d.product_sid,d.p_name, quantity, pay_price FROM willow_cart_orders as c,willow_cart_orderdetail as d 
    where d.orders_id=c.sid AND created_at>DATE_SUB(CURDATE(), INTERVAL 1 MONTH) `;
  }else if(numsid===3){
    console.log("13")
    sql = `SELECT d.sid, member_sid, created_at,d.product_sid,d.p_name, quantity, pay_price FROM willow_cart_orders as c,willow_cart_orderdetail as d 
    where d.orders_id=c.sid AND created_at>DATE_SUB(CURDATE(),INTERVAL 3 MONTH)`;
  }else if(numsid===4){
    console.log("13")
    sql = `SELECT d.sid, member_sid, created_at,d.product_sid,d.p_name, quantity, pay_price FROM willow_cart_orders as c,willow_cart_orderdetail as d 
    where d.orders_id=c.sid AND created_at>DATE_SUB(CURDATE(),INTERVAL 6 MONTH)`;
  }else if(numsid===5){
    console.log("13")
    sql = `SELECT d.sid, member_sid, created_at,d.product_sid,d.p_name, quantity, pay_price FROM willow_cart_orders as c,willow_cart_orderdetail as d 
    where d.orders_id=c.sid AND created_at>DATE_SUB(CURDATE(),INTERVAL 1 YEAR)`;
  } else if (numsid === 6) {
    sql = `SELECT d.sid, member_sid, created_at,d.product_sid,d.p_name, quantity, pay_price FROM willow_cart_orders as c,willow_cart_orderdetail as d where d.orders_id=c.sid AND created_at BETWEEN '${start}' AND '${end}'`;

  }else{ 
    sql = `SELECT d.sid, member_sid, created_at,d.product_sid,d.p_name, quantity, pay_price FROM willow_cart_orders as c,willow_cart_orderdetail as d 
  where d.orders_id=c.sid AND created_at>DATE_SUB(CURDATE(),INTERVAL 1 YEAR)`;
}
  const [result] = await db.query(sql);
  result.forEach(
    (el) => (el.created_at = res.locals.toDateString(el.created_at))
  );
  // console.log("resul",result,typeof(start))
  // console.log("goodpricedata", result);
  res.json(result);
});

// 讀grap data
router.get("/grapdata", async (req, res) => {
  const sql = `SELECT d.sid, member_sid, created_at, quantity, pay_price, member_age,d.p_name,d.product_sid FROM willow_cart_orders as c,willowcart_member_age as w ,willow_cart_orderdetail as d WHERE d.orders_id=c.sid AND c.member_sid=w.sid`;
  const [result] = await db.query(sql);

  // console.log("goodpricedata", result);
  res.json(result);
});

// 讀news data
router.get("/newsdata", async (req, res) => {
  let newdata = [];
  const sql = `SELECT newsid,userid,newstitle,words,newsimg,newsstyle,news_at FROM willownews WHERE newsstyle=1 ORDER BY newsid DESC`;
  // const sql2 = `SELECT newsid,userid,newstitle,words,newsimg,newsstyle,news_at FROM willownews WHERE newsstyle=2 ORDER BY newsid DESC`;
  // [result]如果右邊也是陣列，會按照順序放過去
  const [result] = await db.query(sql);
  // const [r2] = await db.query(sql2);
  // console.log("result", result);
  // console.log("r2",r2);
  // const newdata=[...result,...r2]

  // newdata = [...newdata,result];
  // console.log("newdata1", newdata);
  // newdata = [...newdata,r2];
  // console.log("newdata2", newdata);

  res.json(result);
});
// 讀goodprice Activty
router.get("/goodpricedata", async (req, res) => {
  const sql = `SELECT newsid,userid,starttime,finishtime,newstitle,words,newsimg,newsstyle,news_at FROM willownews WHERE newsstyle=2 ORDER BY newsid DESC`;
  const [result] = await db.query(sql);
  result.forEach(
    (el) => (
      (el.starttime = res.locals.toDateString(el.starttime)),
      (el.finishtime = res.locals.toDateString(el.finishtime))
    )
  );
  // console.log("goodpricedata", result);
  res.json(result);
});
// 讀goodwriting data
router.get("/goodwritingdata", async (req, res) => {
  const sql = `SELECT * FROM goodwriting WHERE 1 ORDER BY goodwritingid DESC`;
  const [result] = await db.query(sql);
  res.json(result);
});
// delete newsdata
router.delete("/newsdata", async (req, res) => {
  let output = {
    success: false,
    data: req.query,
    error: "",
    information: "",
  };
  // console.log("req.query", req.query);
  const { sid } = req.query;
  if (!!req.query === true) {
    console.log(sid);
    const sql = `DELETE FROM willownews WHERE newsid=?`;
    const [result] = await db.query(sql, [sid]);
    output.success = true;
    output.information = "news delet ok";
  }
  res.json(output);
});

// delete goodwritingdata
router.delete("/goodwritingdata", async (req, res) => {
  let output = {
    success: false,
    data: req.query,
    error: "",
    information: "",
  };
  const { sid } = req.query;
  if (!!req.query === true) {
    console.log(sid);
    const sql = `DELETE FROM goodwriting WHERE goodwritingid=?`;
    const [result] = await db.query(sql, [sid]);
    output.success = true;
    output.information = "good writing delet ok";
  }
  res.json(output);
});

// upload.none()用中介轉乘 url inclding
//讀進入newsupdate畫面的get
router.get("/newsupdate", async (req, res) => {
  const { sid } = req.query;
  const sql = `SELECT newsid,userid,newstitle,words,newsimg,newsstyle,news_at FROM willownews WHERE newsid=?`;
  const [result] = await db.query(sql, [sid]);

  // console.log(result);
  res.json(result);
});
//讀進入goodprice-activty update畫面的get
// 用res.locals.toDateString的原因，因為前面已經指定給res.locals
// res.locals寫在頂層middleware，所以每個都會吃到
router.get("/goodpriceupdate", async (req, res) => {
  const { sid } = req.query;
  const sql = `SELECT newsid,userid,starttime,finishtime,newstitle,words,newsimg,newsstyle,news_at FROM willownews WHERE newsid=?`;
  const [result] = await db.query(sql, [sid]);
  result.forEach(
    (el) => (
      (el.starttime = res.locals.toDateString(el.starttime)),
      (el.finishtime = res.locals.toDateString(el.finishtime))
    )
  );
  // console.log("result", result);
  res.json(result);
});
//讀進入goodupdate畫面的get
router.get("/goodwritingupdate", async (req, res) => {
  const { sid } = req.query;
  // console.log(sid);
  const sql = `SELECT goodwritingid,userid,goodtitle,goodwords,goodimg FROM goodwriting WHERE goodwritingid=?`;
  const [result] = await db.query(sql, [sid]);

  // console.log(result);
  res.json(result);
});

// test
router.get("/test", async (req, res) => {
  const sql = `SELECT sid,test,test2 FROM rtest WHERE 1`;
  const [result] = await db.query(sql);
  res.json(result);
});

//更新newsupdate資料
router.put("/newsupdate", async (req, res) => {
  let output = {
    success: false,
    data: req.body,
    error: "",
    information: "",
  };
  const { userid, newsid, newstitle, words, newsimg, newsstyle } = req.body;
  console.log(userid, newsid);

  const sql = `UPDATE willownews SET userid=?,newstitle=?,words=?,newsimg=?,newsstyle=? WHERE  newsid=${newsid}`;

  const [result] = await db.query(sql, [
    userid,
    newstitle,
    words,
    newsimg,
    newsstyle,
  ]);
  if (result.affectedRows === 1) {
    output.success = true;
    output.information = "news update ok";
  } else {
    output.error = "error";
  }
  res.json(output);
});
//更新goodprice-activty update資料
router.put("/goodpriceupdate", async (req, res) => {
  let output = {
    success: false,
    data: req.body,
    error: "",
    information: "",
  };
  const {
    userid,
    newsid,
    starttime,
    finishtime,
    newstitle,
    words,
    newsimg,
    newsstyle,
  } = req.body;
  console.log("show", userid, newsid);

  const sql = `UPDATE willownews SET userid=?,starttime=?,finishtime=?,newstitle=?,words=?,newsimg=?,newsstyle=? WHERE  newsid=${newsid}`;

  const [result] = await db.query(sql, [
    userid,
    starttime,
    finishtime,
    newstitle,
    words,
    newsimg,
    newsstyle,
  ]);
  if (result.affectedRows === 1) {
    output.success = true;
    output.information = "news update ok";
  } else {
    output.error = "error";
  }
  res.json(output);
});
//更新goodwritingupdate資料
router.put("/goodwritingupdate", async (req, res) => {
  let output = {
    success: false,
    data: req.body,
    error: "",
    information: "",
  };
  const { userid, goodwritingid, goodtitle, goodwords, goodimg } = req.body;
  console.log(userid, goodwritingid);

  const sql = `UPDATE goodwriting SET userid=?,goodtitle=?,goodwords=?,goodimg=? WHERE  goodwritingid=${goodwritingid}`;

  const [result] = await db.query(sql, [userid, goodtitle, goodwords, goodimg]);
  if (result.affectedRows === 1) {
    output.success = true;
    output.information = "good update ok";
  } else {
    output.error = "error";
  }
  // console.log(output)
  res.json(output);
});

// inser news
router.post("/newsadd", async (req, res) => {
  // (`newsid`, `userid`, `newstitle`, `words`, `newsimg`, `newsstyle`, `news_at`)
  const { userid, newstitle, words, newsimg, newsstyle } = req.body;
  console.log(req.body);
  let output = {
    success: false,
    data: req.body,
    error: "",
    information: "",
  };
  if (!!req.body === true) {
    const sql =
      "INSERT INTO `willownews`(`userid`,`newstitle`,`starttime`,`finishtime`,`words`,`newsimg`,`newsstyle`,`news_at`) VALUES (?,?,NOW(),NOW(),?,?,?,NOW())";

    const [result] = await db.query(sql, [
      userid,
      newstitle,
      words,
      newsimg,
      newsstyle,
    ]);
    output.success = true;
    output.information = "insert ok";
  }

  res.json(output);
});
// inser good
router.post("/goodwritingsadd", async (req, res) => {
  // (`newsid`, `userid`, `newstitle`, `words`, `newsimg`, `newsstyle`, `news_at`)
  const { userid, goodtitle, goodwords, goodimg } = req.body;
  console.log(req.body);
  let output = {
    success: false,
    data: req.body,
    error: "",
    information: "",
  };
  if (!!req.body === true) {
    const sql =
      "INSERT INTO `goodwriting`(`userid`,`goodtitle`,`goodwords`,`goodimg`,`good_at`) VALUES (?,?,?,?,NOW())";

    const [result] = await db.query(sql, [
      userid,
      goodtitle,
      goodwords,
      goodimg,
    ]);
    output.success = true;
    output.information = "insert ok";
  }

  res.json(output);
});
// inser goodprice
router.post("/goodpriceadd", async (req, res) => {
  const {
    userid,
    newstitle,
    starttime,
    finishtime,
    words,
    newsimg,
    newsstyle,
  } = req.body;
  console.log(req.body);
  let output = {
    success: false,
    data: req.body,
    error: "",
    information: "",
  };
  if (!!req.body === true) {
    const sql =
      "INSERT INTO `willownews`(`userid`,`newstitle`,`starttime`,`finishtime`,`words`,`newsimg`,`newsstyle`,`news_at`) VALUES (?,?,?,?,?,?,?,NOW())";

    const [result] = await db.query(sql, [
      userid,
      newstitle,
      starttime,
      finishtime,
      words,
      newsimg,
      newsstyle,
    ]);
    output.success = true;
    output.information = "insert ok";
  }

  res.json(output);
});

module.exports = router;
