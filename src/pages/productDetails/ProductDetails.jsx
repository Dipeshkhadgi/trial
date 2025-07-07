import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';

const ProductDetails = () => {
    const [selectedVariant, setSelectedVariant] = useState('chocolate');
    const [selectedSize, setSelectedSize] = useState('1lb');
    const [quantity, setQuantity] = useState(1);
    const [isWishlisted, setIsWishlisted] = useState(false);

    const cakeVariants = {
        chocolate: {
            name: 'Chocolate Delight',
            color: 'Brown',
            images: [
                'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop',
                'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600&h=600&fit=crop',
                'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&h=600&fit=crop'
            ],
            price: { '1lb': 25, '2lb': 45, '3lb': 65 },
            description: 'Rich and decadent chocolate cake layered with smooth chocolate ganache and topped with chocolate shavings. Perfect for chocolate lovers!'
        },
        vanilla: {
            name: 'Classic Vanilla',
            color: 'Cream',
            images: [
                'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=600&fit=crop',
                'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=600&fit=crop',
                'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&h=600&fit=crop'
            ],
            price: { '1lb': 22, '2lb': 40, '3lb': 58 },
            description: 'Light and fluffy vanilla sponge cake with creamy vanilla buttercream frosting. A timeless classic that never goes out of style.'
        },
        strawberry: {
            name: 'Strawberry Dream',
            color: 'Pink',
            images: [
                'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=600&h=600&fit=crop',
                'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&h=600&fit=crop',
                'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&h=600&fit=crop'
            ],
            price: { '1lb': 28, '2lb': 50, '3lb': 70 },
            description: 'Fresh strawberry cake with real strawberry pieces, topped with strawberry cream cheese frosting and fresh strawberries.'
        },
        red_velvet: {
            name: 'Red Velvet Luxury',
            color: 'Red',
            images: [
                'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=600&h=600&fit=crop',
                'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=600&h=600&fit=crop',
                'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=600&h=600&fit=crop'
            ],
            price: { '1lb': 30, '2lb': 55, '3lb': 78 },
            description: 'Velvety smooth red velvet cake with tangy cream cheese frosting. A luxurious treat with its distinctive color and flavor.'
        }
    };

    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const currentVariant = cakeVariants[selectedVariant];
    const currentPrice = currentVariant.price[selectedSize];

    const handleVariantChange = (variant) => {
        setSelectedVariant(variant);
        setSelectedImageIndex(0);
    };

    const handleQuantityChange = (change) => {
        const newQuantity = quantity + change;
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
        }
    };

    const addToCart = () => {
        // Add to cart logic here
        alert(`Added ${quantity}x ${currentVariant.name} (${selectedSize}) to cart!`);
    };

    return (
        <div className="max-w-7xl mx-auto p-6 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Left Side - Images */}
                <div className="space-y-4">
                    {/* Main Image */}
                    <div className="aspect-square rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                        <img
                            src={currentVariant.images[selectedImageIndex]}
                            alt={currentVariant.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    {/* Thumbnail Images */}
                    <div className="flex space-x-3">
                        {currentVariant.images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedImageIndex(index)}
                                className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${selectedImageIndex === index
                                        ? 'border-blue-500 shadow-md'
                                        : 'border-gray-200 hover:border-gray-300'
                                    }`}
                            >
                                <img
                                    src={image}
                                    alt={`${currentVariant.name} view ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="space-y-6">
                    {/* Header */}
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <h1 className="text-3xl font-bold text-gray-900">{currentVariant.name}</h1>
                            <button
                                onClick={() => setIsWishlisted(!isWishlisted)}
                                className={`p-2 rounded-full transition-colors ${isWishlisted ? 'text-red-500 bg-red-50' : 'text-gray-400 hover:text-red-500'
                                    }`}
                            >
                                {isWishlisted ? <AiFillHeart className="w-6 h-6" /> : <AiOutlineHeart className="w-6 h-6" />}
                            </button>
                        </div>

                        <div className="flex items-center space-x-2">
                            <div className="flex text-yellow-400">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <FaStar key={star} className="w-5 h-5" />
                                ))}
                            </div>
                            <span className="text-gray-600">(4.9) • 127 reviews</span>
                        </div>

                        <p className="text-2xl font-bold text-blue-600">${currentPrice}</p>
                    </div>

                    {/* Variant Selection */}
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Flavor & Color</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {Object.entries(cakeVariants).map(([key, variant]) => (
                                    <button
                                        key={key}
                                        onClick={() => handleVariantChange(key)}
                                        className={`p-3 rounded-lg border-2 text-left transition-all duration-200 ${selectedVariant === key
                                                ? 'border-blue-500 bg-blue-50 shadow-md'
                                                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                            }`}
                                    >
                                        <div className="font-medium text-gray-900">{variant.name}</div>
                                        <div className="text-sm text-gray-600">Color: {variant.color}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Size Selection */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Size</h3>
                            <div className="flex space-x-3">
                                {Object.entries(currentVariant.price).map(([size, price]) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-4 py-2 rounded-lg border-2 font-medium transition-all duration-200 ${selectedSize === size
                                                ? 'border-blue-500 bg-blue-500 text-white shadow-md'
                                                : 'border-gray-200 text-gray-700 hover:border-gray-300'
                                            }`}
                                    >
                                        {size} - ${price}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quantity and Add to Cart */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <span className="text-lg font-semibold text-gray-900">Quantity:</span>
                            <div className="flex items-center border-2 border-gray-200 rounded-lg">
                                <button
                                    onClick={() => handleQuantityChange(-1)}
                                    className="p-2 hover:bg-gray-100 transition-colors"
                                    disabled={quantity <= 1}
                                >
                                    <AiOutlineMinus className="w-4 h-4" />
                                </button>
                                <span className="px-4 py-2 font-semibold">{quantity}</span>
                                <button
                                    onClick={() => handleQuantityChange(1)}
                                    className="p-2 hover:bg-gray-100 transition-colors"
                                >
                                    <AiOutlinePlus className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="text-xl font-bold text-gray-900">
                                Total: ${(currentPrice * quantity).toFixed(2)}
                            </div>

                            <button
                                onClick={addToCart}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                            >
                                <IoCartOutline className="w-5 h-5" />
                                <span>Add to Cart</span>
                            </button>
                        </div>
                    </div>

                    {/* Product Description */}
                    <div className="border-t pt-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                        <p className="text-gray-700 leading-relaxed">{currentVariant.description}</p>

                        <div className="mt-4 space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Weight:</span>
                                <span className="font-medium">{selectedSize}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Serves:</span>
                                <span className="font-medium">
                                    {selectedSize === '1lb' ? '4-6 people' :
                                        selectedSize === '2lb' ? '8-10 people' : '12-15 people'}
                                </span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Delivery:</span>
                                <span className="font-medium text-green-600">Same day available</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;