import Joi, { ObjectSchema } from "joi";

const register: ObjectSchema = Joi.object({
    userName: Joi.string().min(3).max(15).required(),
    firstName: Joi.string().min(3).max(15).alphanum().required(),
    lastName: Joi.string().min(3).max(15).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(15).required(),
});

const login: ObjectSchema = Joi.object({
    userName: Joi.string().min(3).max(15).required(),
    password: Joi.string().min(3).max(15).required()
});

const authValidation = {
    register,
    login
}

export default authValidation