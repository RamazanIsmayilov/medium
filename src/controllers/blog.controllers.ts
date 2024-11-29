import { Request, Response } from "express"
import blogServices from "../services/blog.services";

const addBlog = async (req: Request, res: Response) => {
    try {
        const newBlog = await blogServices.addBlog(req.body);
        const populatedBlog = await newBlog.populate("user", "userName firstName lastName profileImage -_id");
        res.status(201).json({ message: "Blog created succesfully", populatedBlog })
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
}


const blogController = {
    addBlog
}

export default blogController