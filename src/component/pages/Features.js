import React from 'react';
import ownerImage from '../assets/features.png'

/* eslint-disable */


export default function Home() {

    return (
        <section id="features">
            <div className="flex flex-col-reverse md:flex-row-reverse px-10 sm:px-8  md:px-10 lg:px-40 sm:py-12 sm:gap-x-8 md:py-16 text-center md:text-left pt-40">
                <div className="relative z-10 pt-10 md:pt-20 pb-3 w-full md:w-3/6">
                    <h2 className="text-xl text-black font-semibold  sm:text-2xl sm:leading-7 mb-4 md:text-3xl">Features We Provide For You</h2>
                    <div className="absolute bg-1"></div>
                    <div className="col-start-1 row-start-3 space-y-3 sm:px-0">
                        <p className="flex items-center text-black text-sm font-medium dark:text-gray mb-4">
                        Curabitur tempor justo non turpis malesuada cursus. Mauris ac libero eu sem finibus lacinia nec pulvinar.                        </p>
                        <div className="txt-center md:text-left flex flex-col ">
                            <div className="inline-flex items-center m-auto md:m-0 mb-2"><span className="w-4 h-4 bg-lemon mr-2 rounded-md"></span>Curabitur tempor justo</div>
                            <div className="inline-flex items-center m-auto md:m-0 mb-2"><span className="w-4 h-4 bg-lemon mr-2 rounded-md"></span>Curabitur tempor justo</div>
                            <div className="inline-flex items-center m-auto md:m-0 mb-2"><span className="w-4 h-4 bg-lemon mr-2 rounded-md"></span>Curabitur tempor justo</div>
                            <div className="inline-flex items-center m-auto md:m-0 mb-2"><span className="w-4 h-4 bg-lemon mr-2 rounded-md"></span>Curabitur tempor justo</div>
                        </div>
                    </div>
                </div>


                <img src={ownerImage} alt="" className=" object-contain rounded-full m-auto w-full md:w-3/6" width="350px" height="400px" />
            </div>
        </section>
    )
}
