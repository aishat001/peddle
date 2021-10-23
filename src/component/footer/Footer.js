import React from 'react'
import peddleLogo from '../assets/PEDDLE.png'

export default function Footer() {
    return (
        <footer id="footer" className="mt-60">
            <div className="absolute w-10/12 py-10 m-auto bg-white flex justify-between flex-row flex-wrap div-shadow rounded-lg mt-20 px-5 items-center margin-minus m-auto">
                <div className=" px-3 md:text-left">
                    <h2 className="text-2xl text-black font-semibold  sm:text-3xl sm:leading-7 mb-4 sm:w-80 md:text-left">Subscribe Now for Get Special Features!</h2>
                    <p className=" text-black text-sm font-medium dark:text-gray mb-4 w-60 md:text-left text-wrap">
                    Praesent mollis lobortis nisl nec laoreet.</p>

                </div>
                <button type="button" className="bg-lemon btn-shadow text-white font-semibold px-6 py-2 rounded-sm mr-3 dark:bg-white dark:text-dark w-40 h-10">Subscribe Now</button>

            </div>
                <div className="h-40 bg-footer w-full">

                </div>
            <div className=" flex flex-row flex-wrap p-10 justify-between bg-footer w-full">
                <div className="mb-6 w-80">
                    <img src={peddleLogo} alt="" className="mb-4" />
                    <p>Praesent mollis lobortis nisl nec laoreet. Duis euismod nisl nec ante egestas ullamcorper. Duis id mauris consequat, ultrices ligula at, laoreet mag.</p>
                </div>
                <div className="products flex flex-col h-40 justify-between w-10/12 sm:w-40 mb-5">
                    <h2 className="text-2xl">Products</h2>
                    <span>Praesent</span>
                    <span> Laoreet</span>
                    <span> Laoreet</span>
                    <span>Server</span>
                </div>
                <div className="products flex flex-col h-40 justify-between w-10/12 sm:w-40 mb-5">
                    <h2 className="text-2xl text-bold">Engage</h2>
                    <span>Mauris</span>
                    <span> Aenean</span>
                    <span> Linsean</span>
                    <span>Lingula</span>
                </div>
                <div className="products flex flex-col h-20 justify-between w-10/12 sm:w-40 mb-5">
                    <h2 className="text-2xl">Earn Money</h2>
                    <span>Ultrices</span>
                    <span> Fusce</span>
                </div>

                <div className="w-full py-5">©2020PADDLE</div>
            </div>

        </footer>
    )
}
