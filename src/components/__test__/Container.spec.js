import React from 'react';
import { act } from 'react-dom/test-utils';
import { cleanup, render, fireEvent, waitForElement } from 'react-testing-library';
import Container from '../Container';
import addOrderToFirebase from '../Container';
import MockFirebase from 'mock-cloud-firestore';


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
  

//  it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Container />, div); 
//   ReactDOM.unmountComponentAtNode(div);
// });

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
});



