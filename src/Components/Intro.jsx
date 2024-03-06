import React from 'react'
import Container from './Container'

export default function Intro() {
    return (
        <div className="wrap bg-grad">
            <Container>
                <div className="py-32">
                    <div className="grid lg:grid-cols-2 items-center min-h-[70vh] lg:min-h-[80vh] font-bear">
                        <div className="text-wrap z-10 backdrop-blur-md">
                            <div className="heading font-extrabold text-6xl text-white">
                                <span>ZEBU: THE FIRT BEAR ON SOLANA </span>
                            </div>
                            <div className="text-wrap text-lg text-yellow-400 uppercase mt-4">
                                <span>Pepe, shib, doge - Time for ZEBU</span>
                            </div>
                            <div className="btn-wrap pt-10 flex w-[100%] gap-4">
                                <a href="" className='w-[100%]'>
                                    <button className='rounded-3xl bg-yellow-400 w-[100%] text-black p-3 text-lg font-bold px-3'>Buy $ZEBU</button>
                                </a>
                                <a href="" className='w-[100%]'>
                                    <button className='rounded-3xl bg-white w-[100%] text-black p-3 text-lg font-bold px-3'>View Chart</button>
                                </a>
                            </div>
                        </div>
                        <div className="img-wrap flex justify-center absolute lg:relative">
                            <img src="/asset/bear-cute.gif" alt="ZEBU" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
