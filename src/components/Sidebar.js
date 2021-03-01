import React from 'react';
import styled from 'styled-components';

function Sidebar(props) {

    const handleChangePrice = () => {
        let totalPrice = 0;

        for(let i = 1; i < props.product.length; i++){
            totalPrice += props.product[i].price
        }
        return totalPrice.toFixed(2);
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
                        <Orderstat>{item.name}: {item.price}</Orderstat>
                    ))
                }
            </OrderList>
            <Promocode placeholder="Введите промокод"></Promocode>
            <OrderAmount>{handleChangePrice()} Бел.руб.</OrderAmount>
            <ConfirmButton>Заказать</ConfirmButton>
        </Order>
    )
}

export default Sidebar;

const Logo = styled.h1`
    margin-bottom: 150px;
`;

const Order = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 130px;
`;

const Header = styled.h2`
    padding: 7px 30px;
    margin-bottom: 30px;
    
    
`;

// border-radius: 10px;
//     border: 2px solid transparent;
//     border-image: linear-gradient(45deg, #e83a3a, #e81313);
//     border-image-slice 1;

const OrderList = styled.div`

`;

const Promocode = styled.input`
    padding: 10px;
    margin: 30px 0;

    border: 2px solid rgba(229, 67, 67, .5);
    border-radius: 20px;
    outline: none;

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

    transition: background-color .2s linear;

    &:hover{
        background-color: #088705;
    }
`;

const Orderstat = styled.div``;