import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 obj-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hello There! My name is Colin, and I am a software developer studying
        Computer Science at Purdue University. I am interested facing new
        challenges and creating innovative solutions for these challenges. I
        embrace new ideas and technologies, working towards a greater
        understanding of the world around me.
      </motion.p>
      <br />
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Some of my interests include:
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Key Skills & Technologies</p>
        <h2 className={styles.sectionHeadText}>My Skills</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I have expertise in programming with Java, C, C++, Python, JavaScript,
        and PHP. For front-end, I have experience creating applications with
        React and React Native and designing websites with HTML, CSS,
        JavaScript, and TypeScript. For back-end, I've created projects in Djago
        and Rust. I am also familiar with testing local servers and databases
        with MySQL and XAMPP. I am also familiar devloping in Linux with Bash
        and source control with Git.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
