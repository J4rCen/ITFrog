import { Router } from "express";
import citysRouter from "./routers/citysRouter";

const router: Router = Router()

router.use("/citys", citysRouter)

export default router