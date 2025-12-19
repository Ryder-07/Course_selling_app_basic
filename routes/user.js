const { Router } = require("express");
const {userModel} = require("../db");
const userRouter = Router();
const {z} = require("zod");


    userRouter.post("/signup",async function(req,res){
        const{email,password,firstname,lastName} = req.body; // TODO: adding zod validation
        // TODO: hash the password sp plaintext pw is not stored in DB

        // TODO: put inside a try catch block
        await userModel.create({
            email: z.string().max(100).email().min(5),
            password: z.string().min(5).max(100),
            firstname: z.string().min(3).max(100),
            lastName: z.string().min(3).max(100)
        })
        res.json({
            message: "signup succeded"
        })
    })


    userRouter.post("/signin", function(req,res){
        const {email , password} = req.body;


        const user = userModel.find({
            email: email,
            password: password 

        })
        res.json({
            message: "signin endpoint"
        })
    })


    userRouter.get("/purchases", function(req,res){
        res.json({
            message: "signup endpoint"
        })
    })


module.exports= {
    userRouter : userRouter
}