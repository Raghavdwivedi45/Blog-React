export const handleSignupLoginFormSubmit = (page, formData) => {
    if(!formData.name) return { error: "Please enter name to submit" };
    if(!formData.email) return { error: "Please enter email to submit" };
    if(!formData.password) return { error: "Please enter password to submit" };

    if(page=="author" && !formData.dob) return { error: "Please enter DOB to submit" };
    if(page=="author" && !formData.description) return { error: "Please enter description to submit" };

    // if(page=="login")
}