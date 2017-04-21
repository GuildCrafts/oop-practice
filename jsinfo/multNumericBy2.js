let fee = { adult: 5, child: 10, title: "Entrance Fee"}



  function multiplyNumeric(obj) {
   for (let key in obj){
    if (typeof obj[key] == 'number'){
      obj[key] *= 2
    }
   }
  }
   //if value === num
   //mult value x


console.log(multiplyNumeric(fee))
//github
