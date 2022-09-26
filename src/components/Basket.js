import React from 'react';

function Basket({order}) {

    return (
        <div className='basket d-flex justify-content-center'>
            <button className='busket-btn'>
                <i className="bi bi-cart-fill basket-icon"></i>
            </button>
            <span className='busket-index'>{order.length}</span>
        </div>
    );
}

export default Basket;