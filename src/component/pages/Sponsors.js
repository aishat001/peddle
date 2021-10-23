import React from 'react'
import neflix from '../assets/netflix.png';
import reddit from '../assets/reddit.png';
import amazon from '../assets/amazon.png';
import discord from '../assets/discord.png';
import spotify from '../assets/spotify.png';

export default function Sponsors() {
    return (
        <section id="sponsors">
            <div className="pt-20 px-3 text-center mb-5">
            <h2 className="text-2xl text-black font-semibold  sm:text-3xl sm:leading-7 mb-4 md:text-4xl sm:w-80 lg:w-6/12 text-center m-auto text-wrap">Get Started With Paddle Today</h2>
            <p className=" text-black text-sm font-medium dark:text-gray mb-4 sm:w-80 md:w-5/7 text-center m-auto text-wrap">
            Praesent mollis lobortis nisl nec laoreet. Duis euismod nisl nec ante egestas ullamcorper                     </p>
            <button type="button" className="bg-lemon btn-shadow text-white font-semibold px-6 py-2 rounded-sm mr-3 btn-hover w-40">Start Today</button>

            </div>
            <div className="flex flex-col md:flex-row flex-wrap w-9/12 justify-center items-center mx-auto mt-10">
                <img src={neflix} alt="netflix" className="sm:w-1/5 h-auto"/>
                <img src={reddit} alt="netflix" className="sm:w-1/5 h-auto"/>
                <img src={amazon} alt="netflix" className="sm:w-1/5 h-auto"/>
                <img src={discord} alt="netflix" className="sm:w-1/5 h-auto"/>
                <img src={spotify} alt="netflix" className="sm:w-1/5 h-auto"/>
            </div>
        </section>
    )
}
