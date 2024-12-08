const asyncHandler=require("express-async-handler")
const Contact=require("../models/contactmodels")
//@desc Get all contacts
//@route Get /api/contacta
//@access private
const getContacts=asyncHandler(async(req,res)=>{
    const contacts=await Contact.find({user_id:req.user.id})
    res.status(200).json(contacts)
})
//@desc Create New contacts
//@route Post /api/contacta
//@access private
const createContact=asyncHandler(async(req,res)=>{
    console.log("The request body is",req.body)
    const{name,email,phone}=req.body
    if(!name || !email ||!phone){
        res.status(404)
        throw new Error("All fields are mandatoey")
    }
    const contact=await Contact.create({
        name,
        email,
        phone,
        user_id:req.user.id,
    })
    res.status(200).json(contact)
})
//@desc Get New contacts
//@route Get /api/contacta:id
//@access private
const getContact=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found")
    }
    res.status(200).json(contact)
})
//@desc Update New contacts
//@route update /api/contacta:id
//@access private
const updateContact=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("contact not found")
    }
    if(contact.user_id.toString()!==req.user.id){
        res.status(403)
        throw new Error("User dont have permisssion to update other user Contact")
    }
    const updatedContact=await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
   
    res.status(200).json(updatedContact)
})
//@desc Delete New contacts
//@route Delte /api/contacta:id
//@access private
const deleteContact=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("Conatct not found")
    }
    if(contact.user_id.toString()!==req.user.id){
        res.status(403)
        throw new Error("User dont have permisssion to Delete other user Contact")
    }
    await Contact.findByIdAndDelete(req.params.id)
    res.status(200).json(contact)
})
module.exports={getContacts,createContact,getContact,updateContact,deleteContact}