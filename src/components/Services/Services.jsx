import React from "react";
import Img1 from "../../assets/biryani2.png";
import Img2 from "../../assets/biryani3.png";
import Img3 from "../../assets/biryani5.png";

const ServicesData = [
    {
        id: 1,
        img: Img1,
        name: "Biryani",
        description:
            "Lorem ipsun dolor sit amet dolor sit atipsum doloo sit amet ipsum dolor sit amet",
    },
    {
        id: 2,
        img: Img2,
        name: "Biryani",
        description:
            "Lorem ipsun dolor sit amet dolor sit atipsum doloo sit amet ipsum dolor sit amet",
    },
    {
        id: 3,
        img: Img3,
        name: "Biryani",
        description:
            "Lorem ipsun dolor sit amet dolor sit atipsum doloo sit amet ipsum dolor sit amet",
    },
];

function Services() {
    return (
        <>
            <div className="py-10 dark:bg-[#111827]">
                <div className="container">
                    {/* Header Section */}
                    <div className="text-center max-w-[400px] mx-auto">
                        <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
                            Our Services
                        </p>
                        <h1 className="text-3xl font-bold dark:text-white">
                            Services
                        </h1>
                        <p className="text-xs text-gray-400">
                            {"  "}
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Perferendis ea, vero aliquid quaerat
                            asperiores odit laboriosam autem itaque quia minus
                            laudantium. Id modi rerum inventore harum debitis
                            fugit dicta! Sit?
                        </p>
                    </div>
                    {/* Card section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center items-center">
                        {ServicesData.map(({ id, img, name, description }) => {
                            return (
                                <div
                                    data-aos="zoom-in"
                                    data-aos-duration="300"
                                    key={id}
                                    className="dark:bg-[#1F2937] dark:text-white relative rounded-xl hover:bg-primary dark:hover:bg-primary group duration-300 mt-24 hover:text-white shadow-xl"
                                >
                                    <div className="absolute -top-20 inset-x-0 flex justify-center">
                                        <img
                                            src={img}
                                            alt=""
                                            className="w-40 h-40 object-cover inline-block group-hover:scale-105 group-hover:rotate-6 duration-300"
                                        />
                                    </div>
                                    <div className="px-4 py-2 mt-20">
                                        <h1 className="text-center font-bold text-xl">
                                            {name}
                                        </h1>
                                        <p className="text-gray-400 group-hover:text-white mb-2 duration-300">
                                            {description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;
