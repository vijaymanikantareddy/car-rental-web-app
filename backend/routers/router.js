const express = require('express')
const router = express.Router()
const book = require('../model/book')



router.post('/postdata', async(req,res)=>{
    let books;
    try{
        books = new book({
            clg:req.body.send.name,
            building:req.body.send.building,
            location:req.body.send.location,
            dateofcomplaint: req.body.send.dateofcomplaint,
            ctype: req.body.send.ctype,
            workpriority: req.body.send.workpriority,
            description: req.body.send.description,
            remark: req.body.send.remark
        })
        await books.save()
    }catch (err){
        console.log(err)
    }
    if(!books){
        return res.status(500).json({msg:"Someting went wrong"})
    }
    return res.status(200).json({books})
})


module.exports= router;