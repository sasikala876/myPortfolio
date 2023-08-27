const express = require ("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());


const cors = require("cors");
app.use(cors());

const port = 4000;

//db connection
mongoose.connect ("mongodb+srv://sasikala:sasiS123@cluster0.a0ubm.mongodb.net/Portfolio?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true},(err) => {
if(!err){
    console.log("db connected");
}
else{
     console.log("error");
}})
        
//SCHEMA
const mySchema = {
    id:Number,
    name:String,
    designation:String,
    image:String,
    image2:String,
    bio:String
}

const monmodel = mongoose.model("profile",mySchema);

//post
app.post("/post",async(req,res)=>{
    console.log("inside post");

    const data = new monmodel ({
        id:req.body.id,
        name:req.body.name,
        designation:req.body.designation,
        image:req.body.image,
        image2:req.body.image2,
        bio:req.body.bio
        })
         
    const val = await data.save();
    res.json(val);
})

//fetch by id
app.get("/fetch/:id",function(req,res){
    console.log("inside fetchById");
    getid=req.params.id

    monmodel.find(({id:getid}),function(err,val){
    if(err){
        res.send("err");
    }
    else{
        if(val.length==0){
            res.send("data doesn't exist");
        }
        else{
             res.send(val);
        }
    }
    })
})
               
    
//fetch all
app.get("/fetchall",(req,res)=>{
    console.log("inside fetchAll");
    monmodel.find((err,val)=>{
        if(err){
            console.log("err in getting the data");
        }
        else{
            res.json(val);
        }
    })
})

//update
// app.put("/update/:id",async(req,res)=>{
//     console.log("inside update");
//     let upid = req.params.id;
//     let upname = req.body.name;
//     let updesignation = req.body.designation;
//     let upimage = req.body.image;
//     let upimage2 = req.body.image2;
//     let upbio = req.body.bio;

//     monmodel.findOneAndUpdate({id:upid},{$set:{name:upname,designation:updesignation,image:upimage,image2:upimage2,bio:upbio}},{new:true},(err,data)=>{
//         if(err){
//             res.send("error");
//         }
//         else{
//             if(data == null){
//                  res.send("nothing found");
//             }
//             else{
//                 res.send(data);
//             }
//         }
//     })
// })

//delete
app.delete("/delete/:id",async(req,res) => {
    let delid = req.params.id;

    monmodel.findOneAndDelete(({id:delid}),(err,data)=>{
        if(err){
            res.send("error");
        }
        else{
            if(data == null){
                res.send("wrong id");
            }
            else{
                res.send("deleted");
            }
        }
        })
    })

    
app.listen(port,()=>{
     console.log("On port 4000");
 })






