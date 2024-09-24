import React from "react";
import iamg5 from "../../assets/biryani5.png";
import { RiBoxingLine, RiBrush3Fill, RiAlignItemHorizontalCenterFill   } from "react-icons/ri";

function Banner() {
    return (
        <div className=" min-h-[550px] dark:bg-[#111827]">
            <div
                data-aos="slide-up"
                data-aos-duration="300"
                className="container grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Banner image */}
                <div className="">
                    <img
                        src={iamg5}
                        alt=""
                        className="min-w-[330px] w-full mx-auto justify-center"
                    />
                </div>
                <div className="dark:text-gray-400 text-black">
                    <h1 className="dark:text-white text-3xl font-bold ">
                        What about that food
                        <br />
                        <br />
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Ut, dicta. Dolorem omnis modi cupiditate n
                        <br />
                        <br />
                    </p>
                    <span>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Explicabo, ex saepe. Libero vitae deleniti laborum a totam
                        dicta odit
                    </span>
                    <div className="flex gap-5 mt-5">
                      <div className="px-4 py-3 bg-lime-600 rounded-full hover:scale-105"><RiBoxingLine className="text-5xl text-white"/></div>
                      <div className="px-4 py-3 bg-indigo-500 rounded-full hover:scale-105"><RiBrush3Fill className="text-5xl text-white"/></div>
                      <div className="px-4 py-3 bg-secondary rounded-full hover:scale-105"><RiAlignItemHorizontalCenterFill className="text-5xl text-white"/></div>
                    </div>
                    <button className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white text-xl rounded-full mt-5 hover:scale-105">
                      Order Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Banner;
