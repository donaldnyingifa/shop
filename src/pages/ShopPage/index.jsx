import React from 'react';
import SHOP_DATA from './SHOP_DATA'
import Header from '../../components/header'
import Footer from '../../components/footer'
import CollectionPreview from '../../components/collection-preview'
import { id } from 'postcss-selector-parser';
import './shop.scss'

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    handleFilter = id => {
        console.log('meee')
    const { collections } = {...this.state}
    collections.filter(collection => collection.id === id )
    this.setState({collections})
    console.log(collections)
    }
    render() {
        const {collections} = this.state;
        
        return (
            <div>
                <Header />
                <div className='shop-page'>
                    {collections.map(({ id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} clicktitle={()=>this.handleFilter(id)} {...otherCollectionProps} />
                    ))}
                </div>
                <Footer />
            </div>
            
        )
    }
}

export default ShopPage;