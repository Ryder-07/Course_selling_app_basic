

function createCourseRoutes(app) {
app.post("/course/purchase", function(req,res){
    res.json({
        message: "signup endpoint"
    })
})



app.get("/user/courses", function(req,res){
    res.json({
        message: "signup endpoint"
    })
})
}

module.exports = {
    createCourseRoutes : createCourseRoutes 
}