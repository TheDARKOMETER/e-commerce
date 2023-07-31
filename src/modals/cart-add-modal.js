import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import HttpService from '../services/https-service';

const http = new HttpService();
function CartAddModal(props) {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('');

  const handleClose = () => { 
    setShow(false)   
  };
  var itemExists = false
  const handleShow = () => { 
    setShow(true);
    http.addToCart(props.product).then(result => {
      setMessage((!result) ? "Product has been added to your cart." : "Item is already in your cart.")
    }).catch(error => {
      console.error(error)
    });
  };
 
  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Add to Cart
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart Notification</Modal.Title>
        </Modal.Header>

        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CartAddModal;