import { useState } from 'react';
import '../css/NewPost/NewPost.css'; 
import { navigateStore } from '../store/navigateStore';
import { createNewPost } from '../lib/helper';

const NewPost = () => {
  const [formData, setFormData] = useState({
    title: '',
    img: null,
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file || file.size>2097152) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64Image = reader.result;
    setFormData({
      ...formData,
      "img": base64Image
    });
  };
};

  const {user, changePage, page, popPage} = navigateStore();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!user) return;
    if(page.at(-1)!=="create-majors" && page.at(-1)!=="create-minors") return ;
    
    const result = await createNewPost({...formData, author: user}, page.at(-1));
    console.dir(result)
    if(result.error) return;
    changePage("authors");
  };


  return (
    <div className="new-post-pg-container">
      <div className="author-content-go-back" onClick={popPage}><img src="../assets/back-arrow.png" alt="" /></div>


      <div className="new-post-container">
      <h2 className="form-title">Create New Post</h2>
      <form onSubmit={handleSubmit} className="new-post-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter the title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="img">Upload Image</label>
          <input
            type="file"
            id="img"
            name="img"
            accept="image/*"
            onChange={handleImageUpload}
            required
          />
         {formData.img ? <span>Selected &#9745;</span> : <span>No File Chosen</span>}
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            placeholder="Enter the description in 200 to 250 words"
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Publish Post
        </button>
      </form>
    </div>
    </div>
    
  );
};

export default NewPost;
