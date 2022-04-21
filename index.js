const { response } = require("express")
const express = require("express")
const cors = require("cors")
const app = express()
const port = 3000
app.use(cors({
    origin: '*'
}));
const API = require("./services/api")

const api = new API
app.get("/", async(req, res)=>{
    const posts = []
    for(let i = 0 ; i <= 10; i++){
      const userData = await api.getUser()
      const dataDucks =  await api.getDucks()  
      const post = {
          image: dataDucks,
          usee: userData
      }
      posts.push(post)
    }
    
    res.send(posts)
})

app.listen(port, ()=>{
    console.log("Ya esta")
})