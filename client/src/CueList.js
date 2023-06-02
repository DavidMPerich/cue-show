import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OfferCreate from './OfferCreate';
import OfferList from './OfferList';

const CueList = () => {
    const [cues, setCues] = useState({});

    const fetchCues = async () => {
        const res = await axios.get('http://cues.com/cues');
        setCues(res.data);
    };

    useEffect(() => {
        fetchCues();
    }, []);

    const renderedCues = Object.values(cues).map(cue => {
        return (
            <div
                className='card'
                style={{ width: '30%', marginBottom: '20px' }}
                key={cue.id}
            >
                <div className='card-body'>
                    <h3>{cue.maker}</h3>
                    <OfferList offers={cue.offers} />
                    <OfferCreate cueId={cue.id} />
                </div>
            </div>
        );
    });

    return (
        <div className='d-flex flex-row flex-wrap justify-content-between'>
            {renderedCues}
        </div>
    );
};

export default CueList;
