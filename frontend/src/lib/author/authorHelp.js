import axios from 'axios';

let base = "https://articleversebackend3.vercel.app/";

export const getAll = async () => {
    const result = await axios.get(`${base}/api/auth/authors`);
    return result
}

export const getMyAuthor = async (id) => {
    const result = await axios.get(`${base}/api/auth/authors/${id}`);
    return result
}

export const getAllPosts = async (id) => {
    const result = await axios.get(`${base}/api/auth/posts/${id}`);
    return result;
}

export const deletePost = async (id) => {
    const result = await axios.delete(`${base}/api/majors/${id}`, { withCredentials: true });
    const err = result.response?.data?.error;
    if(err) return {error: err};
    return result.data;
}

