import { Router } from "express";
import CitysContoller from "../db/controllers/CitysContoller";

const citysRouter = Router()

citysRouter.get("/get", async (_, rej) => {
    try {
        const citysPull = await CitysContoller.getCity()
        return rej.status(200).send(citysPull)
    } catch (error) {
        return rej.status(500).send(error)
    }
})

citysRouter.post("/add", async (req, rej) => {
    try {
        const status = await CitysContoller.addCity(req.body.city)
        return rej.status(200).send(status)
        
    } catch (error) {
        return rej.status(500).send(error)
    }
})

citysRouter.post("/del", async (req, rej) => {
    try {
        const status = await CitysContoller.delCity(req.body.city)
        return rej.status(200).send(status)
    } catch (error) {
        return rej.status(500).send(error)
    }
})

export default citysRouter