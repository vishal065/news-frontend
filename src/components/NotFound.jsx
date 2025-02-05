import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl font-bold"
            >
                404
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg mt-4"
            >
                Oops! The page you are looking for does not exist.
            </motion.p>
            <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className="mt-6"
            >
                <Link
                    to="/"
                    className="px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 transition-all"
                >
                    Back to Home
                </Link>
            </motion.div>
        </div>
    );
};

export default NotFound;
