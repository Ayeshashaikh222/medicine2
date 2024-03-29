import { Fragment, useContext } from "react"; 
import {Button, Modal, Table} from "react-bootstrap";
import { BsCart3 } from "react-icons/bs";
import CartContext from "../Store/CartContext";
import { useState } from "react";

const Header = () => {
   
    const [showCart, setShowCart] = useState(false);

    const cartCtx = useContext(CartContext);

    const handleOpenCart = () => {
        setShowCart(true);
    };

    const handleCloseCart = () => {
      setShowCart(false);
    };

    // const totalItems = cartCtx.items.reduce((total, item) => {
    //     return total + item.quantity;
    // }, 0);

    const totalQuantity = cartCtx.items? 
  cartCtx.items.reduce(
    (prevValue, currItem) =>{
      const quantity = Number(currItem.quantity)

      if(isNaN(quantity)){
        return prevValue
      }

      return prevValue + quantity
    } ,0

    ):0;

    return (
        <Fragment>
         <div className="d-flex justify-content-between align-center bg-secondary" style={{color: "white"}}>
            <h1 style={{marginLeft: "25px"}}>MedPlus</h1>
            <Button varient="light" onClick={handleOpenCart} style={{marginRight: "15px"}}>
                Cart <BsCart3 />{totalQuantity}
            </Button>
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

         </div>
        </Fragment>
    );
}

export default Header;