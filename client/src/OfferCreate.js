import React, { useState } from 'react';
import axios from 'axios';

const OfferCreate = ({ cueId }) => {
    const [content, setContent] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post(`http://cues.com/cues/${cueId}/offers`, {
            content
        });

        setContent('');
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label>New Offer</label>
                    <input
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        className='form-control'
                    />
                </div>
                <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    );
};

export default OfferCreate;
