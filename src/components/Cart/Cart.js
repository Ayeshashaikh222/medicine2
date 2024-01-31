const Cart = () => {
   return (
    <>
    <Modal show={showCart} onHide={handleCloseCart}>
                <Modal.Header closeButton>
                   <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartCtx.items.map((item) => (
                                <tr key={item.name}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <div className="d-flex justify-content-between">
                        <span>Total Amount:{cartCtx.totalAmount}</span>
                    </div>
                    <Button variant="secondary">Place Order</Button>
                </Modal.Footer>
            </Modal>
    </>
   );
};

export default Cart;