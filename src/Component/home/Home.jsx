import React from "react";
import Coffee from "../../assets/website/coffee2.png";

const Home = () => {
  return (
    <div className="py-12 bg-brandDark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 flex-1 justify-center items-center">
          {/* text- content */}
          <div className="order-2 sm:order-1">
            <div className=" leading-4">
              <h1
                data-aos="fade-up"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl text-white font-bold "
              >
                We serve the richest{" "}
                <span
                  data-aos="zoom-out"
                  data-aos-delay="300"
                  className=" font-pacifico text-[#854D3D]"
                >
                  Coffee
                </span>{" "}
                in the city
              </h1>
            </div>

            <div data-aos="fade-up" data-aos-delay="400">
              <button className="text-white font-bold uppercase px-4 py-2 rounded-full bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 mt-8">
                Coffee And Code
              </button>
            </div>
          </div>

          {/* images conent */}
          <div
          data-aos="zoom-in"  
           className="min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative">
            <img
              className="spin mx-auto w-[300px] sm:w-[450px] sm:scale-110"
              src={Coffee}
              alt=""
            />

            <div data-aos="fade-left"
              className="bg-gradient-to-r from-primary to-secondary absolute p-3 
                    top-10  left-10  rounded-xl text-white font-semibold"
            >
              <h1>Hey Coder</h1>
            </div>

            <div data-aos="fade-right"
            className="bg-gradient-to-r from-primary to-secondary absolute p-3 bottom-10 right-10 rounded-xl text-white font-semibold">
              <h1>Hey Coder</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
