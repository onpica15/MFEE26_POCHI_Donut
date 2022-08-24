const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router(); // 建立 router 物件
const db = require(__dirname + "/../modules/mysql-connect");
const yuupload = require(__dirname + "/../modules/yu-upload-images");
const { toDateString, toDatetimeString } = require(__dirname +
    "/../modules/date-tools");
const nodemailer = require("nodemailer");

//註冊會員
router.post("/add", async (req, res) => {
    // if(! req.session.admin){
    //     return res.redirect('/');
    // }
    // const schema = Joi.object({
    //     name: Joi.string()
    //         .min(3)
    //         .required()
    //         .label('姓名必填'),
    //     email: Joi.string()
    //         .email()
    //         .required(),
    //     mobile: Joi.string(),
    //     birthday: Joi.any(),
    //     address: Joi.string(),
    // });
    // 自訂訊息
    // https://stackoverflow.com/questions/48720942/node-js-joi-how-to-display-a-custom-error-messages

    // console.log( schema.validate(req.body, {abortEarly: false}) );
    const sql =
        "INSERT INTO `member`(`account`, `pass_hash`, `birthday`, `email`, `level`, `creat_at`) VALUES (?,?,?,?,0,NOW())";
    const { account, pass_hash, birthday, email } = req.body;
    // const saltRounds = 10;
    // const myPlaintextPassword = "s0//P4$$w0rD";
    var hash = await bcrypt.hash(pass_hash, 10);
    // bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
    //     // Store hash in your password DB.
    // });
    const [result] = await db.query(sql, [account, hash, birthday, email]);

    res.json(result);
});
//撈取現在資料庫資料
router.get("/memberdata", async (req, res) => {
    //撈會員資料表資料
    const loaddata = `SELECT sid, account, pass_hash, birthday, email, mobile, address, avatar, level, creat_at FROM member WHERE sid=${res.locals.payload.sid}`;
    //撈訂單筆數
    const loadpohistory = `SELECT * FROM cart_orders WHERE member_sid=${res.locals.payload.sid}`;
    const [r3] = await db.query(loadpohistory);
    if (r3.length >= 3) {
        const inserlevel3 = `UPDATE member SET level=3 WHERE member.sid =${res.locals.payload.sid}`;
        const [r1] = await db.query(inserlevel3);
        const reloaddata = `SELECT sid, account, pass_hash, birthday, email, mobile, address, avatar, level, creat_at FROM member WHERE sid=${res.locals.payload.sid}`;
        const [r2] = await db.query(reloaddata);
        r2.forEach((el) => (el.birthday = toDateString(el.birthday)));
        res.json(r2[0]);
    } else {
        //load 會員資料
        const [r2] = await db.query(loaddata);
        //轉換日期
        r2.forEach((el) => (el.birthday = toDateString(el.birthday)));
        // r2 [
        //     {
        //       sid: 1,
        //       account: '1',
        //       pass_hash: '$2b$10$R9mDXPmN3UDyH2hR2YT.duxZrp.zSozPkO2GPsAwq7QNHx0EsTkzq',
        //       name: '',
        //       birthday: '2022-09-02',
        //       email: '',
        //       mobile: '',
        //       address: '',
        //       avatar: '20cb0354-fa06-400c-a829-5bdf60894c6f.jpg',
        //       level: 2,
        //       creat_at: 2022-07-28T02:11:49.000Z
        //     }
        //   ]
        // const result = { ...r2[0], pocount: r3.length };
        // console.log('result',result);
        res.json(r2[0]);
    }



});
//修改會員資料
router.post("/memberupdate", async (req, res) => {
    //先確認現在會員等級
    const sqllevelcheck = `SELECT  level FROM member WHERE sid=${res.locals.payload.sid}`;
    const [resultcheck] = await db.query(sqllevelcheck);
    if (resultcheck[0].level > 2) {
        const sql = `UPDATE member SET account=?, birthday=?,email=?,mobile=?,address=? WHERE sid=${res.locals.payload.sid}`;
        const { account, birthday, email, mobile, address } = req.body;
        const [result] = await db.query(sql, [
            account,
            birthday,
            email,
            mobile,
            address,
        ]);
        const loaddata = `SELECT account, birthday, email, mobile, address FROM member WHERE sid=${res.locals.payload.sid}`;
        const [r2] = await db.query(loaddata);
        r2.forEach((el) => (el.birthday = toDateString(el.birthday)));
        console.log("updatedata", r2);
        res.json(r2);
    } else {
        const sql = `UPDATE member SET account=?, birthday=?,email=?,mobile=?,address=?,level=2 WHERE sid=${res.locals.payload.sid}`;
        const { account, birthday, email, mobile, address } = req.body;
        const [result] = await db.query(sql, [
            account,
            birthday,
            email,
            mobile,
            address,
        ]);
        //date-tools 轉日期
        const loaddata = `SELECT account, birthday, email, mobile, address FROM member WHERE sid=${res.locals.payload.sid}`;
        const [r2] = await db.query(loaddata);
        r2.forEach((el) => (el.birthday = toDateString(el.birthday)));
        console.log("result", r2);
        res.json(r2);
    }
});
//上傳頭貼
router.post("/yuupload", yuupload.single("avatar"), async (req, res) => {
    //先確認現在會員等級
    const sqllevelcheck = `SELECT  level FROM member WHERE sid=${res.locals.payload.sid}`;
    const [resultcheck] = await db.query(sqllevelcheck);
    if (resultcheck[0].level > 1) {
        const sql = `UPDATE member SET avatar =? WHERE member.sid =${res.locals.payload.sid}`;
        db.query(sql, [req.file.filename], function (err, result) {
            console.log("inserted 88 data");
        });

        res.json(req.file);
    } else {
        const sql = `UPDATE member SET avatar =?, level=1 WHERE member.sid =${res.locals.payload.sid}`;
        console.log(res.locals.payload.sid);
        db.query(sql, [req.file.filename], function (err, result) {
            console.log("inserted 88 data");
        });
        console.log('req', req.file)
        res.json(req.file);
    }
});
//修改密碼
router.post("/membersdupdate", async (req, res) => {
    const output = {
        success: false,
    };
    const oldpsd = `SELECT  pass_hash FROM member WHERE sid=${res.locals.payload.sid}`;
    const [oldpsdfromdb] = await db.query(oldpsd);
    const { psdOld, psdNew } = req.body;
    //密碼對比
    // console.log(oldpsd, oldpsdfromdb[0].pass_hash);
    output.success = await bcrypt.compare(psdOld, oldpsdfromdb[0].pass_hash);
    // console.log("output.success", output.success);
    //對比正確後新密碼寫入db
    if (output.success === true) {
        // console.log('1');
        const sql = `UPDATE member SET pass_hash =? WHERE member.sid =${res.locals.payload.sid}`;
        var hash = await bcrypt.hash(psdNew, 10);
        const [querydone] = await db.query(sql, [hash]);
        const result = { ...querydone, success: true };
        // console.log('result',result);
        res.json(result);
    } else {
        // console.log('2');
        // console.log('output',output);
        output.success = false;
        res.json(output);
    }
});
//忘記密碼-email驗證
router.post("/checkmail", async (req, res) => {
    const output = {
        success: false,
    };
    const sql = "SELECT * FROM member WHERE email=?";
    const [r2] = await db.query(sql, [req.body.email]);
    // console.log("r2", r2[0].email);
    const { email } = req.body;
    if (!r2.length) {
        // console.log("2");
        // console.log("output", output);
        output.success = false;
        res.json(r2);
    } else {
        // console.log("1");
        //資料庫寫入驗證碼
        const insertnumber = `UPDATE member SET valid=7542 WHERE member.email="${r2[0].email}"`;
        const [r3] = await db.query(insertnumber, [req.body.email]);

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            auth: {
                user: "pochidonuts@gmail.com",
                pass: 'yglzvsuefzmrecsc',

            },
        });
        //信件內容!!!!
        var options = {
            //寄件者
            from: "pochidonuts@gmail.com",
            //收件者
            to: r2[0].email,
            //副本
            // cc: 'account3@gmail.com',
            //密件副本
            // bcc: 'account4@gmail.com',
            //主旨
            subject: "Pochi屋-忘記密碼驗證信", // Subject line
            //純文字
            text: " ", // plaintext body
            //嵌入 html 的內文
            html: "<h3>Pochi屋-忘記密碼驗證信</h3> <p>請輸入此段驗證碼:7542</p>",
            //附件檔案
        };

        // 信件發送!!!
        transporter.sendMail(options, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("訊息發送: " + info.response);
            }
        });

        const result = { ...r2, success: true };
        res.json(result);
    }
});
//忘記密碼-驗證碼認證
router.post("/checkvalid", async (req, res) => {
    const output = {
        success: false,
    };

    const sql = "SELECT * FROM member WHERE email=?";
    const { email, valid } = req.body;
    const [r1] = await db.query(sql, [email]);
    console.log("r1", r1[0].valid);
    if (r1[0].valid == valid) {
        console.log("對比正確");
        const result = { ...r1, success: true };
        res.json(result);
    } else {
        console.log("對比失敗");
        res.json(r1);
    }
});
//忘記密碼-輸入新一組密碼寫入資料庫
router.post("/checkvalidtochangepsd", async (req, res) => {
    const output = {
        success: false,
    };
    console.log('body',req.body);
    const updatepsd = `UPDATE member SET pass_hash=? WHERE email=?`;
    const { email, psdNew } = req.body;
    var hash = await bcrypt.hash(psdNew, 10);
    const [querydone] = await db.query(updatepsd, [hash, email]);
    const result = { ...querydone, success: true };
    res.json(result);
});

//拿取歷史訂單
router.get("/memberhistory", async (req, res) => {
    const loaddataa = `SELECT sid,  created_at,  pay_price, total_quantity FROM cart_orders WHERE member_sid=${res.locals.payload.sid}`;

    // console.log('sid',res.locals.payload.sid);
    const [r2] = await db.query(loaddataa);

    console.log('r2', r2);
    res.json(r2);
});

module.exports = router;
