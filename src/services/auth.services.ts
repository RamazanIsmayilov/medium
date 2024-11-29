import authModel from "../models/auth.models"
import bcrypt from "bcryptjs"
import tokenUtils from "../utils/jwt.utils"

const register = async (params: any) => {
    const existUser = await authModel.findOne({
        $or: [
            {
                username: params.userName
            },
            {
                email: params.email
            }
        ]
    })

    if (existUser) throw new Error("username or email already exists")
    const hashedPassword = await bcrypt.hash(params.password, 10);
    const newUser = new authModel({
        ...params,
        password: hashedPassword,
    })
    await newUser.save()
    return newUser
}

const login = async (params: any) => {
    const user = await authModel.findOne({
        userName: params.userName
    })
    if (!user) throw new Error("username or password is not valid")

    const checkPassword = await bcrypt.compare(params.password, user.password)
    if (!checkPassword) throw new Error("username or password is not valid");

    const token = tokenUtils.encodePayload({ userId: params._id })

    return { token, user }
}

const authService = {
    register,
    login
}

export default authService