 const {Schema, default: mongoose} = require("mongoose");

const userSchema = Schema({

})


const adminSchema = Schema({

})

const courseSchema = Schema({

})

const purchaseSchema = Schema({

})


const userModel =mongoose.model("user", userSchema);
const courseModel =mongoose.model("course", courseSchema);
const purchaseModel =mongoose.model("purchase", purchaseSchema);
const adminModel =mongoose.model("admin", adminSchema);