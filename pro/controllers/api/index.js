import express from "express";
import { loginValidation, registerValidation, errorMiddleware } from "../../middleware/validation/index.js"
import fs from "fs/promises";
import bcrypt from "bcrypt";
import config from "config";
// import token from "jwtwebtoken";

import randomString from "../../utils/randomString.js";
import generateToken from "../../middleware/auth/generateToken.js";


import StudentModel from "../../models/student/index.js";


const router = express.Router();


router.post( '/signup',registerValidation(), errorMiddleware,async (req, res) => {
        try {
            let { firstname, lastname, email, password,address, password2, SchoolName, Phone } = req.body;
            console.log(req.body);


            //if email of user already exist in db
            // let emailFound = fileData.find((ele) => ele.email == email);
            let emailFound = await StudentModel.findOne({ email: email });

            console.log(emailFound);

            if (emailFound) {
                return res
                    .status(409)
                    .json({ error: 'User Email Already Registered. Please Login' });
            }

            //if phone number already exist in db
            let phoneFound = await StudentModel.findOne({ Phone: Phone });
            // console.log(phoneFound,"on line 81")
            if (phoneFound) {
                return res
                    .status(409)
                    .json({ error: 'User Phone Already Registered. Please Login.' });
            }

            //Hashing the password
            password = await bcrypt.hash(password, 12); //applying 12 rounds of salt

            //making our own object to store in db
            let StudentData = { firstname, lastname, email, password,address, password2, SchoolName, Phone };

            // mongodb dat
            // add user_id to our userData object and tasks array
            // userData.user_id = randomString(16);

            StudentData.tasks = [];

            // userData.userVerified = {
            // 	phone: false,
            // 	email: false,
            // };
            
            let phoneToken = randomString(20);
            let emailToken = randomString(20);

            StudentData.userverifytoken = {
                phone: phoneToken,
                email: emailToken,
            };

            const Student = new StudentModel(StudentData);
            

            await Student.save();

            

            const Students_Data = new StudentModel();

            Students_Data.Student = Student._id;
            Students_Data.save();

            res.status(200).json({ success: "User Successfully Registered" });
            
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server error' });
        }
    }
);

/*
METHOD : POST
PUBLIC
API Endpoint : /Progress/login
Body : 
email
password 
*/

router.post('/login', loginValidation(), errorMiddleware, async (req, res) => {
	try {
		//destructuring from body
		let { email, password} = req.body;

		// fileData = JSON.parse(fileData);

		//email checking if exist in db
		let StudentFound = await StudentModel.findOne({"email":email});
        
		if (!StudentFound) {
			return res.status(401).json({ error: 'Invalid Credentials ' });
		}
       
		//checking hashed password matching with entered password
		let matchPassword = await bcrypt.compare(password, StudentFound.password);

		if (!matchPassword) {
			return res.status(401).json({ error: 'Invalid Credentials ' });
		}

       

		//GENERATE A JWT TOKEN
		let payload = {
			Student_id: StudentFound._id,
			role: 'Student',
		};

		//using auth middleware
		const token=generateToken(payload);

		//passing token in response
		res.status(200).json({ success: 'Login is Successful', token });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

router.get("/", (req, res) => {
    try {
        res.status(200).json({ "success": "Router GET is UP" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Interval Server Error" });

    }
})


export default router;