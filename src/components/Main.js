import React,{useState, useEffect} from 'react';
import Loader from './loader/Loader';
import {FETCH_URL,USER_KEY}from "../config"
import GoodsList from './GoodsList';
import Basket from './Basket';

function Main(props) {
    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)
    const [order,setOrder] = useState([])


    useEffect (() => {
        fetch(FETCH_URL, {
            headers: {
                Authorization : USER_KEY
            }
        })
        .then(response => response.json())
        .then(data => {
            setGoods(data.specialFeatured);
            setLoading(false);
        })
       
    },[])

    const orderProduct = (product) => {
        let productIndex = order.findIndex(orderProduct => orderProduct.id === product.id);
        if(productIndex < 0) {
            let newProduct = {
                ...product,
                qunitity: 1
            }
            setOrder([...order,newProduct])
        }
        else {
           let newOrder = order.map((prodc,index) => {
                if(index === productIndex) {
                    return {...prodc, qunitity:prodc.qunitity + 1 }
                }
                return prodc
           })
            setOrder(newOrder)
        }

    }


    return (
        <div className='main'>
            <div className="container">
                <Basket order={order}/>

                {
                    loading 
                    ? 
                    <Loader/>
                    :
                    <GoodsList goods = {goods} orderProduct = {orderProduct}/>
                }
            </div>
        </div>
    );
}

export default Main;