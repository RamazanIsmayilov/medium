import authModels from "../models/auth.models";
import blogModels from "../models/blog.models"

const addBlog = async (params: any) => {
    const userExists = await authModels.findById(params.user);
    if (!userExists) {
        throw new Error("User not found");
    }
    
    const newBlog = new blogModels(params)
    await newBlog.save()
    return newBlog
}

const blogServices = {
    addBlog
}

export default blogServices