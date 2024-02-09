import AuthRouter from "./auth.router.js";
import express from "../apps/express.js";

const router = express.Router()

router.use(AuthRouter)

export default router