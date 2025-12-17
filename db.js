 const mongoose = require("mongoose");
 require("dotenv").config();





 const Schema = mongoose.Schema;
 const ObjectId = mongoose.Types.ObjectId;

const userSchema =new Schema({
    email: {type:String, unique:true},
    password: String,
    firstName: String,
    lastName: String
})


const adminSchema =new Schema({
    email: {type:String, unique:true},
    password: String,
    firstName: String,
    lastName: String
})

const courseSchema =new Schema({
    title: String,description: String,
    price: Number,
    imageurl: String,
    creatorId: ObjectId
})

const purchaseSchema =new Schema({

    userId: ObjectId,
    courseId: ObjectId
})


const userModel =mongoose.model("user", userSchema);
const courseModel =mongoose.model("course", courseSchema);
const purchaseModel =mongoose.model("purchase", purchaseSchema);
const adminModel =mongoose.model("admin", adminSchema);

module.export = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}