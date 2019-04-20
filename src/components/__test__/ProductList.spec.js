import React from 'react';
import { cleanup, render, fireEvent } from 'react-testing-library';
import ProductList from '../ProductList';

afterEach(cleanup);

describe('ProductList', () => {
  it('ProductList', (done) => {
    const addOrderItem = (id) => {
      expect(id).toBe(1);
      done();
    };
    const { getByTestId } = render(
      <ProductList menu={[{ id: 1, name: 'Café americano', image: '', price: 0 }]} addOrderItem={addOrderItem} />,
    );
    const addOrderBtn = getByTestId('1-addOrderItem-btn');
    fireEvent.click(addOrderBtn);
  }); 
});
