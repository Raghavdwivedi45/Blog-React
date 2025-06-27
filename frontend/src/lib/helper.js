import axios from 'axios';

export const handleSignupLoginFormSubmit = async (signupType, formData) => {
    try{
        let endpoint = signupType=="login" ? "login" : "signup";

        const result = await axios.post(`http://localhost:8080/api/auth/${endpoint}`, 
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
    if(!formData.password) return { error: "Please enter password to submit" };
    if(formData.password.length<6) return { error: "Password must not be less than 6 characters." };
    if(signupType==="login") return { success: "Successfully validated" };
    
    if(!formData.email) return { error: "Please enter email to submit" };
    if(signupType=="author" && !formData.dob) return { error: "Please enter DOB to submit" };
    if(signupType=="author" && !formData.description) return { error: "Please enter description to submit" };

    return { success: "Successfully validated" };
}

export const logout = async () => {
    try{
        const result = await axios.get(`http://localhost:8080/api/auth/logout`, { withCredentials: true });
        if(result.data.success) return { success : "Logged Out Successfully" };
        return { error: "Internal Error" }; 
    } 
    catch(err) {
        return { error : err };
    }
}

export const checkLogin = async () => {
    try{
        const result = await axios.get(`http://localhost:8080/api/auth/isLoggedIn`, { withCredentials: true });
        if(result.data.error) return { error: "Internal Error" }; 
        return result;
    } 
    catch(err) {
        return err.response?.data || {error : "Login failed"} ;
    }
}

export const createNewPost = async (postObj, page) => {
  try {
    const res = await axios.post(`http://localhost:8080/api/${page.substring(7)}`, postObj, { withCredentials: true });
    return res.data;
  } catch (err) {
    return { error: err.response?.data?.error || "Unknown error" };
  }
};

// export const addNewSubmajor = async (postObj, page) => {
//     try{
//         const type = page.substring(7);
//         const result = await axios.post(`http://localhost:8080/api/${type}`, postObj, {  withCredentials: true });
//         if(result.data.error) return { error: "Internal Error" }; 
//         return result;
//     } 
//     catch(err) {
//         return { error : err };
//     }
// }