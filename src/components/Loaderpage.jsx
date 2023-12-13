import React from 'react';
import { BarLoader } from 'react-spinners';
import { motion } from 'framer-motion';
import { logo } from '../assets';
import { loaderimg } from "../assets";

const Loader = () => {
    const containerStyle = {
        // Background styles
        backgroundImage: `url(${loaderimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
    const logoMotionProps = {
        initial: { opacity: 0, scale: 0.8, },
        animate: { opacity: 1, scale: 1.2, },
        transition: { duration: 0.5, repeat: Infinity, repeatType: 'reverse' },
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen" style={containerStyle}>
            {/* Your logo */}
            <motion.div className="logo" {...logoMotionProps}>
                {/* Your logo image */}
                <img src={logo} alt="Logo" className="w-60 h-70 mb-2 rounded-full"/>
            </motion.div>
            {/* Loading animation */}
            <BarLoader color="#964bff" loading={true} size={50} />
            {/* Your name */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
            >
                {/* <h1 className="text-white text-4xl font-bold tracking-wide mb-4">ARYAN SAROJ</h1> */}
            </motion.div>
        </div>
    );
};

export default Loader;
