import { useContext } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
  const navigate = useNavigate();
  const deliveryFee = getTotalCartAmount() === 0 ? 0 : 5;

  return (
    <div className="min-h-screen px-4 py-10 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-center text-pink-600">Your Shopping Cart</h2>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items Section */}
        <div className="w-full lg:w-2/3 bg-white rounded-2xl shadow-md p-6">
          <div className="grid grid-cols-6 font-semibold border-b pb-4 text-gray-600 text-sm">
            <p className="col-span-2">Item</p>
            <p>Price</p>
            <p>Qty</p>
            <p>Total</p>
            <p>Remove</p>
          </div>

          {food_list?.map((item, index) =>
            cartItems[item._id] > 0 ? (
              <div key={index} className="grid grid-cols-6 items-center text-sm py-4 border-b gap-2">
                <div className="col-span-2 flex items-center gap-3">
                  <img
                    src={`http://localhost:8000/images/${item.image}`}
                    alt={item.name}
                    className="w-14 h-14 object-cover rounded-lg"
                  />
                  <span className="font-medium">{item.name}</span>
                </div>
                <p className="text-gray-700">${item.price}</p>
                <p className="text-gray-700">{cartItems[item._id]}</p>
                <p className="text-gray-700">${item.price * cartItems[item._id]}</p>
                <button
                  className="text-red-500 hover:text-red-700 transition"
                  onClick={() => removeFromCart(item._id)}
                >
                  <FaTrashAlt />
                </button>
              </div>
            ) : null
          )}
        </div>

        {/* Cart Total Section */}
        <div className="w-full lg:w-1/3 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Cart Totals</h3>
            <div className="flex justify-between text-gray-600 mb-2">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div className="flex justify-between text-gray-600 mb-2">
              <p>Delivery Fee</p>
              <p>${deliveryFee}</p>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-3 text-gray-800">
              <p>Total</p>
              <p>${getTotalCartAmount() + deliveryFee}</p>
            </div>
            <button
              onClick={() => navigate('/order')}
              className="mt-6 w-full bg-pink-600 text-white py-3 rounded-xl hover:bg-pink-700 transition"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>

          {/* Promo Code Section */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <p className="text-sm text-gray-700 mb-3">Have a promo code?</p>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Promo code"
                className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
              <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-xl text-sm">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
