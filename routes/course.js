const {Router} = require ("express")

const courseRoute = Router();

    courseRoute.post("/purchase", (req, res) => {
        res.json({
            message: "purchase course"
        })
    })

    courseRoute.get("/preview", (req, res) => {
        res.json({
            message: "courses"
        })
    })


module.exports = {
    courseRoute: courseRoute
}