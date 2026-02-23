const fetchdata=async()=>{
    try{
      const res= await fetch("https://jsonplaceholder.typicode.com/posts")
      const data = await res.json()
      console.log(data.slice(0,10))
    }
    catch(err){
       console.log(err)
    }

}
fetchdata()
