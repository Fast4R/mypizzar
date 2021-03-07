import React from 'react';
import '../styles/Ordering.css';
import styled from 'styled-components';
import db from '../firebase';

function Ordering(props) {

    const name = document.getElementById('name');
    const phone = document.getElementById('phone');
    const address = document.getElementById('address');
    const orderForm = document.getElementById('orderForm');
    const returnModal = document.getElementById('returnModal');

    function handleOrderData(e) {
        e.preventDefault();

        if(name.value && phone.value && address.value){
            sendOrderData();
            orderForm.classList.add('closeForm');
            setTimeout(() => {
                returnModal.style.display = 'flex';
            }, 350);
        }else{
            return alert('Заполните все поля!');
        }
    }

    const sendOrderData = () => {
        return db.collection("orders").doc().set({
            client: name.value,
            address: address.value,
            products: props.product,
            phone: phone.value,
        });
    }

    return (
        <ModalWindow>
            <Form id="orderForm">
                <FormHeader>Оформление Заказа</FormHeader>
                <FormName id="name" className="formEnterPlace" placeholder="Имя" type="text"></FormName>
                <FormPhone id="phone" className="formEnterPlace" placeholder="Телефон" type="phone"></FormPhone>
                <FormAddress id="address" className="formEnterPlace" placeholder="Адрес"></FormAddress>
                <FormPayment>
                    <h3 className="paymentType">Вид оплаты:</h3>
                    <p className="payment"><Payment name="payment" type="radio"></Payment>Карта</p>
                    <p className="payment"><Payment name="payment" type="radio"></Payment>Наличные</p>
                </FormPayment>
                <FormButton onClick={handleOrderData}>Оформить</FormButton>
            </Form>
            <ReturnModal id="returnModal">
                <ReturnModalHeader>Спасибо!</ReturnModalHeader>
                <ReturnModalSubtitle>Ваш заказ оформлен! В течение 5 минут мы Вам позвоним уточнить заказ.</ReturnModalSubtitle>
                <ReturnModalButton onClick={() => window.location.reload()}>Главная</ReturnModalButton>
            </ReturnModal>
        </ModalWindow>
    );
}

export default Ordering;

const ModalWindow = styled.div`
    padding: 30px; 
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const FormHeader = styled.h2`
    margin-bottom: 30px;
    color: #421502;
    text-align: center;
`;

const FormName = styled.input` `;
const FormPhone = styled.input``;
const FormAddress = styled.input``;

const FormPayment = styled.div`
    display: flex;
    margin-bottom: 20px;
`;

const Payment = styled.input`
    margin-left: 10px;
    margin-top: -5px;
    margin-bottom: 10px;
`;

const FormButton = styled.button`
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

//ReturnModalForm
const ReturnModal = styled.div`
    display: none;
    flex-direction: column;
    align-items: center;

    padding: 30px 110px;
    width: 500px;
    heigth: 300px;

    border-radius: 25px;
    background-color: rgba(25, 26, 36, .8);

    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
`;

const ReturnModalHeader = styled.h2`
    margin-bottom: 30px;
    font-size: 30px;
    color: #079905;
`;

const ReturnModalSubtitle = styled.p`
    margin-bottom: 25px;
    color: #d9d9db;
    text-align: center;
`;

const ReturnModalButton = styled.button`
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