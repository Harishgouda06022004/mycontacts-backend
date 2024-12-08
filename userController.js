const asyncHandler=require("express-async-handler")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const User=require("../models/userModel")
//@desc Register a User
//@route Get /api/users
//@access public
const registerUser=asyncHandler(async(req,res)=>{
    const {username,email,password}=req.body;
    if(!username || !email || !password){
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    const userAvailable=await User.findOne({email})
    if(userAvailable){
        res.status(400)
        throw new Error("User already registered")
    }
    //create hash
    const hashedPassword=await bcrypt.hash(password,10)
    console.log("HashedPassword",hashedPassword)
    const user=await User.create({
        username,
        email,
        password:hashedPassword,
    })
    console.log(`user ${user}`)
    if(user){
        res.status(201).json({_id:user.id,email:user.email})
    }else{
        res.status(400)
        throw new Error("User data not available")
    }
    res.json({message:"Register the User"})
})
//@desc Login a User
//@route Get /api/users
//@access public
const loginUser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        res.status(404)
        throw new Error("All fiels are mandatory")
    }
    const user=await User.findOne({email})
    //comapre password and hashed password
    if(user &&(await bcrypt.compare(password,user.password))){
        const accessToken=jwt.sign({
            user:{
                username:user.username,
                email:user.email,
                id:user.id
            },
        },process.env.ACCESS_TOKEN_SECRET,
           {expiresIn:"15m"})

        res.status(200).json({accessToken})
    }
    else{
        res.status(401)
        throw new Error("Email or password is not valid")
    }
    res.json({message:"Login  User"})
})
//@desc Current a User
//@route Get /api/users
//@access public
const currentUser=asyncHandler(async(req,res)=>{
    res.json(req.user)
})
module.exports={registerUser,loginUser,currentUser}