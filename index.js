const express = require("express");
const {createUserRoutes} = require("./user");
const {createCourseRoutes} = require("./courses");

const app = express();

createUserRoutes(app);





app.listen(3000);