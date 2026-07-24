import React from "react";
import { motion } from "framer-motion";
import Navbar from "./navbar";
import homepg1 from "../../assets/homepg1.webp";
import homepg2 from "../../assets/homepg2.webp";
import { Link } from "react-router-dom";
/**
 * HomePage Component
 * Includes Hero section, Featured Produce Showcase, and "What We Believe" manifest.
 */
export default function HomePage() {
  // Reusable Smooth Animation Variant
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen selection:bg-green selection:text-white">
      {/* HEADER / NAVIGATION */}


      <main>
        {/* ==========================================
            HERO SECTION
            ========================================== */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="xl:max-w-[1030px] lg:mt-50 mx-auto flex gap-12 flex-col font-newsreader h-auto mt-20 px-4"
        >
          {/* Main Hero Title */}
          <h1 className="lg:text-[64px] tracking-[-2%] leading-[120%] text-black text-center md:text-5xl text-4xl">
            <span className="font-normal font-newsreader">We’re </span>
            <span className="italic">farmers, purveyors, </span>
            <span className="font-normal">and </span>
            <span className="italic">eaters </span>
            <span className="font-normal">of organically grown food.</span>
          </h1>

          {/* Call to Action Button */}

          <Link to="/product/1" className="block w-fit mx-auto">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-green text-white rounded-lg font-inter font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:bg-green-800 cursor-pointer px-4 py-2.5 text-sm sm:px-6 sm:py-3.5 sm:text-base lg:px-8 lg:py-5 lg:text-xl"
            >
              Browse our shop
            </motion.button>
          </Link>
        </motion.section>


        {/* ==========================================
            PRODUCE SHOWCASE (IMAGES GRID)
            ========================================== */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="ml-[20px] flex lg:flex-row xl:gap-[60px] lg:mt-[156px] items-center lg:gap-8 flex-col mt-8"
        >
          {/* Left Primary Image */}
          <div className="overflow-hidden transition-transform duration-500 hover:shadow-2xl">
            <img
              src={homepg1}
              alt="Organically grown food banner"
              className="w-full h-auto max-[800px]:max-w-[60%] min-[801px]:w-[50%] min-[801px]:h-full xl:w-[504px] xl:h-[693px] object-cover shrink-0 lg:w-[100%] transition-transform duration-700 hover:scale-105 mx-auto"
            />
          </div>

          {/* Right Image + Caption Stack */}
          <div>
            <div className="overflow-hidden transition-transform duration-500 hover:shadow-2xl">
              <img
                src={homepg2}
                alt="Organically grown food banner"
                className="xl:max-w-[780px] xl:h-[480px] object-cover mt-10 lg:w-[100%] md:w-[90%] sm:w-[90%] mx-auto transition-transform duration-700 hover:scale-105 mr-0"
              />
            </div>

            <p className="font-inter text-sm tracking-[-1%] leading-[160%] sm:mx-auto sm:px-16 xl:px-0 lg:px-0 mt-3 text-gray-700">
              <span className="font-medium text-black">Central California — </span>
              <span className="font-light">
                The person who grew these was located in Central California and, er, hopefully very well-compensated.
              </span>
            </p>
          </div>
        </motion.section>


        {/* ==========================================
            WHAT WE BELIEVE (MANIFESTO SECTION)
            ========================================== */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="mt-15 lg:mt-[153px] flex lg:flex-row gap-8 pb-5 flex-col px-4 sm:px-0"
        >
          {/* Section Heading */}
          <p className="font-inter text-sm font-semibold tracking-[0.04em] leading-[160%] w-[181px] shrink-0 uppercase text-gray-900">
            WHAT WE BELIEVE
          </p>

          {/* Section Body Text Block */}
          <div className="font-inter text-xl font-normal leading-[160%] text-left max-w-[822px] flex flex-col gap-8 tracking-[0%] text-gray-800">
            <p className="transition-colors duration-300 hover:text-black">
              We believe in produce. Tasty produce. Produce like:
            </p>

            <p className="transition-colors duration-300 hover:text-black">
              Apples. Oranges. Limes. Lemons. Guavas. Carrots. Cucumbers. Jicamas. Cauliflowers. Brussels sprouts. Shallots. Japanese eggplants. Asparagus. Artichokes—Jerusalem artichokes, too. Radishes. Broccoli. Baby broccoli. Broccolini. Bok choy. Scallions. Ginger. Cherries. Raspberries. Cilantro. Parsley. Dill.
            </p>

            <p className="font-medium text-black">
              What are we forgetting?
            </p>

            <p className="transition-colors duration-300 hover:text-black">
              Oh! Onions. Yams. Avocados. Lettuce. Arugula (to some, “rocket”). Persian cucumbers, in addition to aforementioned “normal” cucumbers. Artichokes. Zucchinis. Pumpkins. Squash (what some cultures call pumpkins). Sweet potatoes and potato-potatoes. Jackfruit. Monk fruit. Fruit of the Loom. Fruits of our labor (this website). Sorrel. Pineapple. Mango. Gooseberries. Blackberries. Tomatoes. Heirloom tomatoes. Beets. Chives. Corn. Endive. Escarole, which, we swear, we’re vendors of organic produce, but if you asked us to describe what escaroles are...
            </p>
          </div>
        </motion.section>
      </main>
    </div >
  );
}