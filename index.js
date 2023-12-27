require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("Hello world");
})

app.get('/youtube',(req,res)=>{
    res.send("we are in Youtube page");
})

app.get('/instagram',(req,res)=>{
    res.send("we are in instagram page");
})



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})