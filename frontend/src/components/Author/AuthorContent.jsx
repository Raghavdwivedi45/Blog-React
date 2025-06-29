import { useEffect, useState } from "react";
import "../../css/author/AuthorContent.css";
import { getAllPosts, deletePost } from "../../lib/author/authorHelp";
import { majorStore } from "../../store/majorStore";
import { navigateStore } from "../../store/navigateStore";
import { authorStore } from "../../store/authorStore";
import { useNavigate } from "react-router-dom";

const AuthorContent = ({ id }) => {
    
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getPosts = async () => {
            const result = await getAllPosts(id);
            setPosts(result.data)
        }
        getPosts();
        return () => {};
    }, [])

    const handleDeletePost = async (id) => {
        if(!id) return;
        const del = await deletePost(id);
        if(del.error) return;
        setPosts((posts) => [...posts.filter(item => item._id !== id)]);
    }

    const {setMajorInfo} = majorStore();
    const {changePage, user} = navigateStore();
    const {authorInfo} = authorStore();

    return (
        <div className="auth-cont-container">
            {
                posts.map((post, idx) => {
                    if(post.type==="Minor") return "";
                    return (
                        <div className="post" key={post._id}>
                            <div className="post-info" onClick={() => { setMajorInfo(post); navigate(`/majors/${post._id}`); }}>
                                <div className="post-info-img">
                                    <img src={post.img} alt="" />
                                </div>
                                <div className="post-info-info">
                                    <h2 className="post-info-title">{post.title}</h2>
                                    <div className="post-info-description">{post.description}</div>
                                </div>
                            </div>

                            {(user && user==authorInfo._id) && <div className="post-btns">
                                <button className="btn1" onClick={() => { navigate(`/majors/${post._id}/sub`); }}>Add New Topic</button>
                                <button className="btn2" onClick={() => handleDeletePost(post._id)}>Delete</button>
                            </div>}
                        </div>
                    )
                })
            }

            {
                posts.map((post, idx) => {
                    if(post.type==="Major") return "";
                    return (
                        <div className="post" key={post._id}>
                            <div className="post-info" onClick={() => { setMajorInfo(post); navigate(`/minors/${post._id}`); }}>
                                <div className="post-info-img">
                                    <img src={post.img} alt="" />
                                </div>
                                <div className="post-info-info">
                                    <h2 className="post-info-title">{post.title}</h2>
                                    <div className="post-info-description">{post.description}</div>
                                </div>
                            </div>

                            {
                            (user && user==authorInfo._id) && <div className="post-btns">
                                <button className="btn1" onClick={() => { navigate(`/minors/${post._id}/sub`); }}>Edit Post</button>
                                <button className="btn2" onClick={() => handleDeletePost(post._id)}>Delete</button>
                            </div>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AuthorContent