const mongoose = require('mongoose')


const {DBUSER,DBPASSWORD,DBNAME} = process.env
//const MONGODB_URI = `mongodb+srv://${DBUSER}:${DBPASSWORD}@cluster0.6e8zntc.mongodb.net/${DBNAME}`
const MONGODB_URI = `mongodb+srv://e1752521771:erick200011@cluster0.0uhzbdj.mongodb.net/`

connection = async()=>{
    try {
         await mongoose.connect(MONGODB_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
        console.log("Database is connected")
    } catch (error) {
        console.log(error);
    }
}

module.exports = connection