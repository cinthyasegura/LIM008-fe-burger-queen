import React from 'react';
import { act } from 'react-dom/test-utils';
import { cleanup, render, fireEvent, waitForElement } from 'react-testing-library';
import Container from '../Container';
import addOrderToFirebase from '../Container';
import MockFirebase from 'mock-cloud-firestore';

afterEach(cleanup);

const fixtureData = {
  __collection__: {
    users: {
      __doc__: {
        abc123: {
          clientsName: "cinthya",
          orderItems: [
             {
              category: "breakfast",
              id: 1,
              image: "http://www.prensa-latina.cu/images/2018/diciembre/08/1-lam-cafe.jpg",
              name: "Café americano",
              price: 5,
              quantity: 1
            }
          ]
        }
      }
    }
  }
};

 global.firebase = new MockFirebase(fixtureData, {isNaiveSnapshotListenerEnabled: true});
  
describe('Container', () => {
  it('deberia aumentar la cantidad de productos en el array de ordenes', async (done) => {
    const { getByTestId, queryAllByTestId } = render(<Container />);

    let productTableItems = queryAllByTestId('productTableItem');
    expect(productTableItems).toHaveLength(0);

    const addOrderBtn = await waitForElement(() => getByTestId('1-addOrderItem-btn'));
    await act(async () => {
      fireEvent.click(addOrderBtn);
      done();
    });
    productTableItems = queryAllByTestId('productTableItem');
    expect(productTableItems).toHaveLength(1);
  });
  
  it('deberia eliminar productos del array de ordenes', async (done) => {
    const { getByTestId, queryAllByTestId } = render(<Container />);
    const addOrderBtn = await waitForElement(() => getByTestId('1-addOrderItem-btn'));
    await act(async () => {
      fireEvent.click(addOrderBtn);
      done();
    });
    const deleteOrderBtn = await waitForElement(() => getByTestId('0-deleteItem-btn'));
    await act(async () => {
      fireEvent.click(deleteOrderBtn);
      done();
    });
    let productTableItems = queryAllByTestId('productTableItem');
    expect(productTableItems).toHaveLength(0);
  });
});

// describe('addOrderToFirebase', () => {
//   it('deberia poder acceder a la coleccion de firebase', (done) => {
//     const getCollection = (callback) => {
//       const db = firebase.firestore();
//       db.collection('users').onSnapshot(querySnapshot => {
//         const userData = [];
//         querySnapshot.forEach(doc => {
//           userData.push({ 
//             id: doc.id,
//             ...doc.data(), 
//           });
//         });
//         callback(userData);
//       });
//     };
//     getCollection((data) => {
//       expect(data).toHaveLength(1)
//       done();
//     })
//   });



describe('addOrderToFirebase', () => {
  it('deberia poder agregar una orden a firebase', async (done) => {
    const getCollection = (callback) => {
      const db = firebase.firestore();
      db.collection('users').onSnapshot(querySnapshot => {
        const userData = [];
        querySnapshot.forEach(doc => {
          userData.push({ 
            id: doc.id,
            ...doc.data(), 
          });
        });
        callback(userData);
      });
    };
    const { getByTestId, queryAllByTestId } = render(<Container />);
    // let productTableItems = queryAllByTestId('productTableItem');
    const addOrderBtn = await waitForElement(() => getByTestId('1-addOrderItem-btn'));
    await act(async () => {
      fireEvent.click(addOrderBtn);
      done();
    });
    // productTableItems = queryAllByTestId('productTableItem');
    const btnAddOrderToFirebase = await waitForElement(() => getByTestId('add-to-firebase'));
    await act(async () => {
      fireEvent.click(btnAddOrderToFirebase);
      done();
    });
    // productTableItems = queryAllByTestId('productTableItem');
    // expect(productTableItems).toHaveLength(0);

    const getData = (data) => {
      expect(data).toHaveLength(1);
      done();
    };
    getCollection(getData);
    addOrderToFirebase();
  });
});

