import React, { useState } from 'react';
import '../css/NewPost/NewSubmajor.css';
import { navigateStore } from '../store/navigateStore';
import { createNewPost } from '../lib/helper';
import FormTop from './EditSubmajorComp/FormTop';
import DescriptionOptions from './EditSubmajorComp/DescriptionOptions';

const NewSubmajor = () => {
    const [formData, setFormData] = useState({
        idx: null,
        title: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const addTag = (str, para="") => {
        setFormData((formData) => ({
            ...formData,
            "description": formData.description + str
        }));
    };

    const { user, changePage, page, popPage } = navigateStore();
    const [submajorParts, setSubmajorParts] = useState([]);

    const addNewSection = () => {
        const nameOfSec = prompt("Name the Section");
        const newSec = React.createElement("section", { key: Date.now(), id: nameOfSec, dangerouslySetInnerHTML: { __html: formData.description }});
        setSubmajorParts((prev) => ([...prev, newSec]))
        setFormData((formData) => ({
            ...formData,
            "description": ""
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormData({
            idx: 0,
            title: '',
            description: '',
        })
        // if(!user) return;
        // if(!page.at(-1).startsWith("submajors")) return;
        // const result = await createNewPost({...formData, author: user}, page.at(-1));
        // if(result.error) return;
        // changePage("authors");
    };


    return (
        <div className="submajor-pg-container">
            <div className="author-content-go-back" onClick={popPage}><img src="../assets/back-arrow.png" alt="" /></div>


            <div className="submajor-container">
                
                <h2 className="submajor-form-title">Create New Post</h2>
                
                <form onSubmit={handleSubmit} className="submajor-form">
                    <FormTop formInfo={formData} handler={handleChange}/>

                    <DescriptionOptions addEmphasis={addTag}/>


                    <div className="submajor-form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description" name="description"
                            value={formData.description} onChange={handleChange}
                            required rows="6" 
                        ></textarea>
                    </div>

                    <button type="button" 
                    className="submajor-submit-btn"
                    onClick={addNewSection}
                    >
                    Add Section
                    </button>

                    <button type="submit" className="submajor-submit-btn">Publish Post</button>
                </form>
            </div>
            
            <div className="submajor-container">
                {
                submajorParts
                }
            </div>
        </div>

    );
};

export default NewSubmajor;
