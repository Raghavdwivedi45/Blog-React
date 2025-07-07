import axios from 'axios';

const base = "https://articleversebackend3.vercel.app";
// let base = "http://localhost:8080";


export const getAllMajors = async (postType) => {
    const result = await axios.get(`${base}/api/${postType}`); 
    if(result.data.error) return {"error" : "Internal error"};
    return result.data;
}

export const getSubmajor = async (id, idx) => {
    try {
        const num1 = Number(idx);
        if(!num1 && num1!==0) return "Invalid idx";
        const result = await axios.get(`${base}/api/majors/${id}/sub/${idx}`); 
        return result.data;
    } catch(err) {
        return {"error" : err.response.data.error}
    }
}

export const postSubmajor = async (id, submajor, type) => {
    try{
        const result = await axios.post(`${base}/api/${type}/submajor/${id}`, submajor, { withCredentials: true });

        return result.data;
    } catch(err) {
        return {error: err.response.data.error};
    }
}

export const likeInc = async (id, val) => {
    try{
        const result = await axios.patch(`${base}/api/majors/likes/${id}`, {value:val}, { withCredentials: true });
        return result.data;
    } catch(err) {
        return {error: err.response.data.error};
    }
}

export const postComment = async (id, msg) => {
    try{
        const result = await axios.patch(`${base}/api/majors/comments/${id}`, {msg}, { withCredentials: true });
        return result.data;
    } catch(err) {
        return err.response.data;
    }
}

export const isCommented = async (majorId) => {
    try{
        const result = await axios.get(`${base}/api/majors/comment/${majorId}`, { withCredentials: true });
        return result.data;
    } catch(err) {
        return err.response.data;
    }
}

export const MyMajorInfo = async (majorId) => {
    try{
        if(!majorId || majorId==="undefined") return;
        const result = await axios.get(`${base}/api/majors/${majorId}`, { withCredentials: true });

        return result.data;
    } catch(err) {
        return err.response.data;
    }
}


export const MyMinorInfo = async (id) => {
    try{
        if(!id) return;
        const result = await axios.get(`${base}/api/minors/${id}`, { withCredentials: true });
        return result.data;
    } catch(err) {
        return err.response.data;
    }
}


export const deleteMyComment = async (majorId) => {
        await axios.delete(`${base}/api/majors/comment/${majorId}`, { withCredentials: true })
}