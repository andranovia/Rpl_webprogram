import NavApp from "../Nav-App/NavApp-Page";
import "./HomeApp.css";
import HeroTextApp from "./TextHeroApp";
import ConnectedDots from "./ConnectedDot-HomeApp";
import SchoolImage from "../../../public/img/school_image.jpg";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HomeApp = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Allow animations to repeat when becoming visible again
    threshold: 0.1,
  });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setVisible(true);
    } else {
      setVisible(false); // Reset visible state when element exits viewport
    }
  }, [inView]);

  return (
    <div>
      <NavApp />
      <section className="py-20 relative pl-10 sm:mb-[10rem]">
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
          <div className="flex flex-col justify-center items-start md:w-full px-2 py-0 ">
            <div className="">
              <HeroTextApp />
            </div>
            <button className="py-3 px-4 bg-blue-500 rounded-full ">
              View More!
            </button>
          </div>
        </div>
      </section>
      <div className="relative ">
      <section className="py-20 pl-2 mb-[15rem] sm:ml-[10rem]">
      <div className="absolute inset-0 z-0 mr-10 sm:ml-[10rem]">
        <ConnectedDots />
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40}}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="relative z-10 w-[20rem] ml-[5rem]"
      >
        <img src={SchoolImage} alt="" className="rounded-md" />
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative container text-left flex justify-center sm:ml-[25rem] sm:w-[42rem] sm:bottom-[12rem]"
      >
        <div className="grid grid-cols-1 ml-20">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative font-poppins justify-center mb-[2rem]"
          >
            <h1 className="text-2xl font-bold text-[#434343] relative z-10 sm:text-2xl mt-5 md:mt-0 mb-4">About us</h1>
            <p className="text-xl font-normal text-[#8b8b8b] relative z-10 sm:text-2xl">At SMKN 1 Purwosari, the Software Engineering major is a standout program designed to prepare students </p>
            <p className="text-xl font-normal text-[#aaaaaa] relative z-10 sm:text-2xl">for success in the rapidly evolving tech industry. </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
      </div>

      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Feature 1</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Feature 2</h3>
              <p className="text-gray-600">
                Praesent tincidunt ante non tortor accumsan, eget fermentum
                dolor auctor.
              </p>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Feature 3</h3>
              <p className="text-gray-600">
                Fusce venenatis odio ut massa luctus, sit amet volutpat purus
                posuere.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
            Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                eu dictum libero.
              </p>
              <p className="font-semibold">- John Doe</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                Pellentesque efficitur arcu id libero consequat, at posuere quam
                vehicula.
              </p>
              <p className="font-semibold">- Jane Smith</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
            Contact Us
          </h2>
          <p className="text-gray-600 mb-8">
            Have questions or want to get in touch? Fill out the form below!
          </p>
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full border-gray-300 border p-3 rounded focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full border-gray-300 border p-3 rounded focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Message"
                rows="5"
                className="w-full border-gray-300 border p-3 rounded focus:outline-none focus:ring focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-500 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomeApp;
