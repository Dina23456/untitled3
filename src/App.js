import React, {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Header} from "./components/header";
import {Productlist} from "./components/product-list";
import {Productitem} from "./components/product-item";
import {useServices} from "./services";
import {setProducts} from "redux";
import "./styles.css";

export default function App() {
    const {cart, wishlist, products} = useSelector(({cart: {cart}, wishlist: {wishlist}, products: {products}}) => ({
        cart, wishlist, products
    }));
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(setProducts())
    }, [dispatch]);


    return (
        <div className="App">

            <Header/>
            <Productlist products={{products}}/>
            <Productitem/>

        </div>
    );
}
