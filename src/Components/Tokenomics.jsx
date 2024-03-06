import React from 'react'
import { FaBan, FaCopy, FaFire, FaHandshake } from 'react-icons/fa'
import Container from './Container'
export default function Tokenomics() {
    const cardFunc = (icon, text) => ({ icon, text })
    const cardArr = [
        cardFunc(<FaBan />, 'OWNERSHIP RENOUNCED'),
        cardFunc(<FaFire />, 'LIQUIDITY TOKENS BURNED'),
        cardFunc(<FaHandshake />, 'MINT AUTHORITY REVOKED'),
    ]

    return (
        <div className="wrap py-32">
            <Container>
                <div className="heading flex gap-5 flex-wrap items-center justify-between mb-5">
                    <div className="text-wrap text-4xl font-bold text-white">
                        <span><span className='text-yellow-500'>$ZEBU</span> TOKENOMICS</span>
                    </div>

                    <div className="text-wrap text-slate-300">
                        <span className='border-[1px] rounded-lg p-2'>Total Supply: <span className='text-yellow-400'>100,000,0000 $ZEBU</span></span>
                    </div>
                </div>

                <div className="ca-box flex justify-center py-10">
                    <div className="wrap roundex-3xl overflow-clip flex justify-between gap-4 items-center bg-black bg-opacity-50 p-4 rounded-3xl">
                        <span className='text-slate-300 w-[70%] overflow-hidden text-ellipsis'>7unYePWUHcpB28cnS65TpqT2qqmZaftRz9QABkdR8yN7</span>
                        <span className=" bg-neutral-900  text-slate-300 p-3 text-xl"><FaCopy /></span>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 grid-cols-2 gap-10 py-10">
                    {cardArr.map((i, index) => (
                        <div className="card rounded-lg bg-black bg-opacity-60 p-5  text-center" key={index}>
                            <div className="header flex justify-center mb-4">
                                <span className='text-yellow-500 text-3xl'>{i.icon}</span>
                            </div>
                            <div className="text-wrap lg:text-xl font-bold text-slate-300">
                                <span>{i.text}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="whitepaper my-4 flex justify-center">
                    <a href="">
                        <button className='rounded-3xl bg-white w-full lg:w-[300px] text-black p-2 text-md px-3'>Read Whitepaper</button>
                    </a>
                </div>
            </Container>
        </div>
    )
}
