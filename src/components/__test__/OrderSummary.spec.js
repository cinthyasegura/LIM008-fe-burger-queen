import React from 'react';
import { cleanup, render, fireEvent } from 'react-testing-library';
import OrderSummary from '../OrderSummary';

afterEach(cleanup);

describe('OrderSummary', () => {
  it('updateInput', (done) => {
    const updateInput = (event) => {
      expect(event.target.value).toBe('customer nuevo');
      done();
    };
    const { getByTestId } = render(
      <OrderSummary orderItems={[]} updateItem={() => {}} deleteItem={() => {}} clientsName="customer original" updateInput={updateInput} addOrderToFirebase={() => {}}/>,
    );
    const input = getByTestId('client-input');
    fireEvent.change(input, { target: { value: 'customer nuevo' } });
  });
  it('deleteItem', (done) => {
    const deleteItem = (id) => {
      expect(id).not.toBe(1);
      done();
    };
    const { getByTestId } = render(
      <OrderSummary updateItem={() => {}} clientsName="" orderItems={[{ id: 2, name: 'Café con leche' }]} deleteItem={deleteItem} addOrderToFirebase={() => {}} updateInput={() => {}}/>,
    );
    const deleteItemBtn = getByTestId('0-deleteItem-btn');
    fireEvent.click(deleteItemBtn);
  });
  it('deberia poder aumentar la cantidad del producto', (done) => {
    const updateItem = (index, item) => {
      expect(index).toBe(0);
      expect(item).toEqual({ id: 1, name: 'Café americano', quantity: 2 });
      done();
    };
    const { getByTestId } = render(
      <OrderSummary updateItem={updateItem} deleteItem={() => {}} clientsName="" orderItems={[{ id: 1, name: 'Café americano', quantity: 1 }]} addOrderToFirebase={() => {}} updateInput={() => {}}/>,
    );
    const updateItemBtn = getByTestId('0-updateItem-btn');
    fireEvent.click(updateItemBtn);
  });
  it('deberia poder disminuir la cantidad del producto', (done) => {
    const updateItem = (index, item) => {
      expect(index).toBe(0);
      expect(item).toEqual({ id: 1, name: 'Café americano', quantity: 1 });
      done();
    };
    const { getByTestId } = render(
      <OrderSummary updateItem={updateItem} deleteItem={() => {}} clientsName="" orderItems={[{ id: 1, name: 'Café americano', quantity: 2 }]} addOrderToFirebase={() => {}} updateInput={() => {}} />,
    );
    const descreaseItemBtn = getByTestId('0-updateDecreaseItem-btn');
    fireEvent.click(descreaseItemBtn);
  });
  it('deberia no poder disminuir menos de 1 la cantidad de cada item', (done) => {
    const updateItem = (index, item) => {
      expect(index).toBe(0);
      expect(item).toEqual({ id: 1, name: 'Café americano', quantity: 1 });
      done();
    };
    const { getByTestId } = render(
      <OrderSummary updateItem={updateItem} deleteItem={() => {}} clientsName="" orderItems={[{ id: 1, name: 'Café americano', quantity: 1 }]} addOrderToFirebase={() => {}} updateInput={() => {}} />,
    );
    const descreaseItemBtn = getByTestId('0-updateDecreaseItem-btn');
    fireEvent.click(descreaseItemBtn);
  });
});
