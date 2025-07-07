import { useContext } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({ image, name, price, desc, id }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    return (
        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
            {/* Image Container */}
            <div className="relative overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-orange-100 to-amber-50 flex items-center justify-center">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Add/Remove Controls */}
                <div className="absolute top-3 right-3">
                    {!cartItems[id] ? (
                        <button
                            onClick={() => addToCart(id)}
                            className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-200 group-hover:scale-110"
                        >
                            <AiOutlinePlus className="w-5 h-5 text-orange-500" />
                        </button>
                    ) : (
                        <div className="bg-white/95 backdrop-blur-sm rounded-full p-1 shadow-lg flex items-center gap-2">
                            <button
                                onClick={() => removeFromCart(id)}
                                className="p-1 hover:bg-red-50 rounded-full transition-colors"
                            >
                                <AiOutlineMinus className="w-4 h-4 text-red-500" />
                            </button>
                            <span className="px-2 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full min-w-[24px] text-center">
                                {cartItems[id]}
                            </span>
                            <button
                                onClick={() => addToCart(id)}
                                className="p-1 hover:bg-green-50 rounded-full transition-colors"
                            >
                                <AiOutlinePlus className="w-4 h-4 text-green-500" />
                            </button>
                        </div>
                    )}
                </div>

                {/* Price Badge */}
                <div className="absolute bottom-3 left-3">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                        ${price}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
                {/* Name and Rating */}
                <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-gray-800 text-lg leading-tight line-clamp-2 flex-1">
                        {name}
                    </h3>
                    <div className="flex items-center gap-1 flex-shrink-0">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="w-4 h-4 text-amber-400" />
                        ))}
                    </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {desc}
                </p>

                {/* Action Button */}
                <button
                    onClick={() => addToCart(id)}
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-2.5 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                    <FaShoppingCart className="w-4 h-4" />
                    Add to Cart
                </button>

            </div>
        </div>
    );
};

export default FoodItem
