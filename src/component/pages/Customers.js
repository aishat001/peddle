/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import { customers } from '../../data';
import { ArrowNarrowRightIcon } from '@heroicons/react/solid'
import { ArrowNarrowLeftIcon } from '@heroicons/react/solid';
import rating from '../assets/rating.png'

export default function Customers() {
    const [scrollX, setscrollX] = useState(0); // For detecting start scroll postion
    const [scrolEnd, setscrolEnd] = useState(false); // For detecting end of scrolling

    const scrl = useRef()

    useEffect(() => {
        //Check width of the scollings
        if (
            scrl.current &&
            scrl?.current?.scrollWidth === scrl?.current?.offsetWidth
        ) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
        return () => { };
    }, [scrl?.current?.scrollWidth, scrl?.current?.offsetWidth]);


    const slide = (shift) => {
        scrl.current.scrollLeft += shift;
        setscrollX(scrollX + shift); // Updates the latest scrolled postion

        //For checking if the scroll has ended
        if (
            Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
            scrl.current.offsetWidth
        ) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
    };

    //This will check scroll event and checks for scroll end
    const scrollCheck = () => {
        setscrollX(scrl.current.scrollLeft);
        if (
            Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
            scrl.current.offsetWidth
        ) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
    };



    return (
        <section id="customers">
                        <div className="pt-20 px-3 text-center mb-5">
            <h2 className="text-2xl text-black font-semibold  sm:text-3xl sm:leading-7 mb-4 sm:w-80 lg:w-5/12 text-center m-auto text-wrap">Trusted by Thousands of Happy Customer</h2>
            <p className=" text-black text-sm font-medium dark:text-gray  sm:w-80 text-center mx-auto mb-10 text-wrap">
            Nam laoreet cursus diam, sed tristique arcu semper non. Suspendisse et suscipit est, nec laoreet mi. Nunc pellentesque imperdiet ultricies.   </p>

            </div>


            <div className="overflow-x-auto sm:px-8 md:px-40 scrollBar" ref={scrl} onScroll={scrollCheck}>

                <div className="inline-flex" >
                    {
                        customers.map((customer, i) => {
                            return <div
                                className=" bg-white shadow-md border border-gray-200 rounded-lg  w-80 mb-5 mx-4 p-4 dark:bg-primary bg-hover"
                            >
                                <div className="w-12/12 m-auto p-5 mb-3 rounded-lg flex items-center bg-white bg-opacity-75 inline-flex  w-full">
                                <img className="w-10 h-10 mr-3" src={customer.image} alt="" key={i}/>
                                <div className="flex flex-col">
                                    <h2 key={i}>{customer.name}</h2>
                                    <h2 key={i}>{customer.location}</h2>
                                </div>
                                <div className="ml-auto inline-flex" key={i}>
                                    {customer.rating}<img src={rating} className="w-6 h-6" alt="rating star"/>
                                </div>
                                </div>
                                <div className="mb-2">
                                    <p className="font-normal text-gray-700 p-0 dark:text-gray" key={i}>{customer.note}</p>
                                </div>
                            </div>
                        })

                    }
                </div>

            </div>
            <div className="flex flex-col justify-between sm:flex-row w-9/12 m-auto mb-3">
                <div className="flex justify-center sm:justify-between p-5 md:ml-auto">
                        <ArrowNarrowLeftIcon className="w-10 h-10 text-lemon border mr-2 p-2 btn-border-color rounded-full cursor-pointer arrow-pointer" onClick={() => slide(-50)}/>
                        <ArrowNarrowRightIcon className="w-10 h-10 text-white border p-2 btn-border-color rounded-full bg-lemon cursor-pointer arrow-pointer" onClick={() => slide(+50)}/>
                </div>

            </div>
        </section>
    )
}
