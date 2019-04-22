import React, { useState, useEffect } from 'react';
import axios from 'axios';
import firebase from '../firebase';
import Tabs from './layout/Tabs';
import ProductList from './ProductList';
import OrderSummary from './OrderSummary';
import '../App.css';

const Container = () => {
  const [menu, setMenu] = useState([]);
  const [options, setOptions] = useState('');
  const [orderItems, setOrderItems] = useState([]);
  const [clientsName, setClientsName] = useState('');

  useEffect(() => {
    async function fetchDta() {
      const result = await axios('https://raw.githubusercontent.com/cinthyasegura/LIM008-fe-burger-queen/firstHistory/src/data/menu.json');
      setMenu([...result.data]);
      setOptions('breakfast');
    }
    fetchDta();
  }, []);

  const matchOption = (option) => {
    setOptions(option);
  };
 
  const addOrderItem = (orderArr, orderList) => {
    const elementMatch = orderArr.find(item => item.id === orderList.id);
    return elementMatch 
      ? (orderList.quantity += 1, setOrderItems([...orderItems])) 
      : setOrderItems([...orderItems, orderList]) 
  };

  const deleteItem = id => setOrderItems(orderItems.filter(item => item.id !== id));

  const updateItem = (index, item) => {
    const newItems = [...orderItems];
    newItems[index] = item;
    setOrderItems(newItems);
  };

  const updateInput = (e) => {
    setClientsName(e.target.value);
  };

  const addOrderToFirebase = (e) => {
    e.preventDefault();
    const db = firebase.firestore();
    db.collection('users').add({ 
      clientsName,
      orderItems,
      date: firebase.firestore.FieldValue.serverTimestamp()
    });
    setClientsName('');
    setOrderItems([]);
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <Tabs matchOption={matchOption} />
        <ProductList
          menu={menu.filter(item => item.category === options)}
          addOrderItem={addOrderItem}
          orderItems={orderItems}
        />
      </div>
      <div className="col-md-6 order">
        <OrderSummary
          orderItems={orderItems}
          deleteItem={deleteItem}
          updateItem={updateItem}
          addOrderToFirebase={addOrderToFirebase}
          updateInput={updateInput}
          clientsName={clientsName}
        />
      </div>
    </div>
  );
};

export default Container;
