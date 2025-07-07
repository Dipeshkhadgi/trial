import { useContext, useEffect, useState } from "react";
import { GrServices } from "react-icons/gr";
import { IoCallOutline, IoChevronDown, IoClose, IoHomeOutline, IoMenu, IoPersonCircle, IoRestaurantOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavLogo from "../../assets/dp-logo.jpg";
import { StoreContext } from "../../Context/StoreContext";


const Navbar = ({ setShowLogin }) => {

  const { cartItems } = useContext(StoreContext);
  const cartItemCount = Object.values(cartItems).reduce((acc, curr) => acc + curr, 0);


  const [activeMenu, setActiveMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Scroll listener
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ Menu highlighting based on route
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') setActiveMenu('home');
    else if (path === '/menu') setActiveMenu('menu');
    else if (path === '/Services') setActiveMenu('services');
    else if (path === '/contact') setActiveMenu('contact');
  }, [location]);

  // ✅ Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
      if (isProfileOpen && !event.target.closest('.profile-container')) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen, isProfileOpen]);

  // ✅ Load user/token from localStorage on mount + sync on 'storage' changes
  useEffect(() => {
    const loadAuth = () => {
      const savedToken = localStorage.getItem("token");
      const savedUser = localStorage.getItem("user");
      setToken(savedToken);
      try {
        setUser(savedUser ? JSON.parse(savedUser) : null);
      } catch {
        setUser(null);
      }
    };
    loadAuth();
    window.addEventListener("storage", loadAuth);
    return () => window.removeEventListener("storage", loadAuth);
  }, []);

  // ✅ Logout function
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
    setIsProfileOpen(false);
    navigate('/');
  };

  // ✅ Menu item click handler
  const handleMenuClick = (menuItem, href = null) => {
    setActiveMenu(menuItem);
    setIsMobileMenuOpen(false);
    if (href?.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
        : 'bg-white shadow-sm'
        }`}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link to="/" className="flex-shrink-0" onClick={() => setActiveMenu('home')}>
              <img className="h-12 max-h-24 w-auto object-contain lg:h-20" src={NavLogo} alt="Logo" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-8 font-medium text-gray-700">
              <button
                onClick={() => handleMenuClick('home', '#home')}
                className={`flex items-center gap-1 hover:text-purple-600 transition ${activeMenu === 'home' ? 'text-purple-600 font-semibold' : ''}`}
              >
                <IoHomeOutline className="text-lg" /> Home
              </button>

              <button
                onClick={() => handleMenuClick('menu', '#menu')}
                className={`flex items-center gap-1 hover:text-purple-600 transition ${activeMenu === 'menu' ? 'text-purple-600 font-semibold' : ''}`}
              >
                <IoRestaurantOutline className="text-lg" /> Menu
              </button>

              <button
                onClick={() => handleMenuClick('servicex', '#servicex')}
                className={`flex items-center gap-1 hover:text-purple-600 transition ${activeMenu === 'mob-app' ? 'text-purple-600 font-semibold' : ''}`}
              >
                <GrServices className="text-lg" /> Services
              </button>

              <button
                onClick={() => handleMenuClick('contact', '#contact')}
                className={`flex items-center gap-1 hover:text-purple-600 transition ${activeMenu === 'contact' ? 'text-purple-600 font-semibold' : ''}`}
              >
                <IoCallOutline className="text-lg" /> Contact
              </button>
            </div>

            {/* Right side */}
            {/* Right side */}
            <div className="flex items-center gap-x-3 lg:gap-x-4 text-gray-600">

              {/* Cart Icon */}
              {/* Cart Icon */}
              {token && (
                <Link
                  to="/cart"
                  className="relative hover:text-purple-600 transition"
                >
                  🛒
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {cartItemCount}
                    </span>
                  )}
                </Link>
              )}



              {/* Auth Buttons */}
              {!token ? (
                <button
                  onClick={() => setShowLogin(true)}
                  className="hidden sm:inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-semibold rounded-full hover:from-purple-700 hover:to-pink-600 transition shadow-md"
                >
                  Sign In
                </button>
              ) : (
                <div className="relative profile-container">
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center gap-x-2 p-2 hover:text-purple-600 hover:bg-purple-100 rounded-full transition"
                  >
                    <IoPersonCircle size={24} />
                    <span className="hidden lg:block font-semibold text-gray-700">
                      {user?.name || "User"}
                    </span>
                    <IoChevronDown
                      size={16}
                      className={`hidden lg:block transition-transform duration-200 ${isProfileOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {/* Dropdown */}
                  {isProfileOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50 overflow-hidden">
                      <Link
                        to="/order"
                        onClick={() => setIsProfileOpen(false)}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        🧾 My Orders
                      </Link>
                      <button
                        onClick={logout}
                        className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        🚪 Logout
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 hover:text-purple-600 hover:bg-purple-100 rounded-full transition"
              >
                {isMobileMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu can go here */}
      </nav>

      <div className="h-16 lg:h-20" />
    </>
  );
};

export default Navbar;
