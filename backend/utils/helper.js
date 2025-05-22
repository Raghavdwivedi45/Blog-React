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