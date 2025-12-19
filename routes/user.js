const { Router } = require("express");
const {userModel} = require("../db");
const bcrypt = require("bcrypt");
const userRouter = Router();
const {z} = require("zod");

const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD= "ksajdfl";




const signupSchema = z.object({
             email: z.string().max(100).email().min(5),
            password: z.string().min(5).max(100),
            firstName: z.string().min(3).max(100),
            lastName: z.string().min(3).max(100)
        });

userRouter.post("/signup",async function(req,res){
    try{
        const parsed = signupSchema.safeParse(req.body);

        if(!parsed.success){
            return res.status(400).json({
                message: "validation failed",
                errors: parsed.error.errors
            });
        }
        



    const{email,password,firstName,lastName} = parsed.data; // TODO: adding zod validation
    // TODO: hash the password sp plaintext pw is not stored in DB
    const hashedPassword = await bcrypt.hash(password,10);



        
        // TODO: put inside a try catch block
    await userModel.create({
       email,
       password: hashedPassword,
       firstName,
       lastName
    });
    res.json({
        message: "signup succeded"
    });
}catch(err){
    res.status(500).json({
        message: "user already exists or something went wrong"
    });
}
});


    userRouter.post("/signin", async function (req, res) {
    try {
        const { email, password } = req.body;

        // 1️⃣ Find user by email
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(403).json({
                message: "Incorrect credentials"
            });
        }

        // 2️⃣ Compare password
        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordCorrect) {
            return res.status(403).json({
                message: "Incorrect credentials"
            });
        }

        // 3️⃣ Generate JWT
        const token = jwt.sign(
            { id: user._id },
            JWT_USER_PASSWORD
        );

        // 4️⃣ Send token
        res.json({
            token
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Something went wrong"
        });
    }
});



    userRouter.get("/purchases", function(req,res){
        res.json({
            message: "signup endpoint"
        })
    })


module.exports= {
    userRouter : userRouter
}