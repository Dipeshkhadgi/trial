import { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';

const ExploreMenu = ({ category, setCategory }) => {
  const { menu_list } = useContext(StoreContext);

  return (
    <div id="explore-menu" className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-extrabold text-pink-600 mb-4 text-center">
        Pick Your Occasion, We'll Bake the Cake!
      </h1>

      {/* Top Categories Title */}
      <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center uppercase tracking-wide">
        Top Categories
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() => setCategory(prev => (prev === item.menu_name ? "All" : item.menu_name))}
            className={`cursor-pointer flex flex-col items-center space-y-2 p-3 rounded-lg border-2 transition 
              ${category === item.menu_name
                ? "border-pink-500 shadow-lg"
                : "border-transparent hover:border-pink-300 hover:shadow-md"
              }
            `}
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className={`w-24 h-24 object-cover rounded-full transition-transform duration-300
                ${category === item.menu_name ? "scale-105" : "scale-100"}
              `}
            />
            <p className="text-gray-700 font-medium">{item.menu_name}</p>
          </div>
        ))}
      </div>

      <hr className="mt-10 border-gray-200" />
    </div>
  );
};

export default ExploreMenu;
