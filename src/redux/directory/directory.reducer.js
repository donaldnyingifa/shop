import CartActionTypes from "../cart/cart.types"

import JumpSuites from '../../assets/9.jpg'
import Gowns from '../../assets/12_.jpg'
import NewArrivals from '../../assets/6_.jpg'
import Dresses from '../../assets/13.jpg'
import Tops from '../../assets/8.jpg'

const INITIAL_STATE = {
    sections: [
        {
          title: 'JumpSuites',
          imageUrl: JumpSuites,
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'tops',
          imageUrl: Tops,
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'dresses',
          imageUrl: Dresses,
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'new arrivals',
          imageUrl: NewArrivals,
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'gowns',
          imageUrl: Gowns,
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
}

const directoryReducer =(state = INITIAL_STATE, action)=> {
    switch (CartActionTypes.type) {
        default:
            return state;
    }
};

export default directoryReducer;