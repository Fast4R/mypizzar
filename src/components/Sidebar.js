import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function Sidebar(props) {

    const [orderProduct, setOrderProduct] = useState(props.product);

    useEffect(() => {
        setOrderProduct(props);
    })

    const handleChangePrice = () => {
        let totalPrice = 0;

        for(let i = 0; i < props.product.length; i++){
            totalPrice += props.product[i].price
        }
        return totalPrice.toFixed(2);
    }

    const handleRemoveOrderProduct = (item) => {
        const index = orderProduct.product.indexOf(item);
        setOrderProduct(() => {
            orderProduct.product.splice(index, 1);
            return orderProduct.product;
        })
    }

    return (
        <Order>
            <Logo>PizzAR</Logo>
            <Header>
                Корзина
            </Header>
            <OrderList>
                {
                    props.product.map(item => (
                        <Orderstat>{item.name}: {item.price}
                        <OrderstatReomove onClick={() => handleRemoveOrderProduct(item)} src="https://www.flaticon.com/svg/vstatic/svg/1828/1828665.svg?token=exp=1614789818~hmac=04c0183a8ac2ad2e7fd855a69ee77431"
                        width="15" height="15"></OrderstatReomove>
                        </Orderstat>
                    ))
                }
            </OrderList>
            <Promocode placeholder="Введите промокод"></Promocode>
            <OrderAmount>{handleChangePrice()} Бел.руб.</OrderAmount>
            <ConfirmButton>Заказать</ConfirmButton>
            <OrderBg src="https://www.flaticon.com/svg/vstatic/svg/2636/2636890.svg?token=exp=1614789587~hmac=25bc8fca397c7976f34cd0111c98384a"
            width="300" height="300"
            ></OrderBg>
        </Order>
    )
}

export default Sidebar;

const Order = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 130px;

    position: relative;
`;

const Logo = styled.h1`
    margin-bottom: 150px;
`;

const Header = styled.h2`
    padding: 7px 30px;
    margin-bottom: 30px;
    z-index: 2;
`;

const OrderList = styled.div`
    padding: 0 5px;
    max-height: 150px;
    overflow-y: scroll;
    z-index: 2;
`;

const Orderstat = styled.div`
    width: 200px;
    margin-bottom: 5px;
`;

const OrderstatReomove = styled.img`
    float: right;
    opacity: .7;
    cursor: pointer;

    &: hover{
        opacity: 1;
    }
`;

const Promocode = styled.input`
    padding: 10px;
    margin: 30px 0;

    border: 2px solid rgba(229, 67, 67, .5);
    border-radius: 20px;
    outline: none;
    z-index: 2;

    transition: border .4s linear;

    &:focus{
        border: 2px solid rgba(229, 67, 67, 1);
    }
`;

const OrderAmount = styled.div`
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: 700;
    
    color: #401e06;
    z-index: 2;
`;

const ConfirmButton = styled.button`
    padding: 15px 30px;
    margin-bottom: 20px;

    font-weight: 700;
    background-color: #079905;
    color: white;
    cursor: pointer;

    border: none;
    border-radius: 50px;
    outline: none;

    text-transform: uppercase;
    z-index: 2;

    transition: background-color .2s linear;

    &:hover{
        background-color: #088705;
    }
`;

const OrderBg = styled.img`
    position: absolute;
    top: 50%;
    z-index: 1;
    opacity: .1;
`;