function func1(callback){
    setTimeout(()=>{
        console.log("task1");
        callback()
    },3000)
}
function func2(){
    console.log("task2")
    console.log("task3")
    console.log("task4")
}
func1(func2)



function greet(name, callback) {
  callback(`Hello, ${name}`);
}

greet("Surafel", function(message) {
  console.log(message);
});


const studentGreet=(greet,callback)=>{
    callback(`"welcome ",${greet}`);
}

studentGreet("surafel",function(message){
    console.log(message)
})