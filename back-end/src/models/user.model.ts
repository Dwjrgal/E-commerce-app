import { model, Schema } from "mongoose";

interface IUser{
    _id: Schema.Types.ObjectId;
    name: String;
    email: String;
    password: String;
    phoneNumber?: String;
    created_at: Date;
}

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: [true, " Please inter your username "], 
    },
    email: {
        type: String,
        required: [true, " Please inter your email address user name "], 
    },
    password: {
        type: String,
        minLenght:[8, ""],
        required: [true, "user name "], 
    },
    phoneNumber: Number, 
    created_at: {
        type: Date,
        default: Date.now,
    },
    
});

const User = model("User", userSchema)

export default User;

