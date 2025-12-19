const { Router } = require("express");
const {adminModel} = require("../db");
const adminRouter = Router();
const bcrypt = require("bcrypt");
const {z} = require("zod");

const jwt = require("jsonwebtoken");





const signupSchema = z.object({
             email: z.string().max(100).email().min(5),
            password: z.string().min(5).max(100),
            firstName: z.string().min(3).max(100),
            lastName: z.string().min(3).max(100)
});

// adminRouter.use(adminMiddleware);


    adminRouter.post("/signup",async function(req,res){
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
    await adminModel.create({
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
        message: "admin already exists or something went wrong"
    });
}});









adminRouter.post("/signin",async function(req,res){
        try {
        const { email, password } = req.body;

        // 1️⃣ Find admin by email
        const admin = await adminModel.findOne({ email });

        if (!admin) {
            return res.status(403).json({
                message: "Incorrect credentials"
            });
        }

        // 2️⃣ Compare password
        const isPasswordCorrect = await bcrypt.compare(
            password,
            admin.password
        );

        if (!isPasswordCorrect) {
            return res.status(403).json({
                message: "Incorrect credentials"
            });
        }

        // 3️⃣ Generate JWT
        const token = jwt.sign(
            { id: admin._id },
            JWT_ADMIN_PASSWORD
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








    adminRouter.post("/course", function(req,res){
        res.json({
            message: "signin endpoint"
        })
    })


    adminRouter.put("/course", function(req,res){
        res.json({
            message: "signin endpoint"
        })
    })


    adminRouter.get("/course/bulk", function(req,res){
        res.json({
            message: "signin endpoint"
        })
    })


module.exports= {
    adminRouter : adminRouter
}