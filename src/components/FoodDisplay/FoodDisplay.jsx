import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category = "All" }) => {
  const { food_list } = useContext(StoreContext);

  const filteredItems = food_list.filter(item =>
    category === "All" || category === item.category
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg mb-4">
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-orange-600 font-medium text-sm uppercase tracking-wide">Fresh & Delicious</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent mb-4">
            Popular Bakes
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light">
            in Your Neighborhood
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Food Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredItems.map((item) => (
            <FoodItem
              key={item._id}
              image={`http://localhost:8000/images/${item.image}`}
              name={item.name}
              desc={item.description}
              price={item.price}
              id={item._id}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gradient-to-br from-orange-200 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaShoppingCart className="w-12 h-12 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No items found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodDisplay