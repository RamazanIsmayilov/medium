import { Request, Response } from "express"
import authService from "../services/auth.services"

const register = async (req: Request, res: Response) => {
    try {
        const profileImagePath = `http://localhost:3002/uploads/${req.file?.filename}`
        const newUser = await authService.register({
            ...req.body,
            profileImage: profileImagePath
        })
        res.status(201).json({ message: "User created succesfully", user: newUser })
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error })
    }
}

const login = async (req: Request, res: Response) => {
    try {
        const user = await authService.login(req.body)
        res.status(200).json({ user })
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error })
    }
}

const authController = {
    register,
    login
}

export default authController