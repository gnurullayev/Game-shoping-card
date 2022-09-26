import React from 'react';

function Basket({order, handleShowBasket}) {

    return (
        <div className='basket d-flex justify-content-center' onClick={handleShowBasket}>
            <button className='busket-btn'>
                <i class="bi bi-cart-plus basket-icon"></i>
            </button>
            <span className='busket-index'>{order.length}</span>
        </div>
    );
}

export default Basket;