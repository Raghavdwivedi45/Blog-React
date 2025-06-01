import axios from 'axios';

export const getAllMajors = async () => {
    const result = await axios.get(`http://localhost:8080/api/majors`); // , { withCredentials: true }
    return result

}