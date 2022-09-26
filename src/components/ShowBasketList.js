import React from 'react';
import ShowBasketListItem from './ShowBasketListItem';

function ShowBasketList(props) {
    const {order = [] , handleShowBasket = Function.prototype, deletOrderProduct, addOrderProductCount, removeOrderProductCount, handleNotShowBasket} = props

    let totqlPrice = order.reduce((total, el) => {
        return total + (el.qunitity * el.price)
    }, 0)

    return (
        <div className='show-basket' onClick={handleShowBasket}>
            <div className="show-basket-content" onClick={handleNotShowBasket}>
                <ul className="list-group sow-basket-list list" >
                    <li className="list-group-item list-group-item-success text-center ">
                        Basket
                    </li>
                        {
                            order.length !== 0 
                            ? 
                            order.map(product => (
                            <ShowBasketListItem 
                            key={product.id} 
                            {...product} 
                            deletOrderProduct = {deletOrderProduct}
                            addOrderProductCount = {addOrderProductCount}
                            removeOrderProductCount = {removeOrderProductCount}
                            /> ))
                            :
                            <li className='list-group-item list-group-item-danger text-center'>There are no products in the cart yet</li>
                        }
                    <li className="list-group-item list-group-item-success text-center">
                        Total price: {totqlPrice} <b>$</b>
                    </li>

                    <button className='button border-0 ms-2 clouse' type='button' onClick={handleShowBasket }>
                        <i class="bi bi-x fs-4"></i>
                    </button>
                </ul>
            </div>
        </div>
    );
}

export default ShowBasketList;