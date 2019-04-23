import React from 'react';
import { cleanup, render, fireEvent } from 'react-testing-library';
import Tabs from '../layout/Tabs';

afterEach(cleanup);

describe('Tabs', () => {
  it('deberia poder filtrar los productos de desayuno', (done) => {
    const matchOption = (option) => {
      expect(option).toBe('breakfast');
      done();
    };
    const { getByTestId } = render(
      <Tabs matchOption={matchOption} />,
    );
    const breakfastBtn = getByTestId('breakfast-btn');
    fireEvent.click(breakfastBtn);
  });
  it('deberia poder filtrar los productos de menu', (done) => {
    const matchOption = (option) => {
      expect(option).toBe('menu');
      done();
    };
    const { getByTestId } = render(
      <Tabs matchOption={matchOption} />,
    );
    const menuBtn = getByTestId('menu-btn');
    fireEvent.click(menuBtn);
  });
  it('deberia poder filtrar los productos de acompañamientos', (done) => {
    const matchOption = (option) => {
      expect(option).toBe('accompaniment');
      done();
    };
    const { getByTestId } = render(
      <Tabs matchOption={matchOption} />,
    );
    const accompanimentBtn = getByTestId('accompaniment-btn');
    fireEvent.click(accompanimentBtn);
  });
  it('deberia poder filtrar los productos bebidas', (done) => {
    const matchOption = (option) => {
      expect(option).toBe('drinks');
      done();
    };
    const { getByTestId } = render(
      <Tabs matchOption={matchOption} />,
    );
    const drinksBtn = getByTestId('drinks-btn');
    fireEvent.click(drinksBtn);
  });
});
