const express=require('express')
const PORT=8899
const app=express()
const cors =require('cors')
app.use(cors({
    origin: `https://newpostapp.herokuapp.com/`,
    credentials: true
}))
const postroutes=require('./routes/postRoutes')
app.use('/api/post/',postroutes)
app.listen(PORT,(err)=>{
    if(err) throw err
    console.log(`Work on port ${PORT}`)
})