import React from 'react';
import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import heroProfileImage from '../assets/hero-profile.png';

const AboutMe = () => {
    return (
      <div className="xl:mt-12 flex flex-col gap-10 overflow-hidden md:flex-row">
        <motion.div>
          <p className={styles.sectionSubText}>What I have Done And my</p>
          <h2 className={styles.sectionHeadText}>Work Experience</h2>
        </motion.div>
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="md:w-[40%] md:h-[600px] bg-gradient-to-r from-[#4A47A3] via-[#7068B3] to-[#8B83C3] p-8 rounded-2xl"
        >
          <motion.img
            src={heroProfileImage}
            alt="My Image"
            className="w-full h-auto  rounded-full shadow-lg"
            whileHover={{
                scale: 1.1,
                borderRadius: "50%", // Change border radius on hover
                imageRendering: "pixelated", // Maintain pixelated appearance
              }}
          />
        </motion.div>
  
        <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className="md:w-[25%]">
          <p className="sm:text-[17px] text-[14px] text-secondary uppercase tracking-wider">
            Hi, I'm Aryan Rajendra Saroj, a dedicated web developer. I completed my BBA (CA) in 2023, majoring in computer technology. Currently, I'm working as a full-stack web developer at Marketinlab.
            Passionate about crafting engaging web experiences, I specialize in creating modern and responsive applications. My journey involves staying on the cutting edge of technology to deliver innovative solutions. Let's collaborate and bring your ideas to life!
          </p>
        </motion.div>
      </div>
    );
  };
  

export default SectionWrapper(AboutMe, '');
