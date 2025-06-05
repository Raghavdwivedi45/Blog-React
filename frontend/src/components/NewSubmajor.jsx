import { useEffect, useRef, useState } from 'react';
import '../css/NewPost/NewSubmajor.css';
import { navigateStore } from '../store/navigateStore';
import FormTop from './EditSubmajorComp/FormTop';
import DescriptionOptions from './EditSubmajorComp/DescriptionOptions';
import { postSubmajor } from '../lib/major/helpMajor';
import { majorStore } from '../store/majorStore';

const NewSubmajor = () => {
    const [formData, setFormData] = useState({
        idx: 0,
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

    const addTag = (str) => {
        setFormData((formData) => ({
            ...formData,
            "description": formData.description + " " + str
        }));
    };

    const { user, popPage } = navigateStore();
    const [submajorParts, setSubmajorParts] = useState([]);
    const {majorInfo, setMajorInfo} = majorStore();
    const [sectionIds, setSectionIds] = useState([]);
    const descShow = useRef();
    
    
    
    const addNewSection = () => {
        if(formData.description?.length===0) return;
        setSubmajorParts((prev) => ([...prev, formData.description]))
        setFormData((formData) => ({...formData, "description": ""}));
    }

    useEffect(() => {
        let str = ""
        for(const s of submajorParts) str += s;
        descShow.current.innerHTML = str;
    }, [submajorParts])

    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if(formData.title.length===0 || formData.description.length===0 || !user ) return;
        const subObj = {
            idx: formData.idx,
            title: formData.title,
            description: formData.description,
            secIds : sectionIds
        }
        console.log(majorInfo);
        console.log("obj=", subObj);
        // const res = await postSubmajor(majorInfo, subObj);
        // console.log(res);
        setMajorInfo(null);
        // popPage();
        // setFormData({ idx: 0, title: '', description: ''})
        
    };


    return (
        <div className="submajor-pg-container">
            <div className="author-content-go-back" onClick={popPage}><img src="../assets/back-arrow.png" alt="" /></div>

            <div className="submajor-container">
                <h2 className="submajor-form-title">Create New Post</h2>
                
                <form onSubmit={handleSubmit} className="submajor-form">
                    <FormTop formInfo={formData} handler={handleChange}/>

                    <DescriptionOptions addEmphasis={addTag} setIds={setSectionIds} />

                    <div className="submajor-form-group">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" name="description" rows="6" value={formData.description} onChange={handleChange}></textarea>
                    </div>

                    <button type="button" className="submajor-submit-btn" onClick={addNewSection}>Add Section</button>
                    <button type="submit" className="submajor-submit-btn">Publish Post</button>
                </form>
            </div>
            
            <div className="submajor-container" ref={descShow}>
                <h2 className='submajor-container-preview'>Preview</h2>
                { submajorParts }
            </div>
        </div>

    );
};

export default NewSubmajor;
