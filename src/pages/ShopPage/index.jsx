import React from 'react';
import SHOP_DATA from './SHOP_DATA'
import Footer from '../../components/footer'
import CollectionPreview from '../../components/collection-preview'
import { id } from 'postcss-selector-parser';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div>
                <div className='shop-page' style={{padding: '20px 80px'}}>
                    {collections.map(({ id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))}
                </div>
                <Footer />
            </div>
            
        )
    }
}

export default ShopPage;