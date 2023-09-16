"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Next.js</li>
        <li>React.js</li>
        <li>TypeScript</li>
        <li>Javascript</li>
        <li>Python</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Java</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
        <ul className="list-disc pl-2">
        <li>AISSMS College Of Engineering - 8.02 CGPA (Bachelor Of Engineering)</li>
        <li>Jawaharlal Darda Junior College - 70.43% (Higher Secondary Certification)</li>
    </ul>
    
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
        <ul className="list-disc pl-2">
        <li>Software Engineering Virtual Experience Program - Goldman Sachs, August 2023</li>
        <li>AI for Everyone - IBM, January 2022</li>
        <li>Prompt Engineering for ChatGPT - Vanderbilt University, August 2023</li>
        <li>Python Basics for Data Science - IBM, May 2022</li>
        <li>Blockchain Basics - University of Buffalo, January 2023</li>
        <li>Programming For Everybody, Getting Started With Python - University Of Michigan, October 2021</li>
    </ul>
    
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
        <Image src="/Images/about-image.png" alt="about-image" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-white texxt-base md:text-lg">
          Hello, I&apos;m Pranav Rathod, a Computer Engineering graduate with a passion for creating dynamic web solutions. My skill set includes JavaScript, React, Redux, Node, TypeScript, Next, HTML, CSS and Git, which I use to craft engaging web applications. I have a constant hunger for learning and enjoy expanding my knowledge base. I excel in collaborative team environments, working enthusiastically with others to deliver exceptional web projects.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;