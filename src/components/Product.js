import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Product = ({
  name, image, price, addOrder, id,
}) => (
  <div className="media items" data-testid="product-list">
    <img className="align-self-center ml-3 mr-8 icons" src={image} alt={name} />
    <span className="padding mt-2">
      {name}
      <br />
      Precio: $
      {price}
    </span>
    <img
      alt="agregar orden"
      src="image/mas.png"
      role="presentation"
      className="btn-add"
      onClick={addOrder}
      data-testid={`${id}-addOrderItem-btn`}
    />
  </div>
);

export default Product;

Product.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  addOrder: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};
