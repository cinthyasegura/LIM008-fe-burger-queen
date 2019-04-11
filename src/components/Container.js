import React, { useState, useEffect } from 'react';
import axios from 'axios';
import firebase from 'firebase';
import Tabs from './layout/Tabs';
import ProductList from './ProductList';
import OrderSummary from './OrderSummary';

const Container = () => {
  const [menu, setMenu] = useState([]);
  const [options, setOptions] = useState('');
  const [orderItems, setOrderItems] = useState([]);
  const [clientsName, setClientsName] = useState('');

  useEffect(() => {
    async function fetchDta() {
      const result = await axios('https://raw.githubusercontent.com/cinthyasegura/LIM008-fe-burger-queen/firstHistory/src/data/menu.json');
      setMenu([...result.data, menu]);
      setOptions('breakfast');
    }
    fetchDta();
  }, [menu]);

  const matchOption = (option) => {
    setOptions(option);
  };

  const addOrderItem = id => menu.filter(item => (item.id === id ? setOrderItems([...orderItems, item]) : ''));


  const deleteItem = (id) => {
    setOrderItems(orderItems.filter(item => item.id !== id));
  };

  const updateItem = (index, item) => {
    const newItems = [...orderItems];
    newItems[index] = item;
    setOrderItems(newItems);
  };

  const updateInput = (e) => {
    setClientsName(e.target.value);
  };

  const addUser = (e) => {
    e.preventDefault();
    const db = firebase.firestore();
    db.collection('users').add({ clientsName, orderItems });
    setClientsName('');
    setOrderItems([]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Tabs matchOption={matchOption} />
          <ProductList
            menu={menu.filter(item => item.category === options)}
            addOrderItem={addOrderItem}
          />
        </div>
        <div className="col-md-6">
          <OrderSummary
            orderItems={orderItems}
            deleteItem={deleteItem}
            updateItem={updateItem}
            addUser={addUser}
            updateInput={updateInput}
            clientsName={clientsName}
          />
        </div>
      </div>
    </div>
  );
};

export default Container;
