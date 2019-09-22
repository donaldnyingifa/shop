import React from 'react'
import { connect } from 'react-redux'
import CustomButton from '../custom-button'
import CartItem from '../cart-item'
import './cart-dropdown.scss'

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        {cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
        ))}
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapItemsToProps = ({ cart: { cartItems }}) => ({
    cartItems
})

export default connect(mapItemsToProps)(CartDropdown);