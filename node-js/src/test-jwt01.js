require("dotenv").config();

const jwt = require("jsonwebtoken");

const token = jwt.sign({ id: 04, account: "willow" }, process.env.JWT_SECRET);
// console.log(process.env.JWT_SECRET);
console.log(token);



//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiYWNjb3VudCI6IndpbGxvdyIsImlhdCI6MTY1ODMwMjUzM30.eF7zbP4fdUVlvKflPmnkNxKC3mQMsm0tgNcoX2-rkZ4