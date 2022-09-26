import React from 'react';

function ShowBasketListItem({name, price, id, qunitity,deletOrderProduct, addOrderProductCount, removeOrderProductCount}) {
    return (
        <div>
            <li className="list-group-item  d-flex justify-content-between align-items-center">
                {name} x {qunitity} = {qunitity * price} $

                <span className='d-flex '>
                    <button 
                    className='btn btn-outline-success d-flex align-items-center' 
                    type='button' 
                    onClick={() => addOrderProductCount(id)}
                    >
                        <i className="bi bi-plus fs-4"></i>
                        Add
                    </button>

                    <button 
                    className='btn btn-outline-danger d-flex align-items-center ms-2' 
                    type='button'
                    onClick={() => removeOrderProductCount(id)}
                    >
                        <i className="bi bi-dash"></i>
                        Remove
                    </button>

                    <button 
                    className='button border-0 ms-2' 
                    type='button' 
                    onClick={() => deletOrderProduct(id)}
                    >
                    <i className="bi bi-trash fs-4 text-danger"></i>
                    </button>
                </span>
            </li>
        </div>
    );
}

export default ShowBasketListItem;