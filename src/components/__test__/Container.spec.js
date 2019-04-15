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
  it('Container', () => {
    const { queryAllByTestId } = render(<Container />);
    let productTableItems = queryAllByTestId('productTableItem');
    expect(productTableItems).toHaveLength(0);
  });

  it('container', async () => {
    const { getByTestId, queryAllByTestId } = render(<Container />);

    let productTableItems = queryAllByTestId('productTableItem');
    expect(productTableItems).toHaveLength(0);

    const addOrderBtn = await waitForElement(() => getByTestId('1-addOrderItem-btn'));
    await act(async () => {
      fireEvent.click(addOrderBtn);
    })

    productTableItems = queryAllByTestId('productTableItem');
    expect(productTableItems).toHaveLength(1);

    
  // })
});

describe('addOrderToFirebase', () => {
  it('deberia poder agregar una orden a firebase', (done) => {
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
    getCollection((data) => {
      expect(data).toHaveLength(1)
      done();
    });
  });
});

