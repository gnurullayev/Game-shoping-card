import React from 'react';

function GoodsItem({name, description, full_background, price,id,orderProduct}) {
    return (
        <li className='col-12 col-md-6 col-lg-4 col-xl-3'>
            <div className="card" style={{minHeight: "452px"}}>
                <img src={full_background} className="card-img-top" alt={name} width ="259" height="259"/>

                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">
                        {description}
                    </p>
                </div>

                <div className="card-footer d-flex justify-content-between align-items-center">
                    <button 
                    className='btn btn-outline-success'
                    onClick={() => orderProduct({name, description, full_background, price,id})}
                    >
                        Buy
                    </button>
                    <b>{price} $</b>
                </div>
            </div>
        </li>
    );
}

export default GoodsItem;