import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import {addBookingAPI} from '../api/allAPIs'
import { toast } from 'react-toastify';

function AddBooking() {
    const [customer, setCustomer] = useState({
        name: "",
        email: "",
        serviceType: "",
        bookingDate: "",
        status: "",
        amount: ""
    })

    console.log(customer);

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        // api call
        try {
            const result = await addBookingAPI(customer)
            if (result.status == 200) {
                alert("booking added")
                // toast.success("booking added")
            }
        } catch (error) {
            // toast.warning(`${error}`)
            alert(`${error}`)
            
        }
    }

    return (
        <>
            <form onSubmit={(e) => handleFormSubmit(e)}>
                 <h2 className='text-center text-success'>Add Bookings</h2>
                <FloatingLabel
                    controlId="customerName"
                    label="Customer name"
                    className="mb-3"
                >
                    <Form.Control type="text" placeholder="customer name" onChange={(e) => setCustomer({ ...customer, name: e.target.value })} />
                </FloatingLabel>

                <FloatingLabel
                    controlId="emailId"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setCustomer({ ...customer, email: e.target.value })} />
                </FloatingLabel>

                <FloatingLabel
                    controlId="serviceType"
                    label="service type"
                    className="mb-3"
                >
                    <Form.Control type="text" placeholder="Service type" onChange={(e) => setCustomer({ ...customer, serviceType: e.target.value })} />
                </FloatingLabel>

                {/* date */}
                <FloatingLabel
                    controlId="date"
                    label="booking date"
                    className="mb-3"
                >
                    <Form.Control type="date" placeholder="Service type" onChange={(e) => setCustomer({ ...customer, bookingDate: e.target.value })} />
                </FloatingLabel>

                {/* amount */}
                <FloatingLabel
                    controlId="amount"
                    label="amount"
                    className="mb-3"
                >
                    <Form.Control type="text" placeholder="amount" onChange={(e) => setCustomer({ ...customer, amount: e.target.value })} />
                </FloatingLabel>

                <button type='submit' className='btn btn-primary' onClick={(e) => handleFormSubmit(e)}>Submit</button>
            </form>
        </>
    )
}

export default AddBooking