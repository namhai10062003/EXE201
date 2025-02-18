import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { 
        type: String, 
        enum: ["admin", "employee", "user"], 
        default: "user" // Mặc định là "user" nếu không nhập
    },
    profileImage: { type: String },
    isAdmin: { type: Boolean, default: false },
    isDoctor: { type: Boolean, default: false },
    seenNotifications: { type: Array, default: [] },
    unseenNotifications: { type: Array, default: [] },
    createAT: { type: Date, default: Date.now },
    updateAT: { type: Date, default: Date.now },
    
});

const User = mongoose.model("User", userSchema);
export default User;
