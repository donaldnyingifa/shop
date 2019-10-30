import CartActionTypes from "../cart/cart.types"

import JumpSuites from '../../assets/9.jpg'
import Gowns from '../../assets/12_.jpg'
import NewArrivals from '../../assets/19.jpg'
import Dresses from '../../assets/13.jpg'
import Tops from '../../assets/8.jpg'

const INITIAL_STATE = {
    sections: [
        {
          title: 'JumpSuites',
          imageUrl: JumpSuites,
          id: 1,
          linkUrl: 'shop'
        },
        {
          title: 'tops',
          imageUrl: Tops,
          id: 2,
          linkUrl: 'shop'
        },
        {
          title: 'dresses',
          imageUrl: Dresses,
          id: 3,
          linkUrl: 'shop'
        },
        {
          title: 'new arrivals',
          imageUrl: NewArrivals,
          size: 'large',
          id: 4,
          linkUrl: 'shop'
        },
        {
          title: 'gowns',
          imageUrl: Gowns,
          size: 'large',
          id: 5,
          linkUrl: 'shop'
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