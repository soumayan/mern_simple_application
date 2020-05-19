const express = require('express');

const router = express.Router();
const BlogPost = require('../models/blogPost');
//Routes
router.get('/',(req,res)=>{
    // const data={
    //     username :'accimeesterlin',
    //     age : 5
    // };
    
BlogPost.find({  })
.then((data)=>{
    console.log('Data:',data);
    res.json(data);//sending data to user from database
})
.catch((error)=>{
 console.log('error:',daerrorta);
});

});
//react app sending data to server
router.post('/save',(req,res)=>{
    //this req is getting data or body due to express parsing of incoming data
    const data = req.body;

    //new instance of model and storing data
    const newBlogPost = new BlogPost(data);
    //.save() the data
    newBlogPost.save((error)=>{
       if(error){
           res.status(500).json({msg:'sorry , internet server error'});
           return;
       } 
           //BlogPost
         return  res.json({msg:'Your data has been saved!!' });   
       
    });
     
      
    
});

router.get('/name',(req,res)=>{
    const data={
        username :'peterson',
        age : 5
    };
    res.json(data);
});

module.exports = router;