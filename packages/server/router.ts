import { Router } from "express";
import citysRouter from "./routers/citysRouter";
import userRouter from "./routers/userRouter";

const router: Router = Router()

router.use("/citys", citysRouter)
router.use("/user", userRouter)

export default router