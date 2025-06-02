import { useEffect, useState } from "react";
import "../../css/author/AuthorContent.css";
import { getAllPosts } from "../../lib/author/authorHelp";

const AuthorContent = ({ id }) => {



    useEffect(() => {
        const getPosts = async () => {
            const result = await getAllPosts(id);
            setPosts(result.data)
        }
        getPosts();
        return () => {};
    }, [])

    const [posts, setPosts] = useState([]);

    const deletePost = (idx) => {
        const id = posts[idx]._id;
        setPosts((posts) => posts.filter(obj => obj._id !== id));
    }


    return (
        <div className="auth-cont-container">
            {
                posts.map((post, idx) => {
                    return (
                        <div className="post">
                            <div className="post-info">
                                <div className="post-info-img">
                                    <img src={post.img} alt="" />
                                </div>
                                <div className="post-info-info">
                                    <h2 className="post-info-title">{post.title}</h2>
                                    <div className="post-info-description">{post.description}</div>
                                </div>
                            </div>

                            <div className="post-btns">
                                <button className="btn1">Add New Topic</button>
                                <button className="btn2" onClick={() => deletePost(idx)}>Delete {idx}</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AuthorContent