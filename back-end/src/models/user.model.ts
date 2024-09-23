import { model, Schema } from "mongoose";
import bcrypt = require("bcrypt");

interface IUser{
    _id: Schema.Types.ObjectId;
    firstname: String;
    lastname: String;
    email: String;
    password: String;
    role: String;
    phoneNumber?: String;
    profile_img? : { type: String,
        default: "https://images.unsplash.com/photo-1726487646639-ec039193792f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
    }
    address: String;
    updated_at: Date;
    created_at: Date;
}

const userSchema = new Schema<IUser>({
    firstname: {
        type: String,
        required: [true, " Please inter your firstname "], 
    },
    lastname: {
        type: String,
        // required: [true, " Please inter your lastname "], 
    },
    email: {
        type: String,
        unique: true,
        required: [true, " Please inter your email address"], 
    },
    password: {
        type: String,
        minlenght:[8, "Must be 8 numbers "],
        required: [true, "Please inter your password "], 
    },
    phoneNumber: Number, 
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    }, 
    profile_img :{
        type: String,
    },
    address:{
        type: String,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },

    created_at: {
        type: Date,
        default: Date.now,
    },
    
});

userSchema.pre('save', function (next) {
    if ( !this.isModified("password")) {
        next();
    }else{
        const hashedPassword = bcrypt.hashSync(this.password.toString(), 10);
        this.password = hashedPassword;
        next();
    }
})

const User = model("User", userSchema)

export default User;

