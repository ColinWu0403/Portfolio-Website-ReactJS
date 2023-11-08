import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import PDFViewer from "./PDFViewer";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[70px] flex-wrap`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Resume</p>
          <h2 className={styles.sectionHeadText}>Resume</h2>
        </motion.div>
      </div>
      <PDFViewer />
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[40px] flex-wrap`}
      >
        <button
          type="submit"
          className=" bg-tertairy py-5 px-9 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
        >
          <a href="./ChiCheColinWuResume.pdf" download>
            <h3 className="text-white font-bold text-[18px] hover:text-teal-200 transition-all">
              Download Resume
            </h3>
          </a>
        </button>
      </div>

      {/* <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div> */}
    </div>
  );
};

export default SectionWrapper(Feedbacks, "resume");
