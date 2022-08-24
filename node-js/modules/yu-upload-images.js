const db = require(__dirname + "/../modules/mysql-connect");

//上傳檔案模組化
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const extMap = {
    "image/jpeg": ".jpg",
    "image/png": ".png",
    "image/gif": ".gif",
};

function fileFilter(req, file, cb) {
    //file.mimetype 把上傳的檔案名稱丟進去 exymap-->檔案類型有對到會給字串
    //使用!!轉換成boolean

    cb(null, !!extMap[file.mimetype]);
    //錯誤回傳空,extMap[file.mimetype]轉布林只要回傳true
}

//存在磁碟
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        //cb callback function  錯誤先行,要存的位置
        //dirname 這隻檔案位置
        cb(null, __dirname + "/../public/yuimgs");
    },
    filename: function (req, file, cb) {
        //決定檔名
        //uuidv4(套件)+副檔名
        const filename = uuidv4() + extMap[file.mimetype];
        cb(null, filename);
    },
    // function (req, res){
    //     const sql =
    //     "INSERT INTO `member`(`avatar`) VALUES (?)";
    //     const { avatar } = filename;
    //     // const [result] = db.query(sql, [avatar]);
    //     db.query(sql, [req.file.filename], function(err, result) {
    //         console.log('inserted 88 data');
    //      });
        
    //     res.json(result);
    // },
});


//index 設定圖片路徑
module.exports = multer({ fileFilter, storage });
