import React from "react";
import bgImg from "../../assets/vector3.png";
import Food1 from "../../assets/biryani2.png";
import Food2 from "../../assets/biryani3.png";
import Food3 from "../../assets/biryani5.png";

const ImageList = [
    {
        id: 1,
        img: Food1,
    },
    {
        id: 2,
        img: Food2,
    },
    {
        id: 3,
        img: Food3,
    },
];

const bgImage = {
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};

function Hero() {
    const [imageId, setImageId] = React.useState(Food1);
    return (
        <>
            <div
                style={bgImage}
                className="min-h-[550px] sm:min-h-[600px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
            >
                <div className="container pb-8 sm:pb-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        {/* text content section */}
                        <div
                            data-aos="zoom-out"
                            data-aos-duration="400"
                            data-aos-once="true"
                            className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                                Welcome to the <span className="text-primary">Foodie</span> Zone
                            </h1>
                            <p className="text-sm">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptatem laboriosam porro,
                                sapiente repudiandae magnam impedit vel sequi
                                minus labore nulla illum rerum ducimus sunt eius
                                vero eveniet inventore consequatur odit.
                            </p>
                            <div>
                                <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-200">
                                    Order Now
                                </button>
                            </div>
                        </div>
                        {/* image section */}
                        <div className="order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative flex-col lg:flex-row">
                            {/* main image section */}
                            <div className="flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden">
                                <img
                                    data-aos="zoom-in"
                                    data-aos-duration="300"
                                    data-aos-once="true"
                                    src={imageId}
                                    alt=""
                                    className="w-[300px] sm:w-[450px] mx-auto spin"
                                />
                            </div>
                            {/* main list section */}
                            <div className="flex lg:flex-col bg-white/30 rounded-full lg:py-2 px-1 justify-center gap-4 items-center">
                                {ImageList.map((item) => (
                                    <img
                                    data-aos="zoom-in"
                                    data-aos-duration="400"
                                    data-aos-once="true"
                                        key={item.id}
                                        src={item.img}
                                        onClick={() => setImageId(item.img)}
                                        className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
