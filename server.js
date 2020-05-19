const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;
const routes = require('./routes/api');
//connect mongo
//const MONGODB_URI='mongodb+srv://tubai1996:tubai1996@youtubedb-1y8kz.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mern_youtube',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected',()=>{
console.log('Mongoose is connected!!!');
});

//saving data to our mongo database
// data={
//     title:"Welcome to heaven",
//     body:"This is my first MERN stack project"
// };
// const newBlogPost = new BlogPost(data);//instance of model

//  newBlogPost.save((error)=>{
//     if(error)
//     {
//         console.log('OOPS something happend');
//     }    else     {
//         console.log('Data is stored in database');
//     }
// });


//.save()



//middleware and parsing every json data and url coming into server from react and make them available in req of (req,res)
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//HTTP request logger
app.use(morgan('tiny'));

app.use('/api',routes);

if(process.env.NODE_ENV=== 'production')
{
  app.use(express.static('client/build'));  
}
app.listen(PORT,console.log(`Server is starting at ${PORT}`));