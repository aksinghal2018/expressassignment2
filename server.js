const express=require('express')
const PORT=8899
const app=express()
const cors =require('cors')
app.use(cors())
const postroutes=require('./routes/postRoutes')
app.use('/api/post/',postroutes)
app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });