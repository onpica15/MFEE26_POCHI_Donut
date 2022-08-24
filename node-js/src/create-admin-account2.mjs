import bcrypt  from 'bcryptjs';

const hash = await bcrypt.hash("sdfsdfsdfsdfsdfsdfsdfsf", 10);

console.log({hash})







