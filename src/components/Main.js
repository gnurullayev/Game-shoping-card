import React,{useState, useEffect} from 'react';
import Loader from './loader/Loader';
import {FETCH_URL,USER_KEY}from "../config"
import GoodsList from './GoodsList';
import Basket from './Basket';
import ShowBasketList from './ShowBasketList';

function Main(props) {
    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)
    const [order,setOrder] = useState([])
    const [isBasketShow, setBascetShow] = useState(false)

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

    const handleShowBasket = () => {
        setBascetShow(!isBasketShow)
    }

    const deletOrderProduct = (productId) => {
        let newOrder = order.filter(el => el.id !== productId)
        setOrder(newOrder)
    }

    const addOrderProductCount = (productId) => {
        let newOrder = order.map(el => {
            if (el.id === productId) {
                return {...el, qunitity:el.qunitity + 1}
            }

            return el
        })
        setOrder(newOrder)
    }

    const removeOrderProductCount = (productId) => {
        let newOrder = order.map(el => {
            if (el.id === productId) {
                return {...el, qunitity:el.qunitity === 0 ? 0 : el.qunitity - 1}
            }

            return el
        })
        setOrder(newOrder)
    }

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




    return (
        <div className='main'>
            <div className="container">
                <Basket order={order} handleShowBasket = {handleShowBasket}/>

                {
                    loading 
                    ? 
                    <Loader/>
                    :
                    <GoodsList goods = {goods} orderProduct = {orderProduct}/>
                }

                {
                    isBasketShow && <ShowBasketList 
                    order={order} 
                    handleShowBasket = {handleShowBasket}
                    deletOrderProduct = {deletOrderProduct}
                    addOrderProductCount = {addOrderProductCount}
                    removeOrderProductCount = {removeOrderProductCount}
                    /> 
                }
            </div>
        </div>
    );
}

export default Main;