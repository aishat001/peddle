import React from 'react'
import { plans } from '../../data'
import check from '../assets/check.png'

export default function Plans() {

    return (
        <section id="plans">
            <div className="pt-40 px-3 text-center mb-5">
            <h2 className="text-2xl text-black font-semibold  sm:text-3xl sm:leading-7 mb-4 md:text-4xl w-80 text-center m-auto text-wrap">Choose Your Plan</h2>
            <p className=" text-black text-sm font-medium dark:text-gray mb-4 w-60 sm:w-80 text-center m-auto text-wrap">
            Let's choose the package that is best for you and explore it happily and cheerfully.                       </p>
            </div>
                            <div className="flex flex-col md:flex-row m-auto justify-center flex wrap " >
                    {
                        plans.map(p => {
                            return <div
                                key={p.id}
                                className=" bg-white sm:shadow-md sm:border border-gray-200 rounded-lg h-100 w-80 mb-10  md:mx-4 p-4 dark:bg-primary w-10/12 sm:w-7/12 md:w-2/5 lg:w-1/5 m-auto text-center"
                            >
                                <div className="w-10/12 m-auto h-40 p-5 mb-3 rounded-lg flex items-center bg-white bg-opacity-75 ">
                                <img className=" h-full m-auto" src={p.image} alt="" width="200px"/>
                                </div>
                                <div className="mb-5 w-3/10 text-center h-40 sm:h-60 flex flex-col">
                                        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white mx-auto">{p.title}</h5>
                                        <div className="flex flex-col w-4/5 justify-between items-center"></div>
                                    {
                                        p.subtitle.map(s => <div className="inline-flex m-auto"><img src={check} className="w-4 h-4 mr-4" alt="checkIcon"/>{s}</div>)
                                    }
                                </div>
                                    <p className="font-normal text-bold text-3xl text-center p-0 dark:text-gray mt-2 sm:mt-8 mb-5" key={p.title}>{p.price}</p>
                                    <button
                  className="px-3 py-2 text-xs uppercase font-bold text-lemon leading-snug hover:opacity-75 btn-border-color border rounded-md w-40 text-center m-auto"
                  href="#projects"
                >Select</button>
                                </div>
 

                        })

                    }
                    </div>
        </section>
    )
}
