"use client"
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion

const socialLinks = {
  github: "https://github.com/pranav0823",
  linkedin: "https://www.linkedin.com/in/pranav-rathod-99a670222/",
  instagram: "https://www.instagram.com/pranavbr_23",
};

const AchievementsSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 100 }, // Start from the bottom
    visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 1 } }, // Animate to the current position
  };

  return (
    <motion.div
      className="py-4 pr-2 xl:gap-16 sm:py-8 xl:px-8 flex justify-center sm:justify-left items-center"
      variants={containerVariants} // Apply animation variants
      initial="hidden" // Set the initial state to hidden
      animate="visible" // Trigger animation when the component mounts
    >
      {/* Container for Icons */}
      <div className="sm:border-[#33353F]  py-4 px-8 flex items-center justify-between bg-transparent w-1/2 space-x-4">
        {/* Icons for GitHub, LinkedIn, and Instagram with links */}
        <div className="flex items-center">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-4xl text-white" />
          </a>
        </div>
        <div className="flex items-center">
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-4xl text-white" />
          </a>
        </div>
        <div className="flex items-center">
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-4xl text-white" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default AchievementsSection;
