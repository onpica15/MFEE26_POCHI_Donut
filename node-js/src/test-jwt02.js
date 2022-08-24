require('dotenv').config();

const jwt = require('jsonwebtoken');


const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiYWNjb3VudCI6IndpbGxvdyIsImlhdCI6MTY1ODMwMjUzM30.eF7zbP4fdUVlvKflPmnkNxKC3mQMsmasdadaddad0tgNcoX2-rkZ4';


jwt.verify(token, process.env.JWT_SECRET, (error, decoded)=>{
    if(error){
        console.log({error});
    }
    console.log(decoded);
    process.exit();
});
