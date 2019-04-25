import React from 'react';
import { cleanup, render, fireEvent, waitForElement, act } from 'react-testing-library';
import Container from '../Container';
import MockFirebase from 'mock-cloud-firestore';


const fixtureData = {
  __collection__: {
    users: {
      __doc__: {
        abc123: {
          clientsName: "cinthya",
          date: {
            toDate() {
              return new Date();
            }
          },
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

const firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });
global.firebase = firebase;
  
describe('Container', () => {
  afterEach(cleanup);

  it('deberia poder agregar y eliminar productos del array de ordenes', async () => {
    const { getByTestId, queryAllByTestId } = render(<Container />);

    let productTableItems = queryAllByTestId('productTableItem');
    expect(productTableItems).toHaveLength(0);

    const addOrderBtn = await waitForElement(() => getByTestId('1-addOrderItem-btn'));
    await act(async () => {
      fireEvent.click(addOrderBtn);
    });
    productTableItems = queryAllByTestId('productTableItem');
    expect(productTableItems).toHaveLength(1);

    const deleteOrderBtn = await waitForElement(() => getByTestId('0-deleteItem-btn'));
    await act(async () => {
      fireEvent.click(deleteOrderBtn);
    });
    productTableItems = queryAllByTestId('productTableItem');
    expect(productTableItems).toHaveLength(0); 
  });

  it('deberia poder ver los items del menu segun la opcion seleccionada', async () => {
    const { getByTestId, queryAllByTestId } = render(<Container />);

    let productList = queryAllByTestId('product-list');
     expect(productList).toHaveLength(0);

     const breakfastBtn = await waitForElement(() => getByTestId('breakfast-btn'));
     await act(async () => {
       fireEvent.click(breakfastBtn);
     });

     productList = queryAllByTestId('product-list');
     expect(productList).toHaveLength(2);
  });

  it('deberia poder aumentar la cantidad del producto en la orden', async () => {
    const { getByTestId, queryAllByTestId } = render(<Container />);

    let productTableItems = queryAllByTestId('productTableItem');
    expect(productTableItems).toHaveLength(0);

    let addOrderBtn = await waitForElement(() => getByTestId('1-addOrderItem-btn'));
    await act(async () => {
      fireEvent.click(addOrderBtn);
    });
    productTableItems = queryAllByTestId('productTableItem');
    expect(productTableItems).toHaveLength(1);

    const updateItemBtn = await waitForElement(() => getByTestId('0-updateItem-btn'));
    await act(async () => {
      fireEvent.click(updateItemBtn);
    });
    let amount = getByTestId('0-amount');
    expect(amount.textContent).toEqual('2');

    
  });
  it('deberia aumentar la cantidad del producto si ya existen en la orden', async () => {
    const { getByTestId, queryAllByTestId } = render(<Container />);

    let productTableItems = queryAllByTestId('productTableItem');
    expect(productTableItems).toHaveLength(0);

    let addOrderBtn = await waitForElement(() => getByTestId('1-addOrderItem-btn'));
    await act(async () => {
      fireEvent.click(addOrderBtn);
    });
    productTableItems = queryAllByTestId('productTableItem');
    expect(productTableItems).toHaveLength(1);

    addOrderBtn = await waitForElement(() => getByTestId('1-addOrderItem-btn'));
    await act(async () => {
      fireEvent.click(addOrderBtn);
    });
    let amount = getByTestId('0-amount');
    expect(amount.textContent).toEqual('2');
  });

  it('deberia poder escribir el nombre del usuario', async () => {
    const { getByTestId, queryAllByTestId } = render(<Container />);

    let productTableItems = queryAllByTestId('productTableItem');
    expect(productTableItems).toHaveLength(0);

    const addOrderBtn = await waitForElement(() => getByTestId('1-addOrderItem-btn'));
    await act(async () => {
      fireEvent.click(addOrderBtn);
    });
    productTableItems = queryAllByTestId('productTableItem');
    expect(productTableItems).toHaveLength(1);

    const input = await waitForElement(() => getByTestId('client-input'));
    await act(async() => {
      fireEvent.change(input, { target: { value: 'chester' } });
    });
    expect(input.value).toBe('chester');
  });

  it('deberia poder agregar la orden a firebase', async () => {
    const getCollectionFromFirebase = (callback) => {
      const db = firebase.firestore();
      db.collection('users').onSnapshot((querySnapshot) => {
        const userData = [];
        querySnapshot.forEach((doc) => {
          userData.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        callback(userData);
      });
    };
    const { getByTestId } = render(<Container />);
    const addOrdenBtn = await waitForElement(() => getByTestId('1-addOrderItem-btn'));
    await act(async () => {
      fireEvent.click(addOrdenBtn);
    });
    const addOrderToFirebaseBtn = await waitForElement(() => getByTestId('add-to-firebase'));
    await act(async () => {
      fireEvent.click(addOrderToFirebaseBtn);
    });
    const getData = (data) => {
      expect(data).toHaveLength(1);
    };
    getCollectionFromFirebase(getData);
  });
});



