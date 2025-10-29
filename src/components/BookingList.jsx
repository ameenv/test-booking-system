import React, { useEffect, useState } from 'react'
import { deleteBookingAPI, getAllBookingAPI } from '../api/allAPIs'
import { toast } from 'react-toastify';
import EditBooking from './EditBooking';


function BookingList() {
    
    const [allBookings, setAllBookings] = useState([])
    console.log(allBookings);

    useEffect(() => {
        getBookings()

    }, [allBookings])

    const getBookings = async () => {
        try {
            const result = await getAllBookingAPI()

            if (result.status == 200) {
                console.log(result.data)
                setAllBookings(result.data)
            }
        } catch (error) {
            toast.warning(`${error}`)
        }
    }

    const handleDeleteBooking = async (id) => {
        try {
            const result = await deleteBookingAPI(id)
            if (result.status == 200) {
                alert("user deleted")
            }

        } catch (error) {
            alert("error")
        }
    }

    return (
        <>

            <h2 className='text-center text-success'>All Bookings</h2>

            <div style={{ height: '300px' }}>
                <table className='table' >
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Email</td>
                            <td>service</td>
                            <td>Date</td>
                            <td>Status</td>
                            <td>Amount</td>

                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allBookings.map((booking) => (
                                <tr>
                                    <td>{booking.name}</td>
                                    <td>{booking.email}</td>
                                    <td>{booking.serviceType}</td>
                                    <td>{booking.bookingDate}</td>
                                    <td>{booking.status}</td>
                                    <td>{booking.amount}</td>
                                    <td><EditBooking booking={booking}/></td>
                                    <td><i className="fa-solid fa-trash fa-xl" onClick={() => handleDeleteBooking(booking._id)}></i></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            

        </>
    )
}

export default BookingList