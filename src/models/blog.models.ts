import { Document, model, Schema } from "mongoose";

interface BlogType extends Document {
    title: string;
    description: string;
    user: Schema.Types.ObjectId;
}

const blogSchema = new Schema<BlogType>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
})

export default model<BlogType>("Blog", blogSchema)