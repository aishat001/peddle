import React from 'react';
import ownerImage from '../assets/char.png'
import user from '../assets/user.png'
import location from '../assets/location.png'
import serrver from '../assets/Server.png'
import 'animate.css';


/* eslint-disable */


export default function Home() {

    return (
        <section id="home">
            <div className="flex flex-col-reverse md:flex-row px-10 sm:px-8  md:px-20 lg:px-40 sm:py-12 sm:gap-x-8 md:py-16 text-center md:text-left animate__fadeInDown">
                <div className="relative z-10 pt-10 md:pt-20 pb-3 w-full md:w-3/6">
                    <h2 className="text-xl h-text-shadow text-black font-semibold lg:w-80 sm:text-2xl sm:leading-7 mb-4 md:text-3xl">We Are Everything We
                        Aspire To BE</h2>
                    <div className="absolute bg-1"></div>
                    <div className="col-start-1 row-start-3 space-y-3 sm:px-0">
                        <p className="flex items-center text-black text-sm font-medium dark:text-gray mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac orci condimentum lectus efficitur tempor vel eu massa. Sed molestie turpis eget ipsum malesuada dignissim
                        </p>
                        <button type="button" className="bg-lemon btn-shadow text-white font-semibold px-6 py-2 rounded-sm mr-3 dark:bg-white dark:text-dark w-40">Subscribe Now</button>
                    </div>
                </div>


                <img src={ownerImage} alt="" className=" object-contain rounded-full m-auto w-full md:w-3/6 animate__fadeInRight" width="350px" height="400px" />
            </div>

            <div className=" w-10/12 py-20 h-96 md:h-auto m-auto bg-white flex justify-center flex-row flex-wrap div-shadow rounded-lg mt-20">
                <div className="inline-flex items-center justify-center w-60">
                    <img src={user} alt="" className=""/>
                    <div className="flex flex-col ml-4">
                        <strong>90+</strong>
                        <p>Users</p>
                    </div>
                </div>
                <div className="inline-flex items-center w-60 justify-center lg:border-l-2 lg:border-r-2">
                    <img src={location} alt="" className=""/>
                    <div className="flex flex-col ml-4">
                        <strong>30+</strong>
                        <p>Locations</p>
                    </div>
                </div>
                <div className="inline-flex items-center justify-center w-60">
                    <img src={serrver} alt="" className=""/>
                    <div className="flex flex-col ml-4">
                        <strong>50+</strong>
                        <p>Servers</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
