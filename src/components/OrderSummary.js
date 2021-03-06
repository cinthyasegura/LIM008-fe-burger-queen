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
          <th className="tb-header">Cantidad</th>
          <th className="tb-header">Producto</th>
          <th className="tb-header">Precio</th>
          <th className="tb-header">Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {orderItems.length > 0 ? (
          orderItems.map((item, index) => (
            <tr key={item.id} data-testid="productTableItem">
              <td>
                <img
                  src="image/mas1.png"
                  alt="aumentar"
                  className="btn-none add"
                  onClick={() => {
                    const newItemToAdd = { ...item };
                    newItemToAdd.quantity += 1;
                    updateItem(index, newItemToAdd);
                  }}
                  data-testid={`${index}-updateItem-btn`}
                />
                <span data-testid={`${index}-amount`}>{item.quantity}</span>
                <img
                  src="image/menos-simbolo.png"
                  alt="disminuir"
                  className="btn-none minus"
                  onClick={() => {
                    const newItemToDecrease = { ...item };
                    newItemToDecrease.quantity -= 1;
                    if(newItemToDecrease.quantity < 1) {
                      newItemToDecrease.quantity = 1;
                    }
                    updateItem(index, newItemToDecrease);
                  }}
                  data-testid={`${index}-updateDecreaseItem-btn`}
                /> 
              </td>
              <td>{item.name}</td>
              <td>
                {`$ ${item.price * item.quantity}`}
              </td>
              <td>
                <img  src="image/basura.png" alt="eliminar" className="pointer btn-none" onClick={() => deleteItem(item.id)} data-testid={`${index}-deleteItem-btn`} />
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
          <th colSpan="2">Total:</th>
          <td>
$
            {orderItems.reduce((acum, element) => acum + (element.quantity * element.price), 0)}

          </td>
        </tr>
      </tfoot>
    </table> 
      <label htmlFor="client"></label>
      <input
        type="text"
        name="client"
        id="client"
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
