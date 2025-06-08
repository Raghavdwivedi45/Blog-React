import axios from 'axios';

export const getAllMajors = async () => {
    const result = await axios.get(`http://localhost:8080/api/majors`); // , { withCredentials: true }
    return result

}

export const postSubmajor = async (id, submajor) => {
    try{
        const result = await axios.post(`http://localhost:8080/api/majors/submajor/${id}`, submajor, { withCredentials: true });
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