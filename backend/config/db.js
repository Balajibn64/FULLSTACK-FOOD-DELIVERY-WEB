import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://balajibn6464:GVYASziF8nZDuyLl@cluster0.ic9hf.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}
