import { useState } from 'react';
import './Blogs.scss';

const AddNewBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmitBtn = () => {
        // if(title === '' || title === nul || title === undefined)
        // tuong duong voi dong tren
        if(!title) {
            alert('empty title') 
            return;
        }

        if(!content) {
            alert('empty content') 
            return;
        }
        
        console.log('check data', title, content)
    }

    return (
        <div className="add-new-container">
            <div className="text-add-new">---Add new blogs---</div>
            <div className="inputs-data">
                <label>Title: </label>
                <input 
                    type="text" 
                    value={title} 
                    onChange={(event) => setTitle(event.target.value)}
                />
            </div>
            <div className="inputs-data">
                <label>Content: </label>
                <input 
                    type="text" 
                    value={content} 
                    onChange={(event) => setContent(event.target.value)}
                />
            </div>
            <button className="btn-add-new" onClick={handleSubmitBtn}>Submit</button>
        </div>
    )
}

export default AddNewBlog;