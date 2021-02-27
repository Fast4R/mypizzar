import React, {useEffect, useState} from 'react';
import Products from './Products';
import styled from 'styled-components';
import db from '../firebase';

function Shop() {
    const [products, setProducts] = useState([]);

    const getProductsData = () => {
        db.collection('products').onSnapshot((snapshot) => {
        setProducts(snapshot.docs.map((doc) => {
            return doc.data()
            }))
        })
    }

    useEffect(() => {
        getProductsData();
    }, []);

    return (
        <Mainside>
            <Navigation>
                <List>
                    Пицца
                </List>
                <List>
                    Закуски
                </List>
                <List>
                    Напитки
                </List>
                <List>
                    Салаты
                </List>
            </Navigation>
            <ProductsList>
                <Products products={products}/>
            </ProductsList>
        </Mainside>
    )
}

export default Shop

const Mainside = styled.div`
    displey: felx;
    flex-direction: column;
`;

const Navigation = styled.ul`
    display: flex;
    padding-left: 0;
    text-align: center;

    background-color: #e84343;
    box-shadow: 0 5px 5px rgba(0, 0, 0, .5);
`;

const List = styled.li`
    width: 25%;
    padding: 30px 0;
    font-size: 20px;
    list-style-type: none;
    cursor: pointer;

    transition: background-color .4s linear;

    &:hover{
        background-color: #eb3838;
    }
`;

const ProductsList = styled.div`
    padding: 0 25px;
`;