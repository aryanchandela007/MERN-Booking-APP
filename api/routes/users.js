import express from "express";
import {deleteUser, getAllUser, getUser, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router=express.Router();


//check authentication

router.get("/checkauthentication",verifyToken,(req,res,next)=>{
    res.send("hello user,you are logged in");
})
// verify user to perform operations

router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
    res.send("hello user,you are logged in and you can delete your account")
})

// verify for admin 
router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
    res.send("hello Admin,you are logged in and you can delete all accounts")
})
//UPDATE
router.put("/:id",verifyUser,updateUser)

//DELETE
router.delete("/:id",verifyUser,deleteUser)
//GET
router.get("/:id",verifyUser,getUser)
//GET ALL
router.get("/",verifyAdmin,getAllUser)



export default router;

/*
status 500 -> for Internal server Error
*/