import { Router } from "express";
import UsersController from "../db/controllers/UsersController";

const userRouter = Router()

userRouter.get("/:name", async (req, rej) => {
    try {
        const userDate = await UsersController.getUserList(req.params.name)
        return rej.status(200).send(userDate)
    } catch (error) {
        console.error(error)
    }
})

userRouter.post("/addUser", async (req, rej) => {
    try {
        const status = await UsersController.addNewUser(req.body.userName)
        return rej.status(200).send(status)
    } catch (error) {
        console.error(error)
    }
})

userRouter.put("/updateList", async (req, rej) => {
    try {
        const status = await UsersController.updateOneUserList(req.body.userName, req.body.userList)
        return rej.status(200).send(status)
    } catch (error) {
        console.error(error)
        return rej.status(500).send(error)
    }
})

export default userRouter