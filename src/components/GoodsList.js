import React from 'react';
import GoodsItem from './GoodsItem';

function GoodsList({goods,orderProduct}) {
    return (
        <div className='row'>
            {
                goods.map(product => (
                    <GoodsItem key = {product.id} {...product} orderProduct = {orderProduct}/>
                ))
            }
        </div>
    );
}

export default GoodsList;