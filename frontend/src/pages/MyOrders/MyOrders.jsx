import React, { useContext, useEffect, useState } from 'react'
import "./MyOrders.css"
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets';
import { toast } from 'react-toastify';


const MyOrders = () => {
    const { url, token } = useContext(StoreContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchOrders = async () => {
        setLoading(true);
        try {
            const response = await axios.post(`${url}/api/order/userorders`, {}, { headers: { token } });
            setData(response.data.data);
        } catch (error) {
            console.error("Error fetching orders:", error);
        } finally {
            setLoading(false);
        }
    }

    const deleteOrder = async (orderId) => {
        try {
            await axios.delete(`${url}/api/order/userorders/${orderId}`, {
                headers: { token },
            });
            toast.success("Order deleted successfully!");
            fetchOrders(); // Refresh orders after deletion
        } catch (error) {
            console.error("Error deleting order:", error);
            toast.error("Failed to delete the order.");
        }
    };

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token]);

    return (
        <div className='my-orders'>
            <h2>My Orders</h2>
            <div className="container">
                {loading ? <p>Loading...</p> : (
                    data.map((order, index) => (
                        <div key={index} className="my-orders-order">
                            <img src={assets.parcel_icon} alt="parcel icon" />
                            <p>
                                {order.items.map((item, idx) => (
                                    <span key={idx}>
                                        {item.name} x {item.quantity}{idx < order.items.length - 1 ? ',' : ''}
                                    </span>
                                ))}
                            </p>
                            <p>₹{order.amount}.00</p>
                            <p>Items: {order.items.length}</p>
                            <p><span>&#x25cf;</span> <b>{order.status}</b></p>
                            <button onClick={fetchOrders} >Track Order</button>
                            <button onClick={() => deleteOrder(order._id)}>Delete Order</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default MyOrders;
