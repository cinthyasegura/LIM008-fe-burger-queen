import React, { useState, useEffect } from 'react';
import { userRef } from '../firebase';

// import getData from '../getData';
// import OrderList from './OrderList';

const Order = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const unsubscribe = userRef.onSnapshot((snap) => {
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

  // const dateFormat = (date) => {
  //   const dateNow = new Date(date * 1000);
  //   const hours = dateNow.getHours();
  //   const minutes = `0 + ${dateNow.getMinutes()}`;
  //   const seconds = `0 + ${dateNow.getSeconds()}`;
  //   const formattedTime = `${hours} : ${minutes.substr(-2)} : ${seconds.substr(-2)}`;
  //   console.log(formattedTime)
  //   return formattedTime;   
  // };

  return (
    <div>
      {result.map((item, key) => {
        return (
          <div key={key}>
            <div>{item.clientsName}</div>
            <div>{item.date}</div>
          </div>
        );
      })}
    </div>
  );
};

// const getData = (callback) => {
//   const query = firebase.firestore().collection('users').orderBy('date', 'asc');
//   query.onSnapshot((querySnapshot) => {
//     const data = [];
//     querySnapshot.forEach((doc) => {
//       data.push({
//         id: doc.id,
//         ...doc.data(),
//       });
//     });
//     callback(data);
//   });
// };

export default Order;
