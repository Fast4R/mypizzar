import './App.css';
import React, { useState } from 'react';
import Shop from './components/Shop';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';

function App() {

  const [product, setProduct] = useState([{name: "Товар", price: "Цена"}]);

  const handlerChangeProduct = (name, price) =>{
    setProduct(() => {
      product.push({name: name, price: price})
      let removed = product.splice(0);
      return removed
    })
  }

  return(
    <div className="App">
      <Container>
        <Mainside>
          <Shop onChangeProduct={handlerChangeProduct}/>
        </Mainside>
        <Orderside>
          <Sidebar product={product}/>
        </Orderside>
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  display:flex;
  width: 100%;
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