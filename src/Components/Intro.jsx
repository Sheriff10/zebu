import React from 'react'
import Container from './Container'

export default function Intro() {
    return (
        <div className="wrap bg-grad">
            <Container>
                <div className="py-32 pb-0 lg:pb-auto">
                    <div className="grid gap-5 lg:grid-cols-2 items-center min-h-[80vh] lg:min-h-[80vh] font-bear">
                        <div className="text-wrap z-10 backdrop-blur-md">
                            <div className="heading font-extrabold text-3xl text-center lg:text-6xl text-white">
                                <span>ZEBU: <br /> THE FIRT BEAR ON SOLANA </span>
                            </div>
                            <div className="text-wrap text-lg text-yellow-400 text-center  uppercase mt-4">
                                <span>Pepe, shib, doge - Time for ZEBU</span>
                            </div>
                            <div className="btn-wrap pt-10 flex w-[100%]  gap-4">
                                <a href="" className='w-[100%]'>
                                    <button className='rounded-3xl bg-yellow-400 w-[100%] text-black p-3 text-lg font-bold px-3'>Buy $ZEBU</button>
                                </a>
                                <a href="" className='w-[100%]'>
                                    <button className='rounded-3xl bg-white w-[100%] text-black p-3 text-lg font-bold px-3'>View Chart</button>
                                </a>
                            </div>
                        </div>
                        <div className="img-wrap  lg:flex justify-center">
                            <img src="/asset/bear-cute.gif" alt="ZEBU" className='hidden lg:block'/>
                            <img src="/asset/z1.png" alt="ZEBU"  className='block lg:hidden w-[300px] mt-10' />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
