const mongoose=require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    // token:{
    //     type: String,
    //     default:''
    // },
    role:{
        type: String,
        enum: ['creator', 'teacher', 'student'],
        // default: 'user'
    }
})

// creating a table for the above schema
const User = mongoose.model("User",userSchema);
module.exports = User;