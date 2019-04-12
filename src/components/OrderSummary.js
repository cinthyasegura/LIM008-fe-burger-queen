import React from 'react';
import PropTypes from 'prop-types';
import './layout/layout.css';


const OrderSummary = ({
  orderItems, deleteItem, updateItem, addOrderToFirebase, updateInput, clientsName,
}) => (
  <form onSubmit={addOrderToFirebase}>
    <table>
      <thead>
        <tr>
          <th className="d-inline p-5">Cantidad</th>
          <th className="d-inline p-5">Producto</th>
          <th className="d-inline p-5">Precio</th>
          <th className="d-inline">Eliminar</th>
        </tr>
      </thead>
      <tbody data-testid="productTable">
        {orderItems.length > 0 ? (
          orderItems.map((item, index) => (
            <tr key={item.id} data-testid="productTableItem">
              <td>
                <button
                  type="button"
                  onClick={() => {
                    const newItemToAdd = { ...item };
                    newItemToAdd.quantity += 1;
                    updateItem(index, newItemToAdd);
                  }}
                  data-testid={`${index}-updateItem-btn`}
                >
                  {' '}
+
                </button>
                <p>{item.quantity}</p>
                <button
                  type="button"
                  onClick={() => {
                    const newItemToDecrease = { ...item };
                    newItemToDecrease.quantity -= 1;
                    updateItem(index, newItemToDecrease);
                  }}
                  data-testid={`${index}-updateDecreaseItem-btn`}
                >
                  {' '}
-
                </button>
              </td>
              <td>{item.name}</td>
              <td>
                <span>$</span>
                {item.price * item.quantity}
              </td>
              <td>
                <button type="button" className="far fa-trash-alt pointer" onClick={() => deleteItem(item.id)} data-testid={`${index}-deleteItem-btn`} />
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td>Sin orden</td>
          </tr>
        )}
      </tbody>
      <tfoot>
        <tr>
          <th colSpan="3">Total:</th>
          <td>
$
            {orderItems.reduce((acum, element) => acum + (element.quantity * element.price), 0)}
            {' '}

          </td>
        </tr>
      </tfoot>
    </table>

    <input
      type="text"
      name="name"
      placeholder="Nombre del cliente"
      onChange={updateInput}
      value={clientsName}
      data-testid="client-input"
    />
    <button className="rounded bg-info text-light" type="submit">Enviar a cocina</button>
  </form>
);

export default OrderSummary;

OrderSummary.propTypes = {
  orderItems: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  deleteItem: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
  addOrderToFirebase: PropTypes.func.isRequired,
  updateInput: PropTypes.func.isRequired,
  clientsName: PropTypes.string.isRequired,
};
