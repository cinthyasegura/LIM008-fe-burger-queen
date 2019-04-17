import React from 'react';
import { act } from 'react-dom/test-utils';
import { cleanup, render, fireEvent, waitForElement } from 'react-testing-library';
import Container from '../Container';
import addOrderToFirebase from '../Container';
import MockFirebase from 'mock-cloud-firestore';

afterEach(cleanup);


const originalError = console.error
beforeAll(() => {
  console.error = (...args) => {
    if (/Warning.*not wrapped in act/.test(args[0])) {
      return
    }
    originalError.call(console, ...args)
  }
})

afterAll(() => {
  console.error = originalError
})



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
  it('deberia aumentar la cantidad de productos en el array de ordenes', async (done) => {
    const { getByTestId, queryAllByTestId } = render(<Container />);
    let productTableItems = queryAllByTestId('productTableItem');
    expect(productTableItems).toHaveLength(0);

    const addOrderBtn = await waitForElement(() => getByTestId('1-addOrderItem-btn'));
     act(() => {
      fireEvent.click(addOrderBtn);
      done();
    });
    productTableItems = queryAllByTestId('productTableItem');
    expect(productTableItems).toHaveLength(1);
  });
  
  it('deberia eliminar productos del array de ordenes', async (done) => {
    const { getByTestId, queryAllByTestId } = render(<Container />);
    const addOrderBtn = await waitForElement(() => getByTestId('1-addOrderItem-btn'));
     act(() => {
      fireEvent.click(addOrderBtn);
      done();
    });
    const deleteOrderBtn = await waitForElement(() => getByTestId('0-deleteItem-btn'));
     act(() => {
      fireEvent.click(deleteOrderBtn);
      done();
    });
    const productTableItems = queryAllByTestId('productTableItem');
    expect(productTableItems).toHaveLength(0);
  });
});



