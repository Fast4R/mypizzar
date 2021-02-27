import React from 'react';
import styled from 'styled-components';

function Sidebar() {
    return (
        
        <Order>
            <Logo>PizzAR</Logo>
            <Header>
                Заказ
            </Header>
            <OrderList>
                sdfsdfdsf
            </OrderList>
            <Promocode></Promocode>
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
    
    border-radius: 10px;
    border: 2px solid transparent;
    border-image: linear-gradient(45deg, #0b7f09, #10d40d);
    border-image-slice 1;
`;

const OrderList = styled.div`

`;

const Promocode = styled.input`

`;