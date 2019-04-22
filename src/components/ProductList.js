import React from 'react';
import Product from './Product';

const ProductList = ({ menu, addOrderItem, orderItems }) => (
  menu.map(item => (
    <Product
      key={item.id}
      image={item.image}
      name={item.name}
      price={item.price}
      addOrder={() => addOrderItem(orderItems, item)}
      id={item.id}
    />
  ))
);

export default ProductList;
