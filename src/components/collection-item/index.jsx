import React from 'react';
import {connect }from 'react-redux'

import { addItem } from '../../redux/cart/cart.actions'
import CustomButton from '../custom-button'
import './collection-item.scss'

const CollectionItem = ({item, addItem}) => {
    const {id, imageUrl, name, price} = item
    return (
    <div className='collection-item'>
        <div
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div> 
        {/* <CustomButton onClick={() => addItem(item)} inverted> ADD TO CART </CustomButton> */}
    </div>
)};

const mapDispatchToProp = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProp)(CollectionItem);