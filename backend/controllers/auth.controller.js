import { tokenJWT, validateFormData } from "../utils/helper.js";
import bcrypt from "bcryptjs";
import Author from "../models/author.model.js";
import Reader from "../models/reader.model.js";

export const handleSignup = async (req, res) => {
    const formData = req.body;
    const signupType = formData.description ? "author" : "reader"; 
    const validation = validateFormData(formData, signupType);
    if (validation.error) return res.status(400).json({ error: validation.error });

    const model = signupType === "author" ? Author : Reader;

    try {
        const existingUser = await model.findOne({ email: formData.email });
        if (existingUser) {
            return res.status(409).json({ error: "Email already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(formData.password, salt);
        if (!hashedPassword) {
            return res.status(500).json({ error: "Error hashing password" });
        }

        const newUser = new model({
            name: formData.name,
            email: formData.email,
            password: hashedPassword,
        });

        if (signupType === "author") {
            newUser.description = formData.description;
            newUser.dateOfBirth = new Date(formData.dob);
        }

        await newUser.save();
        const result = tokenJWT({ userId: newUser._id });
        if (result.error) return res.status(500).json({ error: "Token generation failed" });

        res.cookie("jwt", result, {
            expires: new Date(Date.now() + 1*24*60*60*1000),
            httpOnly: true,
            // sameSite: 'None', //uncomment at time of production
            // secure: true,
        })

        return res.status(201).json({ 
            _id: newUser._id,
            success: "Successfully registered the user"
        });
    } catch (error) {
        console.error("Signup error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};


export const handleLogin = async (req, res) => {
    const{ name, password } = req.body;
    try {
        const model = req.body.type ? Author : Reader;
        const user = await model.findOne({ name });
        if(!user) return res.status(400).json({ error: "Invalid credentials" });

        const isPassCorrect = await bcrypt.compare(password, user.password);
        if(!isPassCorrect) return res.status(400).json({ error: "Invalid credentials" });

        const result = tokenJWT({userId: user._id});
        if(result.error) res.status(401).json({error: "Error in JWT"});

        res.cookie("jwt", result, {
            expires: new Date(Date.now() + 1*24*60*60*1000), // 1 day
            httpOnly: true,
            // sameSite: 'None', //uncomment at time of production
            // secure: true,
        })

        res.status(200).json({ 
            _id: user._id,
            success : "Logged in successfully" 
        });
    } catch(err) {
        console.log("Error in login controller ", err.message);
        res.status(500).json({ error: err.message });
    }
}
