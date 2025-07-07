import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { StoreContext } from '../../Context/StoreContext';

const PlaceOrder = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: ""
    });

    const { getTotalCartAmount, token, food_list, cartItems, url, setCartItems } = useContext(StoreContext);
    const navigate = useNavigate();

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));
    };

    const placeOrder = async (e) => {
        e.preventDefault();
        let orderItems = [];
        food_list.map((item) => {
            if (cartItems[item._id] > 0) {
                let itemInfo = item;
                itemInfo["quantity"] = cartItems[item._id];
                orderItems.push(itemInfo);
            }
        });
        let orderData = {
            address: data,
            items: orderItems,
            amount: getTotalCartAmount() + 5,
        };
        let response = await axios.post(url + "/order/place", orderData, { headers: { token } });
        if (response.data.success) {
            const { session_url } = response.data;
            window.location.replace(session_url);
        } else {
            toast.error("Something Went Wrong");
        }
    };

    useEffect(() => {
        if (!token) {
            toast.error("to place an order sign in first");
            navigate('/cart');
        } else if (getTotalCartAmount() === 0) {
            navigate('/cart');
        }
    }, [token]);

    return (
        <form onSubmit={placeOrder} className="flex flex-col lg:flex-row gap-8 p-4 lg:p-10 max-w-7xl mx-auto">
            {/* Left Section - Delivery Info */}
            <div className="flex-1 bg-white shadow-lg rounded-2xl p-6">
                <p className="text-2xl font-semibold mb-6">Delivery Information</p>

                <div className="flex gap-4 mb-4">
                    <input type="text" name='firstName' onChange={onChangeHandler} value={data.firstName} placeholder='First name' required
                        className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" name='lastName' onChange={onChangeHandler} value={data.lastName} placeholder='Last name' required
                        className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <input type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Email address' required
                    className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />

                <input type="text" name='street' onChange={onChangeHandler} value={data.street} placeholder='Street' required
                    className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />

                <div className="flex gap-4 mb-4">
                    <input type="text" name='city' onChange={onChangeHandler} value={data.city} placeholder='City' required
                        className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" name='state' onChange={onChangeHandler} value={data.state} placeholder='State' required
                        className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div className="flex gap-4 mb-4">
                    <input type="text" name='zipcode' onChange={onChangeHandler} value={data.zipcode} placeholder='Zip code' required
                        className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" name='country' onChange={onChangeHandler} value={data.country} placeholder='Country' required
                        className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <input type="text" name='phone' onChange={onChangeHandler} value={data.phone} placeholder='Phone' required
                    className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            {/* Right Section - Cart Totals */}
            <div className="w-full lg:w-[40%] bg-white shadow-lg rounded-2xl p-6 h-fit">
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Cart Totals</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between text-gray-700">
                            <p>Subtotal</p><p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="flex justify-between text-gray-700">
                            <p>Delivery Fee</p><p>${getTotalCartAmount() === 0 ? 0 : 5}</p>
                        </div>
                        <hr />
                        <div className="flex justify-between font-bold text-lg">
                            <p>Total</p><p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5}</p>
                        </div>
                    </div>
                </div>
                <button type='submit' className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                    Proceed To Payment
                </button>
            </div>
        </form>
    );
};

export default PlaceOrder;
