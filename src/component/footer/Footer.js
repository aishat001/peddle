import React from 'react'
import peddleLogo from '../assets/PEDDLE.png'

export default function Footer() {
    return (
        <footer id="footer">
            <div className="container flex flex-row flex-wrap p-10 justify-between"> 
                <div className="mb-6 w-80">
                    <img src={peddleLogo} alt="" className="mb-4"/>
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
