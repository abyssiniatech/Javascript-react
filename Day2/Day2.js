console.log(x) //these is undefind because before declaration no excution found these is excutoion context
var x=100;
let y=12;
const addTwoNum=(num1,num2)=>{
    const sum = num1+num2
    return sum
}
const val=addTwoNum(x,y)
console.log(val)