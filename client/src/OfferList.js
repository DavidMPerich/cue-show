import React from 'react';

const OfferList = ({ offers }) => {
    const renderedOffers = offers.map(offer => {
        return <li key={offer.id}>{offer.content}</li>
    });

    return (
        <ul>
            {renderedOffers}
        </ul>
    );
};

export default OfferList;