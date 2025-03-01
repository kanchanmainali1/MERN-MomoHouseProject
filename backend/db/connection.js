const mongoose=require('mongoose')


const connect = async()=>{

    try{
        await mongoose.connect("mongodb://localhost:27017/MomoHouseDatabase")

        console.log("Database connection established")
    }
    catch(e){
        console.log("Error connecting to database")
    }
   
}

module.exports = connect