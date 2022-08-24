require("dotenv").config();
const express = require("express");

const multer = require("multer");
//yuchen 大頭貼上傳---------------------------------------------
const yuupload = require(__dirname + "/modules/yu-upload-images");
const willowupload = require(__dirname + "/modules/willow-upload-images");
//upload要改名字
const upload = require(__dirname + "/modules/upload-images");

const session = require("express-session");
const moment = require("moment-timezone");
const axios = require("axios");
const bcrypt = require("bcryptjs");

const db = require(__dirname + "/modules/mysql-connect");
const { toDateString, toDatetimeString } = require(__dirname +
  "/modules/date-tools");

const MysqlStore = require("express-mysql-session")(session);
const sessionStore = new MysqlStore({}, db);
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();

app.set("case sensitive routing", true);

// Top-level middlewares
const corsOptions = {
  // 全部允許
  credentials: true,
  origin: (origin, cb) => {
    console.log({ origin });
    cb(null, true);
  },
};
app.use(cors(corsOptions));

app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: "dkfdl85493igdfigj9457394573irherer",
    store: sessionStore,
    cookie: {
      maxAge: 1800000, // 30 min
    },
  })
);

// middleware: 中介軟體 (function)
// const bodyParser = express.urlencoded({extended: false});

//頂層middleware 一進來就做 所有routs之前
// TOP LEVEL middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//yuchen 登入----------------------------------------------------------
app.use((req, res, next) => {
  // res.locals.shinder = '哈囉';

  // template helper functions
  res.locals.toDateString = toDateString;
  res.locals.toDatetimeString = toDatetimeString;
  res.locals.session = req.session;

  //解密寫在middle ware 才可以全部頁面都拿到token
  const auth = req.get("Authorization");
  res.locals.payload = null;

  if (auth && auth.indexOf("Bearer ") === 0) {
    const token = auth.slice(7);
    //jwt判定完成存進locals.payload 裡面
    //2022-07-20 15 36 28 如果路由需要確認有沒有登入才做的話
    //jwt 每次request 都需要給token
    res.locals.payload = jwt.verify(token, process.env.JWT_SECRET);
    console.log("payload", res.locals.payload);
  }

  // willow admin login

  // const willow_admin_auth = req.get("Authorization"),看有沒有這檔頭
  const admin_auth = req.get("Authorization");
  res.locals.admin_payload = null;
  //willow_admin_auth.indexOf("Bearer ") === 0)，看有沒有在這個字串裡且在最前面(index=0)
  if (admin_auth && admin_auth.indexOf("Bearer ") === 0) {
    const admin_token = auth.slice(7);

    //jwt判定完成存進locals.admin_payload 裡面
    //jwt 每次request 都需要給token

    // jwt.verify解密
    res.locals.admin_payload = jwt.verify(admin_token, process.env.JWT_SECRET);
    // console.log("admin_payload", res.locals.admin_payload);
  }
  console.log("admin_payload", res.locals.admin_payload);
  next();
});

app.get("/try-qs", (req, res) => {
  res.json(req.query);
});

// middleware: 中介軟體 (function)
// const bodyParser = express.urlencoded({extended: false});
app.post("/try-post", (req, res) => {
  res.json(req.body);
});

//willow uploadimg
// "newsimg"名字跟著前端傳過來的一樣
app.post("/willow-upload", willowupload.single("newsimg"), (req, res) => {
  res.json(req.file);
});
app.use("/willowimgs", express.static(__dirname + "/public/willowimgs"));

app.post("/try-uploads", upload.array("photos"), (req, res) => {
  res.json(req.files);
});

app.get("/try-json", (req, res) => {
  const data = require(__dirname + "/data/data01");
  console.log(data);
  res.locals.rows = data;
  res.render("try-json");
});

// const adminsRouter = require(__dirname + "/routes/admins");
// prefix 前綴路徑

//因先把admin刪掉so這先段跑不了
// const adminsRouter = require(__dirname + "/routes/admins");
// // prefix 前綴路徑
// app.use("/admins", adminsRouter);
// app.use(adminsRouter);

// app.get("/try-session", (req, res) => {
//     req.session.my_var = req.session.my_var || 0;
//     req.session.my_var++;
//     res.json({
//         my_var: req.session.my_var,
//         session: req.session,
//     });
// });

