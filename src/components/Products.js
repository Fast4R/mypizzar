import React from 'react';
import styled from 'styled-components';

function Products(props) {

    return (
        <ProductsList>
            <Title>Пиццы</Title>
            <ProductsAll>
                {
                    props.products.map(item => (
                        <ProductItem>
                            <ProductImage src={item.img}></ProductImage>
                            <Container>
                                <ProductName>{item.name}</ProductName>
                                <ProductDescription>{item.description}</ProductDescription>
                                <PizzaSize>25см</PizzaSize>
                                <ProductPrice>{item.price} Бел.руб.</ProductPrice>
                                <ProductOrderButton id={item.id} onClick={() => {props.onChangeProduct(item.name, item.price)}}>
                                    В корзину
                                </ProductOrderButton>
                            </Container>    
                        </ProductItem>
                    ))
                }
            </ProductsAll>

            <Title>Закуски</Title>
            <ProductsAll>
                {
                    props.snacks.map(item => (
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
            </ProductsAll>

            <Title>Напитки</Title>
            <ProductsAll>
                {
                    props.drinks.map(item => (
                        <ProductItem>
                            <ProductImageDrink src={item.img}></ProductImageDrink>
                            <Container>
                                <ProductName>{item.name}</ProductName>
                                <ProductPrice>{item.price} Бел.руб.</ProductPrice>
                                <ProductOrderButton id={item.id} onClick={() => {props.onChangeProduct(item.name, item.price)}}>
                                    В корзину
                                </ProductOrderButton>
                            </Container>    
                        </ProductItem>
                    ))
                }
            </ProductsAll>

            <Title>Десерты</Title>
            <ProductsAll>
                {
                    props.desserts.map(item => (
                        <ProductItem>
                            <ProductImageDrink src={item.img}></ProductImageDrink>
                            <Container>
                                <ProductName>{item.name}</ProductName>
                                <ProductPrice>{item.price} Бел.руб.</ProductPrice>
                                <ProductOrderButton id={item.id} onClick={() => {props.onChangeProduct(item.name, item.price)}}>
                                    В корзину
                                </ProductOrderButton>
                            </Container>    
                        </ProductItem>
                    ))
                }
            </ProductsAll>

            <Footer>
                <FooterGithubLink>My GitHub: <a href="https://github.com/Fast4R" target="_blank">Fast4R</a></FooterGithubLink>
                <FooterDescription>Разработчик Булат Андрей. (с) 2021. Все права (не)защищены :).</FooterDescription>
            </Footer>
        </ProductsList>
    )
}

export default Products

const Container = styled.div`
    padding: 0 15px;
`;

const ProductsList = styled.div``;

const Title = styled.h2`
    margin: 30px 0 0 110px;
    color: #421502;
`;

const ProductsAll = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 0 100px;
    margin: 0 0 90px;
    flex-wrap: wrap;
`;

const ProductItem = styled.div`
    width: 300px;
    margin: 25px 10px;

    display:flex;
    flex-direction: column;
    justify-content: space-around;

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

const ProductImageDrink =styled.img`
    width: 320px;
    height: 320px;
    margin-left: -15px;
`;

const ProductName = styled.h2`
    margin-bottom: 15px;
    font-weight: 500;
    color: #0bbf08;
`;

const ProductDescription = styled.p`
    height: 100px;
    margin-bottom: 35px;
    color: grey;
`;

const PizzaSize = styled.button`
    padding: 10px 7px;
    margin-bottom: 30px;

    border: none;
    border-radius: 3px;
    outline: none;

    background-color: rgba(#cccaca, .3);
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

const Footer = styled.div`
    width: 1117px;
    padding: 50px;

    text-align: center;
    color: white;
    background-color: rgba(36, 25, 41, .85);

    position: absolute;
    left: 0;
    
`;

const FooterGithubLink = styled.div`
    a{
        color: white;
    }
`;

const FooterDescription = styled.div``;