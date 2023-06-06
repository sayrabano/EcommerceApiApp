
//require library
const mongoose = require("mongoose");

//connect to the databse
mongoose.connect('mongodb+srv://sayrabano8888:mdOZ2NqcyHBeFGBe@cluster0.zwczm6d.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true
})

//acquire the connection (to check if it is successfull)
const db = mongoose.connection;

//error
db.on('error',console.error.bind(console,'Error while Connecting to mongoDB..'));

//up and running 
db.once('open',()=>{
    console.log('Successfully Connected to Database..');
});
module.exports=db;
