import axios from 'axios';

export const getAllMajors = async (postType) => {
    const result = await axios.get(`http://localhost:8080/api/${postType}`); 
    if(result.data.error) return {"error" : "Internal error"};
    return result.data;
}

export const postSubmajor = async (id, submajor, type) => {
    try{
        const result = await axios.post(`http://localhost:8080/api/${type}/submajor/${id}`, submajor, { withCredentials: true });
        return result.data;
    } catch(err) {
        return {error: err.response.data.error};
    }
}

export const likeInc = async (id, val) => {
    try{
        const result = await axios.patch(`http://localhost:8080/api/majors/likes/${id}`, {value:val}, { withCredentials: true });
        return result.data;
    } catch(err) {
        return {error: err.response.data.error};
    }
}

export const postComment = async (id, msg) => {
    try{
        const result = await axios.patch(`http://localhost:8080/api/majors/comments/${id}`, {msg}, { withCredentials: true });
        return result.data;
    } catch(err) {
        return err.response.data;
    }
}

export const isCommented = async (majorId) => {
    try{
        const result = await axios.get(`http://localhost:8080/api/majors/comment/${majorId}`, { withCredentials: true });
        return result.data;
    } catch(err) {
        return err.response.data;
    }
}

export const MyMajorInfo = async (majorId, type="majors") => {
    try{
        if(!majorId || majorId==="undefined") return;
        const result = await axios.get(`http://localhost:8080/api/${type}/${majorId}`, { withCredentials: true });
        return result.data;
    } catch(err) {
        return err.response.data;
    }
}

export const deleteMyComment = async (majorId) => {
        await axios.delete(`http://localhost:8080/api/majors/comment/${majorId}`, { withCredentials: true })
}