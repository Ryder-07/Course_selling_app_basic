 const mongoose = require("mongoose");


 mongoose.connect(process.env.CONNECTION_STRING)
   .then(() => console.log("🔥 Mongo Connected Successfully"))
   .catch((e) => console.log("❌ Mongo Connection Error:", e));

   
 const schema = mongoose.schema;
 const ObjectId = mongoose.Types.ObjectId;

const userSchema = Schema({
    email: {type:String, unique:true},
    password: String,
    firstName: String,
    lastName: String
})


const adminSchema = Schema({
    email: {type:String, unique:true},
    password: String,
    firstName: String,
    lastName: String
})

const courseSchema = Schema({
    title: String,description: String,
    price: Number,
    imageurl: String,
    creatorId: ObjectId
})

const purchaseSchema = Schema({

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