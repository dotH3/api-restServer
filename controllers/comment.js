const {request, response} = require('express');
const Comment = require('../models/comment')

const commentPost=(req=request,res=response)=>{
    const {content, id} = req.body;
    //if
    const comment = new Comment({content});
    res.json
}

module.exports={commentPost}