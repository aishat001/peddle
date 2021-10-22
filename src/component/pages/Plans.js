import React from 'react'
import { plans } from '../../data'
import check from '../assets/check.png'

export default function Plans() {

    return (
        <section id="plans">
            <div className="pt-20 px-3 text-center">
            <h2 className="text-xl h-text-shadow text-black font-semibold  sm:text-2xl sm:leading-7 mb-4 md:text-3xl w-40 text-center">Choose Your Plan</h2>
            <p className=" text-black text-sm font-medium dark:text-gray mb-4 w-60 text-center">
            Let's choose the package that is best for you and explore it happily and cheerfully.                       </p>
            </div>
                            <div className="flex flex-col flex wrap " >
                    {
                        plans.map(p => {
                            return <div
                                key={p.id}
                                className=" bg-white shadow-md border border-gray-200 rounded-lg h-100 w-80 mb-5 mx-4 p-4 dark:bg-primary w-11/12 sm:w-10/12 md:w-2/6"
                            >
                                <div className="w-10/12 m-auto h-40 p-5 mb-3 rounded-lg flex items-center bg-white bg-opacity-75 ">
                                <img className="w-full h-full m-auto" src={p.image} alt="" />
                                </div>
                                <div className="mb-2">
                                        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{p.title}</h5>
                                        <div className="flex flex-col w-4/5 justify-between items-center"></div>
                                    {
                                        p.subtitle.map(s => <div className="inline-flex"><img src={check} className="w-4 h-4 mr-4" alt="checkIcon"/>{s}</div>)
                                    }
                                </div>
                                    <p className="font-normal text-gray-700 p-0 dark:text-gray" key={p.title}>{p.price}</p>
                                    <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold text-lemon leading-snug hover:opacity-75 btn-border-color border rounded-md"
                  href="#projects"
                >Sign up</a>
                                </div>
 

                        })

                    }
                    </div>
        </section>
    )
}
