import React from 'react'

const ClientsCount = () => {
    return (
        <div className='clients-count-main-cover-wrapper'>
            <div className=" text-white py-[110px] px-8 flex  justify-center items-center space-x-10">
                {/* Left Stat */}
                <div className="text-center w-[280px]">
                    <h2 className="text-7xl">400+</h2>
                    <p className="text-m mt-2 text-gray-400">Videos creating<br />Every month</p>
                </div>

                {/* Middle Stat with Torn Effect */}
                <div className="relative flex  items-center justify-center w-[280px]  clients-middle-count-box">
                    <div className="relative z-10 text-centerpx-4 justify-center py-6 rounded-md">
                        <h2 className="text-7xl text-center">80 M</h2>
                        <p className="text-m text-center mt-2 text-gray-400">Million views <br />Last 6 months generated</p>
                    </div>
                </div>
                {/* Right Stat */}
                <div className="text-center w-[280px]">
                    <h2 className="text-7xl">15</h2>
                    <p className="text-m mt-2 text-gray-400">Total Active Clients</p>
                </div>
            </div>

        </div>
    )
}

export default ClientsCount
