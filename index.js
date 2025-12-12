const express = require("express");
const {createUserRoutes} = require("./routes/user");
const {createCourseRoutes} = require("./routes/courses");

const app = express();


app.user("/user",userRouter);
app.user("/course",courseRouter); 

createUserRoutes(app);
createCourseRoutes(app);




app.listen(3000);