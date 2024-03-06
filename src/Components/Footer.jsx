import React from 'react'
import { FaTelegram, FaTwitter } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className="wrap bg-black">
            <div className="bg-con bg-black bg-opacity-50">
                <div className="container mx-auto p-3">
                    <div className="flex flex-wrap gap-1 justify-between items-center py-3">
                        <div className="icon-wrap w-full lg:w-auto">
                            <div className="flex items-center justify-center lg:justify-normal">
                                <img src="/asset/logo.png" alt="ZEBU" className='w-[50px]' />
                                <span className='text-white'>$ZEBU</span> <span className='text-gray-300 ml-3'> All Copyright reserved. © 2024</span>
                            </div>
                        </div>
                        <div className="socials flex  gap-3 w-full lg:w-auto justify-center text-yellow-500 text-xl">
                            <a href="" target={"_blank"} rel="noreferrer">
                                <FaTwitter />
                            </a>
                            <a href="" target={"_blank"} rel="noreferrer">
                                <FaTelegram />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
