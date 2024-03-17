import express from "express"
import core from "cors"
import mongoose from "mongoose";
import connectDB from "./db/connectDB";
import bodyParser from "body-parser";
import router from "./router";
import UsersController from "./db/controllers/UsersController";

async function startServer() {
    try {
        const server = express();
        const PORT = 3001;
        
        server.use(core())
        server.use(bodyParser.json({ type: 'application/json' }))
        server.use(bodyParser.urlencoded({
            extended: false,
        }))

        connectDB()

        server.use("/api", router)

        mongoose.connection.once("open", () => {
            console.log("Connect")
        })

        server.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })

    } catch (error) {
        console.error(error)
    }
}

startServer()