import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../redux/action';

const Cart = () => {

    const dispatch = useDispatch();

    const id = useSelector((state) => state.auth.user_id);
    const cartList = useSelector((state) => state.cart.cartList);
    console.log(cartList);
    useEffect(() => {
        dispatch(getCart(id));
    }, [dispatch, id]);

    const renderCartA = () => {
        return cartList.map((val,idx) => {
            return (
                <tr key={idx}>
                    <td>{val.cart_id}</td>
                    <td>{val.user_id}</td>
                    <td>{val.bid_result_id}</td>
                    <td>{val.amount}</td>
                </tr>
            );
        });
    };

    return (
        <div>
            <div className='d-flex justify-content-between'>
                <table className='ui single line table' style={{ marginLeft: "20px", marginRight: "20px" }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User ID</th>
                            <th>Bid Result ID</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderCartA()}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;