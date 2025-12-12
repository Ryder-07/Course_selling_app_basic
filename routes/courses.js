const {Router} = requier("express");

const courseRouter = Router();


    courseRouter.post("/course/purchase", function(req,res){
        res.json({
            message: "signup endpoint"
        })
    })



    courseRouter.get("/user/courses", function(req,res){
        res.json({
            message: "signup endpoint"
        })
    })

module.exports = {
    courseRoutes : courseRoutes
}