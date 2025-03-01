const mongoose=require ('mongoose')

const userSchema =mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phone:{
        type:String,
        required: true,
        unique:true,

    },
    password:{
        type:String,
        required: true,
        unique:true,

    },
    role:{

   type:String,
    enum:['admin','customer'],
    default:'customer',

    },
    
},{
    timestamps: true,
})
const userModel= mongoose.model("User", userSchema)
module.exports=userModel
