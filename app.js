const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config();
const app = express()

const { courseRoute } = require("./routes/course")
const { userRouter } = require("./routes/user");
const { adminRouter } = require("./routes/admin");

// routes

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRoute);



//ports

function main() {
    const dbURL = process.env.MONGO_URL

    mongoose.connect(dbURL)
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
        console.log(`SERVER STARTED ON PORT ${port}`);

    })
}


main()