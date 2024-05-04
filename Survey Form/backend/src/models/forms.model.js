import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    question_one:{
        type: String,
        required: true
    },
    question_two:{
        type: String,
        required: true
    },
    imagePath:{
        type: String,
        required: true
    }

});

const User = mongoose.model('User', userSchema);

export default User;
