const {Router} = require ("express")
const adminRouter = Router();
const {adminModel} = require("../db")

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

    adminRouter.post("/", (req, res) => {
        res.json({
            message: "admin can add course"
        })
    })

    adminRouter.put("/", (req, res) => {
        res.json({
            message: "admin can update course"
        })
    })

    adminRouter.get("/bulk", (req, res) => {
        res.json({
            message: "admin can view course"
        })
    })

module.exports ={
    adminRouter: adminRouter
}