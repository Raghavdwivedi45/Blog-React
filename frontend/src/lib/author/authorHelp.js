import axios from 'axios';

export const getAll = async () => {
    const result = await axios.get(`http://localhost:8080/api/auth/authors`);
    return result
}

export const getAllPosts = async (id) => {
    const result = await axios.get(`http://localhost:8080/api/auth/posts/${id}`);
    return result;
}

export const deletePost = async (id, type) => {
    const result = await axios.delete(`http://localhost:8080/api/${type}/${id}`, { withCredentials: true });
    const err = result.response?.data?.error;
    if(err) return {error: err};
    return result.data;
}

