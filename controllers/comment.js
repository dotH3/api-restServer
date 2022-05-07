const {request, response} = require('express');


const commentPost = async(req=request, res=response)=>{
    console.log("lol");
    res.json({
        "msg":"-_-"
    })
};

module.exports={
    commentPost
};