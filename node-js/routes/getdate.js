var date = new Date();
const formatDate = (date)=>{
let formatted_date = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
 return formatted_date;
}
console.log(formatDate(date));
