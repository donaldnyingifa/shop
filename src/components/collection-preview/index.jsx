import React from 'react';
import CollectionItem from '../collection-item';

import './collection-preview.scss';

const CollectionPreview = ({ title, items, clicktitle }) => (
    <div className='collection-preview'>
        <h1 onClick={clicktitle} className='title'>{title.toUpperCase()}</h1>
        <div className='preview '> 
            {items
                .filter((item, idx) => idx < 4)
                .map(item => (
                    <CollectionItem key={item.id} item={item} />
            ))}
        </div>
    </div>
)

export default CollectionPreview;