// address-book
const addressbook = require(__dirname + "/routes/address-book1");
// prefix 前綴路徑
app.use("/address-book", addressbook);

//willow router
const willownewsR = require(__dirname + "/routes/willownews");
app.use("/willownews", willownewsR);
// const willownimgshow = require(__dirname + "/public/willowimgs");
// app.use("/willowshowimg", willownimgshow);

//willow admin 登入-----------------------------------------
app
  .route("/adminlogin-jwt")
  .get(async (req, res) => {
    res.render("adminlogin-jwt");
  })
  .post(async (req, res) => {
    const { admin_account, admin_password } = req.body;
    console.log(admin_account, admin_password);
    const output = {
      admin_success: false,
      admin_error: "",
      admin_code: 0,
      admin_data: {},
    };
    //用帳號撈會員資料
    const sql = "SELECT * FROM willowadminuser WHERE account=?";
    const [r1] = await db.query(sql, [admin_account]);
    console.log(r1);
    if (!r1.length) {
      // 帳號錯誤
      output.admin_code = 401;
      output.admin_success = "帳密錯誤";
      return res.json(output);
    }
    //const row = r1[0];
    //密碼對比
    // admin 不用
    // output.admin_success = await bcrypt.compare(
    //     req.body.password,
    //     r1[0].pass_hash
    // );
    //willow admin 密碼
    if (r1[0].password !== admin_password) {
      // 密碼錯誤
      output.admin_code = 401;
      output.admin_error = "帳密錯誤";
      return res.json(output);
    } else {
      // 成功登入
      //登入成功生成token
      console.log("成功登入");
      output.admin_success = true;

      const admin_token = jwt.sign(
        {
          admin_sid: r1[0].userid,
          admin_account: r1[0].account,
        },
        process.env.JWT_SECRET
      );

      output.admin_data = {
        admin_token,
        admin_sid: r1[0].userid,
        admin_name: r1[0].name,
        admin_account: r1[0].account,
      };
    }
    console.log("output", output);
    res.json(output);
  });
// --------------------------------------------------------------

//yuchen router--------------------------------------------------
const memberRouter = require(__dirname + "/routes/member");
app.use("/member", memberRouter);

//yuchen 登入-----------------------------------------
app
  .route("/login-jwt")
  .get(async (req, res) => {
    res.render("login-jwt");
  })
  .post(async (req, res) => {
    const output = {
      success: false,
      error: "",
      code: 0,
      data: {},
    };
    //用帳號撈會員資料
    const sql = "SELECT * FROM member WHERE account=?";
    const [r1] = await db.query(sql, [req.body.account]);

    if (!r1.length) {
      // 帳號錯誤
      output.code = 401;
      output.error = "帳密錯誤";
      return res.json(output);
    }
    //const row = r1[0];
    //密碼對比
    output.success = await bcrypt.compare(req.body.password, r1[0].pass_hash);
    if (!output.success) {
      // 密碼錯誤
      output.code = 402;
      output.error = "帳密錯誤";
    } else {
      // 成功登入
      //登入成功生成token
      const token = jwt.sign(
        {
          sid: r1[0].sid,
          account: r1[0].account,
          level: r1[0].level,
        },
        process.env.JWT_SECRET
      );

      output.data = {
        token,
        sid: r1[0].sid,
        account: r1[0].account,
        level: r1[0].level,
      };
    }

    res.json(output);
  });

//logout登出
app.get("/logout", (req, res) => {
  delete req.session.admin;
  res.redirect("/");
});

//loveyu router
const cartsData = require(__dirname + "/routes/cartsData");
app.use("/cartsData", cartsData);

// ------- static folder -----------
app.use(express.static("public"));
app.use("/bootstrap", express.static("node_modules/bootstrap/dist"));
app.use("/joi", express.static("node_modules/joi/dist"));
// ------- 404 ------------------------------------
app.use((req, res) => {
  res.send(`<h2>找不到頁面 404</h2>`);
});

app.listen(process.env.PORT, () => {
  console.log(`server started: ${process.env.PORT}`);
  console.log({ NODE_ENV: process.env.NODE_ENV });
});
