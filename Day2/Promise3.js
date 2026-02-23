// example of 

const promis1=new Promise((resolve,reject)=>{
    let loading=false;
    if(loading){
        resolve("congratulation you are correct")
    }
    else{
        reject("can't run these code")
    }
})
promis1.then(message=>{
    console.log(message);
})

promis1.catch(error=>{
    console.log(`somthing happend ${error}`)
})

const p=document.createElement("p");
p.style.color="white";
p.textContent="The first paragraph"
const newDiv=document.createElement("div");
newDiv.append(document.body)
p.append(newDiv)