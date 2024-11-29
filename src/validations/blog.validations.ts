import Joi, { ObjectSchema } from "joi";

const blog: ObjectSchema = Joi.object({
    title: Joi.string().min(3).max(100).required(), 
    description: Joi.string().min(3).max(500).required(),  
    user: Joi.string().hex().length(24).required() 
});

const blogValidation = {
    blog
}

export default blogValidation;
