import mongoose from "mongoose";

//This is Main User Schema
// this is only for changes. 
const StudentSchema = new mongoose.Schema({
    usertype: {
        type: String,
        default: "user" //This assigns default value user
    },
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
    Phone: {
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
    SchoolName: {
        type: String,
        maxlength: 500
    },
    userverified: {
        email: {
            type: Boolean,
            default: false
        },
        Phone: {
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

export default mongoose.model("Student", StudentSchema, "Student");