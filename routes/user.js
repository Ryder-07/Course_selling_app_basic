const { Router } = require("express");
const {userModel} = require("../db");
const userRouter = Router();


    userRouter.post("/signup",async function(req,res){
        const{email,password,firstname,lastName} = req.body; // TODO: adding zod validation
        // TODO: hash the password sp plaintext pw is not stored in DB

        // TODO: put inside a try catch block
        await userModel.create({
            email,
            passowrd,
            firstname,
            lastName
        })
        res.json({
            message: "signup succeded"
        })
    })


    userRouter.post("/signin", function(req,res){
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