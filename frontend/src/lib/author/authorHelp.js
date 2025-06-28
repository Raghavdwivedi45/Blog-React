import axios from 'axios';

export const getAll = async () => {
    const result = await axios.get(`http://localhost:8080/api/auth/authors`);
    return result
}

export const getMyAuthor = async (id) => {
    const result = await axios.get(`http://localhost:8080/api/auth/authors/${id}`);
    console.log(result)
    return result
}

export const getAllPosts = async (id) => {
    const result = await axios.get(`http://localhost:8080/api/auth/posts/${id}`);
    return result;
}

export const deletePost = async (id) => {
    const result = await axios.delete(`http://localhost:8080/api/majors/${id}`, { withCredentials: true });
    const err = result.response?.data?.error;
    if(err) return {error: err};
    return result.data;
}

