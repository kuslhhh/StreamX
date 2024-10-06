const {Router} = require ("express")
const adminRouter = Router();


    adminRouter.post("/signup", (req, res) => {
        res.json({
            message: "signup endpoint"
        })
    })

    adminRouter.post("/signin", (req, res) => {
        res.json({
            message: "signin endpoint"
        })
    })

    adminRouter.post("/course", (req, res) => {
        res.json({
            message: "admin can add course"
        })
    })

    adminRouter.put("/course", (req, res) => {
        res.json({
            message: "admin can update course"
        })
    })

    adminRouter.get("/course", (req, res) => {
        res.json({
            message: "admin can view course"
        })
    })

module.exports ={
    adminRouter: adminRouter
}