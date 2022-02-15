import mongoose from "mongoose";
export const user = mongoose.model("user", {
    username: String,
    firstname: String,
    lastname: String,
    password: String,
    email: String,
    type: String
})
