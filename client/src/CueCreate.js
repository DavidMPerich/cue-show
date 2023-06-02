import React, { useState } from 'react';
import axios from 'axios';

const CueCreate = () => {
    const [maker, setMaker] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post('http://cues.com/cues/create', {
            maker
        });

        setMaker('');
    };

    return (
        <div className='PostCreate'>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label>Maker</label>
                    <input
                        value={maker}
                        onChange={e => setMaker(e.target.value)}
                        className='form-control'
                    />
                </div>
                <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    );
};

export default CueCreate;