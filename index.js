const express = require("express");
const mongoose = require("mongoose");

const {userRouter} = require("./routes/user");
const {courseRouter} = require("./routes/courses");
const {adminRouter} = require("./routes/admin");

const app = express();


app.use("/user",userRouter);
app.use("/admin",adminRouter);
app.use("/course",courseRouter); 


async function main(){
    await mongoose.connect(process.env.CONNECTION_STRING)
       .then(() => console.log("🔥 Mongo Connected Successfully"))
       .catch((e) => console.log("❌ Mongo Connection Error:", e));
    app.listen(3000);

}


main()
