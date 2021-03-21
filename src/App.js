import './App.css';
import React, { useState } from 'react';
import Shop from './components/Shop';
import Sidebar from './components/Sidebar';
import Ordering from './components/Ordering';
import styled from 'styled-components';

function App() {

  const [product, setProduct] = useState([]);

  const handlerChangeProduct = (name, price) =>{
    setProduct(() => {
      product.push({name: name, price: price})
      let removed = product.splice(0);
      return removed
    })
  }

  function handleOrdering() {
    const cont = document.getElementById('container');
    const ordMen = document.getElementById('ordermenu');

    cont.style.display = 'none';
    ordMen.style.display = 'flex';
  }

  return(
    <PizzarWindow>
      <Container id="container">
        <Mainside>
          <Shop onChangeProduct={handlerChangeProduct}/>
        </Mainside>
        <Orderside>
          <Sidebar product={product} handleOrdering={handleOrdering}/>
        </Orderside>
      </Container>
      <OrderMenu id="ordermenu">
        <Ordering product={product}/>
      </OrderMenu>
    </PizzarWindow>
  );
}

export default App;

const PizzarWindow = styled.div``;

const Container = styled.div`
  display:flex;
  max-width: 100%;
  height: 100vh;
`;

const Mainside = styled.div`
  width: 80%;
`;

const Orderside = styled.div`
  height: 100vh;
  position: fixed;
  right: 0;
  width: 20%;
  box-shadow: 0 0 5px rgba(0, 0, 0, .5);
`;

const OrderMenu = styled.div`
  display: none;
`;