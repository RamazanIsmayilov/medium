import { model, Schema } from "mongoose";

interface AuthType extends Document {
    userName: string;
    firstName: string;
    lastName: string;
    profileImage: string;
    email: string;
    password: string;
}

const authSchema = new Schema<AuthType>({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

export default model<AuthType>("User", authSchema)