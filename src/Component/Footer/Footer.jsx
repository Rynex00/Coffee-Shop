import React from "react";
import FooterImg from "../../assets/website/coffee-footer.jpg";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterImage = {
  backgroundImage: `url(${FooterImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    titel: "HOME",
    link: "/#",
  },
  {
    titel: "ABOUT",
    link: "/#about",
  },
  {
    titel: "CONTACT",
    link: "/#contact",
  },
  {
    titel: "BLOG",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div style={FooterImage}>
      <div className="container mx-auto px-4 pt-24 text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
          <div className=" space-y-5 ">
            <div data-aos="zoom-in">
              <a
                href="#"
                className="text-2xl sm:text-4xl font-bold font-pacifico"
              >
                Coffee Cafe
              </a>
            </div>
            <p data-aos="fade-up" data-aos-delay="300">
              Crafted Coffee, Cozy Vibes, Unforgettable Moments – Your Perfect
              Espresso Escape
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="400"
              className=" bg-brandDark/70 px-8 py-2 rounded-full font-semibold hover:scale-105 duration-300"
            >
              Visit Our YouTube Channel
            </button>
          </div>

          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 pt-6 sm:pt-0 pl-0 sm:pl-20">
            {/* frist link */}
            <div>
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-xl font-bold sm:text-left mb-3"
              >
                Footer Links
              </h1>
              <ul className=" space-y-5">
                {FooterLinks.map((data, index) => (
                  <li data-aos="fade-up" data-aos-delay="400" key={index}>
                    <a
                      className=" inline-block hover:font-semibold hover:scale-105 duration-200"
                      href={data.link}
                    >
                      {data.titel}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* address */}
            <div className=" space-y-4 pl-0 sm:pl-20">
              <h1
                data-aos="fade-up"
                className="text-xl font-bold sm:text-left mb-3"
              >
                Address
              </h1>
              <p data-aos="fade-up" data-aos-delay="300">
                Noida, India
              </p>
              <p data-aos="fade-up" data-aos-delay="400">
                +91 1234XXXXXXX
              </p>
              <div className="flex gap-3 text-4xl  ">
                <div data-aos="fade-up" data-aos-delay="600">
                  {<FaFacebook className=" hover:scale-110 duration-300" />}
                </div>

                <div data-aos="fade-up" data-aos-delay="700">
                  {<FaLinkedin className=" hover:scale-110 duration-300" />}
                </div>
                <div data-aos="fade-up" data-aos-delay="800">
                  {<FaInstagram className=" hover:scale-110 duration-300" />}
                </div>
              </div>
            </div>
          </div>

          {/* Get In Touch */}
          <div className="pt-5 sm:pt-0 space-y-4">
            <h1
              data-aos="fade-right"
              className="text-2xl sm:text-4xl font-semibold font-poppins"
            >
              Get In Touch
            </h1>
            <div>
              <p
                data-aos="fade-right"
                data-aos-delay="300"
                className="pt-2 font-semibold"
              >
                {" "}
                Your Name:
              </p>
              <input
                data-aos="fade-left"
                data-aos-delay="400"
                type="text"
                className="w-full  outline-none bg-transparent border rounded-lg p-2"
              />

              <p
                data-aos="fade-right"
                data-aos-delay="300"
                className="pt-3 font-semibold"
              >
                Your Email:
              </p>
              <input
                data-aos="fade-left"
                data-aos-delay="400"
                type="email"
                placeholder=" "
                className="w-full  outline-none bg-transparent border rounded-lg p-2"
              />

              <p
                data-aos="fade-right"
                data-aos-delay="400"
                className="pt-3 font-semibold"
              >
                Your Message:
              </p>
              <textarea
                data-aos="fade-left"
                data-aos-delay="400"
                name=""
                id=""
                cols=""
                rows=""
                className="w-full  outline-none bg-transparent border rounded-lg p-2"
              ></textarea>
            </div>
          </div>
        </div>
        <br />
        <br />
        <hr data-aos="zoom-in" />
        <p data-aos="fade-up" className="py-10 sm:py-16 flex justify-center">
          © copyright 2018 | All right reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
