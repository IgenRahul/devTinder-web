import React from 'react';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-gray-400">404</h1>
                <p className="text-2xl font-semibold text-gray-600">Oops! Page not found</p>
                <p className="mt-4 text-gray-500">The page you are looking for does not exist.</p>
                <a href="/" className="mt-6 inline-block px-6 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700">
                    Go to Homepage
                </a>
            </div>
        </div>
    );
};

export default NotFound;