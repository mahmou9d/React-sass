/* eslint-disable no-unused-vars */
import React from 'react'
import "../Styles/analytics.scss";
import { motion, useAnimation } from "framer-motion";
import  { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const analytics = [
  {
    name: "Active users",
    desc: "12M",
  },
  {
    name: "Languages",
    desc: "16",
  },
  {
    name: "Support",
    desc: "24/7",
  },
];
const Analytics = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("vissible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const list = {
    vissible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };
  const item1 = {
    vissible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stifness: 300,
        damping: 24,
        delay: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      x: -100,
    },
  };
  const item2 = {
    vissible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stifness: 300,
        damping: 24,
        delay: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      x: 100,
    },
  };

  return (
    <div className="app__analytics">
      <motion.div
        ref={ref}
        animate={control}
        variants={list}
        className="analytics__container"
      >
        <motion.div variants={item1} className="left__analytics">
          <div className="left__text">
            <h1>Okay, let's see M'task in numbers</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit neque voluptas temporibus consectetur, accusantium,
              soluta eligendi fuga fugiat doloremque sequi corrupti. Nam eveniet
              odio sapiente eum? Quod accusamus distinctio incidunt.
            </p>
          </div>
          <div className="left__analytics__container">
            {analytics.map((analytic, index) => (
              <div className="analytic__container" key={index}>
                <div className="analytics__icon">{analytic.desc}</div>
                <p>{analytic.name}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div variants={item2} className="right__analytics">
          <img src="./Images/onephone.jpg" alt="" draggable={false} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Analytics;
