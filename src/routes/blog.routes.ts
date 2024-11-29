import { Router } from "express"
import validationMiddleware from "../middleware/validation.middelware"
import blogController from "../controllers/blog.controllers"
import blogValidation from "../validations/blog.validations"

const blogRoutes = Router()

blogRoutes.post("/", validationMiddleware(blogValidation.blog), blogController.addBlog)

export default blogRoutes