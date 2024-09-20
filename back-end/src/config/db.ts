import mongoose from "mongoose";

 export const connectDB = async ( uri: string) => {
    try {
          const con = await mongoose.connect(uri);
          console.log ("Database connected", con.connection.host);

        console.log ("Database connected");
    } catch (error) {
        console.log ("Database cannot connect")
    }

}


