const Promise2=new Promise((resolve,reject)=>{
    // throw new Error("server is not found")
    let isRun=true;
    if(isRun){
      resolve("congratulation you are login")
    }
    else{
        reject("sorry you are Login these web")
    }
})

Promise2.then((message)=>{
     console.log(message)
})
Promise2.catch((error)=>{
    console.log("these is the async default fucntion",error)
})