import React from 'react';
import PropTypes from 'prop-types';
import './layout/layout.css';

const Product = ({
  name, image, price, addOrder, id,
}) => (
  <div className="media items">
    <img className="align-self-center ml-3 mr-8 icons" src={image} alt={name} />
    <p className="mt-2">{name}</p>
    <p className="ml-5">
Precio: $
      {price}
    </p>
    <button
      type="button"
      className="btn-add"
      onClick={addOrder}
      data-testid={`${id}-addOrderItem-btn`}
    >
+
    </button>
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
