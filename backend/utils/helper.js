import jwt from "jsonwebtoken";

export const validateFormData = (formData, signupType) => {
    if(!formData.name) return { error: "Please enter name to submit" };
    if(!formData.password) return { error: "Please enter password to submit" };
    if(formData.password.length<6) return { error: "Password must not be less than 6 characters." };
    if(signupType==="login") return;
    
    if(!formData.email) return { error: "Please enter email to submit" };
    if(signupType=="author" && !formData.dob) return { error: "Please enter DOB to submit" };
    if(signupType=="author" && !formData.description) return { error: "Please enter description to submit" };

    return { success: "Successfully validated" };
}


export const tokenJWT = (userId) => {
    try {
        const token = jwt.sign(userId, 
                      process.env.JWT_KEY, 
                      { expiresIn: '1d' } // expires in 1 day
        );  
        return {token};
    }
    catch(error) {
        return { error };
    }
}


export const isLoggedIn = (req, res) => {
    if(!req.cookies["jwt"]) return res.status(501).json({error : "You must be logged in before this action"})
    const {token} = req.cookies["jwt"];
    if(!token) return res.status(501).json({error : "You must be logged in before this action"})
    
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    res.status(201).json(decoded);
}

export const validateDesc = ({description}) => {
    const wordCount = description.trim().split(/\s+/).length;
    if(wordCount>250) return {error: "Description should be smaller than 250 words"};
    return {success: "Validated Successfully"}
} 