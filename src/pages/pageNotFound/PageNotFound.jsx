import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-pink-50 px-6 py-12">
            <div className="text-center">
                <h1 className="text-7xl font-bold text-purple-500 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
                <p className="text-gray-600 mb-6">
                    Oops! The page you’re looking for doesn’t exist or has been moved.
                </p>
                <Link
                    to="/"
                    className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-6 rounded-full transition duration-300"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default PageNotFound;
