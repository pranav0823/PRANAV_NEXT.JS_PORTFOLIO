"use client";
import React, { useState,useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";



const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Skills- Next.js, Framer-Motion, CSS, Emailjs",
    image: "/Images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl:"https://github.com/pranav0823/Next.js-Portfolio-Website",
    previewUrl:"/"
  },
  {
    id: 2,
    title: "AI Article Summarizer",
    description: "Skills- React.js, RAPID API, JavaScript",
    image: "/Images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl:"https://github.com/pranav0823/AI-Article-Summarizer",
    previewUrl:"https://pranav-article-summarizer.netlify.app/"
  },
  {
    id: 3,
    title: "AI Image Generator",
    description: "Skills- MERN Stack , React.js , Openai , MongoDB , Express.js , Node.js [Note- Try creating an Image first and Sharing it with community.]",
    image: "/Images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl:"https://github.com/pranav0823/DALLE-CLONE",
    previewUrl:"http://pranav-ai-image-generator.netlify.app/"
  },
  {
    id: 4,
    title: "Virtual Keyboard and Mouse",
    description: "Skills: Python (Programming Language), Human Computer Interaction, Image Processing, Hand Gestures.",
    image: "/Images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/pranav0823/Virtual-keyboard-and-mouse-Final-year-project-",
    previewUrl: "https://github.com/pranav0823/Virtual-keyboard-and-mouse-Final-year-project-"
  },
  {
    id: 5,
    title: "Three.js based 3D Sphere",
    description: "Skills- Three.js , GSAP , VITE",
    image: "/Images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl:"https://github.com/pranav0823/threejs-sphere",
    previewUrl:"https://pranav-threejs-sphere.netlify.app/"
  },
  
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    
    <section ref={ref}>
      <h2 id="my-projects" className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
     
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
         
         <motion.li
         key={index}
         variants={cardVariants}
         initial="initial"
         animate={isInView ? "animate" : "initial"}
         transition={{ duration: 0.3, delay: index * 0.4 }}
       >
         <div id={`project-${project.id}`}> {/* Add id here */}
           <ProjectCard
             key={project.id}
             title={project.title}
             description={project.description}
             imgUrl={project.image}
             gitUrl={project.gitUrl}
             previewUrl={project.previewUrl}
           />
         </div>
       </motion.li>
          
        ))}
      </ul>
    </section>
    
  );
};

export default ProjectsSection;