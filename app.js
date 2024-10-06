const express = require("express")
const app = express()

const { courseRoute } = require("./routes/course")
const { userRouter } = require("./routes/user");
const { adminRouter } = require("./routes/admin");

// routes

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRoute);



//ports
const port = 3000
app.listen(port, () => {
    console.log(`SERVER STARTED ON PORT ${port}`);

})