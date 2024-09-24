import React from "react";
import Logo from "../../assets/food-logo.png";
import { RiShoppingCart2Line } from "react-icons/ri";
import DarkMode from "./DarkMode";

function Navbar() {
    return (
        <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
            <div className="container py-3 sm:py-0">
                <div className="flex justify-between items-center">
                    <div>
                        <a
                            href="#"
                            className="flex items-center gap-2 text-2xl font-bold sm:text-3xl"
                        >
                            <img src={Logo} alt="" className="w-10 " />
                            Foodie Zone
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <div>
                            <DarkMode />
                        </div>
                        <ul className="hidden sm:flex items-center gap-4">
                            <li>
                                <a
                                    href=""
                                    className="inline-block py-4 px-4 hover:text-primary"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href=""
                                    className="inline-block py-4 px-4 hover:text-primary"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href=""
                                    className="inline-block py-4 px-4 hover:text-primary"
                                >
                                    Contant
                                </a>
                            </li>
                        </ul>
                        <button className="bg-gradient-to-r from-primary to-secondary px-4 py-1 text-white rounded-full hover:scale-105 duration-300 flex items-center gap-3">
                            Order
                            <RiShoppingCart2Line className="text-xl text-white drop-shadow-sm cursor-pointer" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
