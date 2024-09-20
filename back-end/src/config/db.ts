import mongoose from "mongoose";

 export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://dwjrgl651:s5MfhAn3W9ld3NZo@ecommerce-fullstack.shbty.mongodb.net/?retryWrites=true&w=majority&appName=Ecommerce-fullstack");

        console.log ("Database connected");
    } catch (error) {
        console.log ("Database cannot connect")
    }

}


