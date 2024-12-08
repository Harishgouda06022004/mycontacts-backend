const mongoose=require("mongoose")
const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:[true,"please add user name"],
    },
    email:{
        type:String,
        required:[true,"please add user Email adress"],
        unique:[true,"Email adress already taken"]
    },
    password:{
        type:String,
        required:[true,"please add user password"],
        
    },
},{
    timestamps:true
})
module.exports=mongoose.model("User",userSchema)