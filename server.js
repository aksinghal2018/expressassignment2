const express=require('express')
const PORT=8899
const app=express()
const cors =require('cors')
const morgan=require('morgan')
const multer=require('multer')
app.use(cors())
app.use(morgan('dev'))
app.use(express.static('uploads'))
const postroutes=require('./routes/postRoutes')
app.use('/api/post/',postroutes)
// app.listen(process.env.PORT || 3000, function(){
//     console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
//   });

app.listen(PORT,(err)=>{
  if (err) throw err
  console.log(`Work on Port ${PORT}`)
})