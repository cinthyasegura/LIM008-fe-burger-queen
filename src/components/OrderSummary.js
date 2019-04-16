import React from 'react';
import PropTypes from 'prop-types';
import './styles/orderSummary.css';


const OrderSummary = ({
  orderItems, deleteItem, updateItem, addOrderToFirebase, updateInput, clientsName,
}) => (
  <form onSubmit={addOrderToFirebase}>
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Cantidad</th>
          <th>Producto</th>
          <th>Precio</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody data-testid="productTable">
        {orderItems.length > 0 ? (
          orderItems.map((item, index) => (
            <tr key={item.id} data-testid="productTableItem">
              <td>
                <button
                  type="button"
                  className="fas fa-plus btn-none"
                  onClick={() => {
                    const newItemToAdd = { ...item };
                    newItemToAdd.quantity += 1;
                    updateItem(index, newItemToAdd);
                  }}
                  data-testid={`${index}-updateItem-btn`}
                >
                </button>
                {item.quantity}
                <button
                  type="button"
                  className="fas fa-minus btn-none"
                  onClick={() => {
                    const newItemToDecrease = { ...item };
                    newItemToDecrease.quantity -= 1;
                    if(newItemToDecrease.quantity < 1) {
                      newItemToDecrease.quantity = 1;
                    }
                    updateItem(index, newItemToDecrease);
                  }}
                  data-testid={`${index}-updateDecreaseItem-btn`}
                >    
                </button>
              </td>
              <td>{item.name}</td>
              <td>
                {`$ ${item.price * item.quantity}`}
              </td>
              <td>
                <button type="button" className="far fa-trash-alt pointer btn-none" onClick={() => deleteItem(item.id)} data-testid={`${index}-deleteItem-btn`} />
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
      className="input"
      data-testid="client-input"
    />
    <button className="rounded bg text-light" type="submit" data-testid="add-to-firebase">Enviar a cocina</button>
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
