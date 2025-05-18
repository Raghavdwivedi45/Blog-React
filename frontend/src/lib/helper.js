import axios from 'axios';

export const handleSignupLoginFormSubmit = async (signupType, formData) => {
    try{
        let endpoint = signupType=="login" ? "login" : signupType=="user" ? "/reader/signup" : "/author/signup";
        if(endpoint=="login") endpoint = formData.type ? "/author/login" : "/reader/login"

        const result = await axios.post(`http://localhost:8080/api/auth${endpoint}`, 
            formData, 
            { withCredentials: true }
        );
        if(result.error) return { error: result.response.data.error };

        return { success : result.data.success, _id: result.data._id };
    } 
    catch(err) {
        return { error : err };
    }
}

export const validateFormData = (formData, signupType) => {
    if(!formData.name) return { error: "Please enter name to submit" };
    if(signupType!=="login" && !formData.email) return { error: "Please enter email to submit" };
    if(!formData.password) return { error: "Please enter password to submit" };
    if(formData.password.length<6) return { error: "Password must not be less than 6 characters." };

    if(signupType=="author" && !formData.dob) return { error: "Please enter DOB to submit" };
    if(signupType=="author" && !formData.description) return { error: "Please enter description to submit" };

    return { success: "Successfully validated" };
}