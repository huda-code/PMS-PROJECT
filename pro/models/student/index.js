import mongoose from "mongoose";


const StudentSchema = new mongoose.Schema({
    firstname: {
        type: String,
        maxlength: 25,
        minlength: 2,
        required: true
    },
    lastname: {
        type: String,
        maxlength: 25,
        minlength: 2,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    phone: {
        type: String,
        default: false
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        maxlength: 500
    },
    schoolname: {
        type: String,
        maxlength: 500
    },
    userverified: {
        email: {
            type: Boolean,
            default: false
        },
        phone: {
            type: String,
            default: false
        }
    },
    userverifytoken: {
        email: {
            type: String,
            default:false
        },
       
    },
    passwordresettoken: {
        type: String,
        default: null
    },
    isSuspended: {
        type: Boolean,
        default: false
    }
});

export default mongoose.model("Student", StudentSchema, "student");