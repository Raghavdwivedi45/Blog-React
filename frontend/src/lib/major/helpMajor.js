import axios from 'axios';

export const getAllMajors = async () => {
    const result = await axios.get(`http://localhost:8080/api/majors`); // , { withCredentials: true }
    return result

}

export const postSubmajor = async (id, submajor) => {
    try{
        const result = await axios.post(`http://localhost:8080/api/majors/submajor/${id}`, { withCredentials: true });
        const err = result.response?.data?.error;
        if(err) return {error: err};
        return result.data;
    } catch(err) {
        return {error: err};
    }
}