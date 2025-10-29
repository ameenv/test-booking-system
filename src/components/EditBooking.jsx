import React, { use, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Col, FloatingLabel, Row } from 'react-bootstrap';
import { Form } from 'react-router-dom';

function EditBooking({ booking }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [bookService, setBookService] = useState(booking)
    console.log(bookService);

    const handleEditBooking = async (booking) => {

        try {
            // const result = await editBookingAPI()
            // if (result.status == 200) {

            // }

        } catch (error) {
            // alert("error")
        }
    }

    return (

        <>
            <i className="fa-regular fa-pen-to-square fa-xl" onClick={handleShow}></i>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit booking</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <input className='form-control w-50' placeholder='name' value={bookService.name} onChange={() => setBookService(...bookService, e.target.value)}></input>

                        </Col>

                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleEditBooking(booking)}>
                        update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditBooking