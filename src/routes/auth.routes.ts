import { Router } from "express"
import authController from "../controllers/auth.controllers"
import authValidation from "../validations/auth.validations"
import validationMiddleware from "../middleware/validation.middelware"
import upload from "../middleware/upload.middleware"

const authRoutes = Router()

authRoutes.post("/register", upload.single("profileImage"), validationMiddleware(authValidation.register), authController.register)
authRoutes.post("/login", validationMiddleware(authValidation.login), authController.login)

export default authRoutes