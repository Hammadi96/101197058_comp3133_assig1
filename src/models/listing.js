import mongoose from "mongoose";
export const listing = mongoose.model("listing", {
    listing_id: String,
    listing_title: String,
    description: String,
    street: String,
    city: String,
    postal_code: String,
    price: String,
    email: String,
    username: String
})
