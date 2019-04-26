import React, { useState, useEffect } from 'react';
import { userRef } from './firebase';


const getData = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    setResult([]);
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

  return (
    <div>
      {result.map((item) => {
        return (
          <div>{item.clientsName}</div>
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

export default getData;
