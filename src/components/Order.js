import React, { useState, useEffect } from 'react';
import { db } from '../firebase';

// import getData from '../getData';
// import OrderList from './OrderList';

const Order = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('users').onSnapshot((snap) => {
      const data = [];
      snap.forEach((doc) => {
        data.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setResult(data);
    });
    return unsubscribe;
  }, []);


  // {item.orderItems.forEach(data => (
  //   <div>{data.name}</div>
  // ))}

  return (
    <div>
      {result.map(item => (
        <div key={item.id}>
          <div>{item.clientsName}</div>
          <div>{item.date}</div>
        </div>
      ))}
    </div>
  );
};


export default Order;
