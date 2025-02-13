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
<<<<<<< HEAD
    isAdmin: { type: Boolean, default: false },
    isDoctor: { type: Boolean, default: false },
    seenNotifications: { type: Array, default: [] },
    unseenNotifications: { type: Array, default: [] },
    createAT: { type: Date, default: Date.now },
    updateAT: { type: Date, default: Date.now },
    
=======
    createAT: { type: Date, default: Date.now },
    updateAT: { type: Date, default: Date.now },
>>>>>>> 30f841b091f7a2d444928781372046aeef050d22
});

const User = mongoose.model("User", userSchema);
export default User;
