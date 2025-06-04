import { useEffect, useState } from "react";
import "../../css/author/AuthorContent.css";
import { getAllPosts, deletePost, addSubmajor } from "../../lib/author/authorHelp";
import { majorStore } from "../../store/majorStore";
import { navigateStore } from "../../store/navigateStore";

const AuthorContent = ({ id }) => {
    
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const result = await getAllPosts(id);
            setPosts(result.data)
        }
        getPosts();
        return () => {};
    }, [])

    const handleDeletePost = async (idx) => {
        const id = posts[idx]._id;
        if(!id) return;
        const del = await deletePost(id, "majors");
        if(del.error) return;
        setPosts((posts) => posts.splice(idx, 1));
    }


    const handleAddSubmajor = async (idx) => {
        const id = posts[idx]._id;
        if(!id) return;
        const add = await addSubmajor(id);
        // if(del.error) return;
        // setPosts((posts) => posts.splice(idx, 1));
    }

    const {setMajorInfo} = majorStore();
    const {changePage} = navigateStore();

    return (
        <div className="auth-cont-container">
            {
                posts.map((post, idx) => {
                    return (
                        <div className="post" key={post._id}>
                            <div className="post-info" onClick={() => { changePage("majors"); setMajorInfo(post); }}>
                                <div className="post-info-img">
                                    <img src={post.img} alt="" />
                                </div>
                                <div className="post-info-info">
                                    <h2 className="post-info-title">{post.title + ", "}</h2>
                                    <div className="post-info-description">{post.description}</div>
                                </div>
                            </div>

                            <div className="post-btns">
                                <button className="btn1" onClick={() => changePage(`submajors-${post._id}`)}>Add New Topic</button>
                                <button className="btn2" onClick={() => handleDeletePost(idx)}>Delete</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AuthorContent