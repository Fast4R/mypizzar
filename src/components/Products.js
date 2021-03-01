import React from 'react';
import styled from 'styled-components';

function Products(props) {

    return (
        <ProductsList>
            {
                props.products.map(item => (
                    <ProductItem>
                        <ProductImage src={item.img}></ProductImage>
                        <Container>
                            <ProductName>{item.name}</ProductName>
                            <ProductDescription>{item.description}</ProductDescription>
                            <ProductPrice>{item.price} Бел.руб.</ProductPrice>
                            <ProductOrderButton id={item.id} onClick={() => {props.onChangeProduct(item.name, item.price)}}>
                                В корзину
                            </ProductOrderButton>
                        </Container>    
                    </ProductItem>
                ))
            }
        </ProductsList>
    )
}

export default Products

const Container = styled.div`
    padding: 0 15px;
`;

const ProductsList = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 0 100px;
    margin: 30px 0 90px;
    flex-wrap: wrap;
`;

const ProductItem = styled.div`
    width: 350px;
    margin: 25px;

    overflow: hidden;

    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, .3);
`;

const ProductImage =styled.img`
    width: 320px;
    height: 320px;
    margin-bottom: 20px;
    margin-top: -80px;
    margin-left: -80px;
`;

const ProductName = styled.h2`
    margin-bottom: 15px;
    font-weight: 500;
    color: #0bbf08;
`;

const ProductDescription =styled.p`
    height: 100px;
    margin-bottom: 35px;
    color: grey;
`; 

const ProductPrice = styled.h3`
    margin-bottom: 55px;
    color: #421502;
`;

const ProductOrderButton = styled.button`
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