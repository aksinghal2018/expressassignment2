const express=require('express')
const PORT=8899
const router=express.Router()
const fs=require('fs')
const history=require('history')
router.use(express.json())
router.use(express.urlencoded({extended:false}))
router.get('/getpost',(req,res)=>{
    console.log("a")
    const data=JSON.parse(fs.readFileSync('Data/post.json',{root:'.'}))
    res.json({err:"0",pdata:data})
})
router.post('/addpost',(req,res)=>{
    const pname=req.body.pname
    const pdesc=req.body.pdesc
    const date=new Date()
    const data1=JSON.parse(fs.readFileSync('Data/post.json',{root:'.'}))
    const dataadded={"id":data1.length,"post":pname,"postdesc":pdesc,"date":date.getTime()}
   // console.log(dataadded)
    data1.push(dataadded)
    fs.writeFileSync('Data/post.json',JSON.stringify(data1))
    res.json({err:"0",pdata:data1})
    //res.redirect("/")
})
router.get('/update/:id',(req,res)=>{
    var pname=""
    var pdesc=""
    const id=req.params.id
    const data1=JSON.parse(fs.readFileSync('Data/post.json',{root:'.'}))
    //console.log(data1)
    data1.map((item,index)=>{
        //console.log(data1.id==id.toString())
        if(item.id==id.toString()){
            //console.log(item)
            pname=item.post
            pdesc=item.postdesc
        }
    })
   // console.log(pdesc)
    res.redirect(`https://newpostserver.herokuapp.com/update/${id}/${pname}/${pdesc}`)
})
router.put('/updatepost',(req,res)=>{
    const pname=req.body.pname
    const pdesc=req.body.pdesc
    const id =req.body.id
    const date=new Date()
    const data1=JSON.parse(fs.readFileSync('Data/post.json',{root:'.'}))
    data1.map((item,index)=>{
        if(item.id==id.toString()){
                  item.post=pname
            item.postdesc=pdesc
            item.date=date.getTime()
        }
    })
    fs.writeFileSync('Data/post.json',JSON.stringify(data1))
    res.json({err:"0",pdata:data1})
})
router.delete('/deletepost/:id',(req,res)=>{
    const pname=""
    const pdesc=""
    const id =req.params.id
    var indexdata=-1
    const data1=JSON.parse(fs.readFileSync('Data/post.json',{root:'.'}))
    data1.map((item,index)=>{
        if(item.id==id.toString()){
            indexdata=index
        }
    })
    data1.splice(indexdata,1)
    fs.writeFileSync('Data/post.json',JSON.stringify(data1))
    res.json({err:"0",pdata:data1,message:"Delete Data Successfully."})
})

module.exports=router;