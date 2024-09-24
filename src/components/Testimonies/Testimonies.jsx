import React from "react";
import Slider from "react-slick";

const testimonialData = [
    {
        id: 1,
        name: "Samuel",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 1,
        name: "John Doe",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 1,
        name: "Smith",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/103/103",
    },
];

function Testimonies() {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
    };

    return (
        <div
            data-aos="fade-up"
            data-aos-duration="300"
            className="py-10 dark:bg-[#111827] bg-white"
        >
            <div className="container text-center mx-auto mb-20">
                <p className="text-primary">Testimonial</p>
                <h1 className="text-black dark:text-white text-3xl font-medium">
                    Testimonial
                </h1>
                <span className="text-black dark:text-gray-300">
                    e eius quas dolore quibusdam mollitia aspernatur voluptatum
                    eligendi, quo eos odit, aliquid voluptas! Recusandae?
                </span>
            </div>
            {/* testimonial section */}
            <div
                data-aos="zoom-in"
                data-aos-duration="300" 
                className=" max-w-[600px] mx-auto">
                <Slider {...settings}>
                    {testimonialData.map((data) => {
                        return (
                            <div className="my-6 ">
                                <div
                                    key={data.id}
                                    className="flex flex-col justify-center items-center dark:bg-[#1F2937] py-6 rounded-xl shadow-xl bg-primary/10 relative mx-4"
                                >
                                    <img
                                        src={data.img}
                                        alt=""
                                        className="rounded-full block mx-auto"
                                    />
                                    <p className="text-gray-500 text-center py-5">
                                        {data.text}
                                    </p>
                                    <h1 className="text-black dark:text-white text-2xl font-bold">
                                        {data.name}
                                    </h1>
                                    <p className="block absolute top-0 right-2 text-9xl text-gray-500 font-serif">
                                        ,,
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
}

export default Testimonies;
