import axios from 'axios';

export const getAll = async () => {
    const result = await axios.get(`http://localhost:8080/api/auth/authors`);
    return result
}

export const getAllPosts = async (id) => {
    const result = await axios.get(`http://localhost:8080/api/auth/posts/${id}`);
    return result;
}