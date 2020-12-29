
import React from 'react';
import {Productitem} from "../product-item";
import {useDispatch, useSelector} from "react-redux";
import {toggleItemInWishlist, toggleItemInCart} from "../../redux"

export const Productlist = ({products}) => {
    const dispatch = useDispatch();
    const wishlist=useSelector(({wishlist:{wishlist}})=>wishlist)
    const onAddToCart = (product) => {
        dispatch(toggleItemInCart(product))
    };
    const onAddToWishlist = (product) => {
        dispatch(toggleItemInWishlist(product));
    };




    return (
        <div>
            {products.map((product) => (
                <Productitem
                    isAddedToWishlist={!!wishlist.find(({id})=>id===product.id)}
                    onAddToCart={onAddToCart}
                 onAddToWishlist={onAddToWishlist} key= {product.id} product={{product}}/>
                ))}
        </div>

    );
};