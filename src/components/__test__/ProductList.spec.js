import React from 'react';
import { cleanup, render, fireEvent } from 'react-testing-library';
import ProductList from '../ProductList';

afterEach(cleanup);

describe('ProductList', () => {
  it('ProductList', (done) => {
    const addOrderItem = (orderArr, orderItems) => {
      expect(orderItems).toEqual({ id: 1, name: 'Café americano', image: '', price: 0, quantity: 1 })
      done();
    };
    const { getByTestId } = render(
      <ProductList menu={[{ id: 1, name: 'Café americano', image: '', price: 0, quantity: 1 }]} addOrderItem={addOrderItem} orderItems={{ id: 1, name: 'Café americano', image: '', price: 0, quantity: 1 }} />,
    );
    const addOrderBtn = getByTestId('1-addOrderItem-btn');
    fireEvent.click(addOrderBtn);
  }); 
});
