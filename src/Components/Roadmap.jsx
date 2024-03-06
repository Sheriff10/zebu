import React from 'react'
import Container from './Container'

export default function Roadmap() {
    const phases = [
        {
            title: "PHASE 1",
            tasks: [
                "Concept & Tokenomics",
                "Smart Contract Development",
                "Community Building"
            ]
        },
        {
            title: "PHASE 2",
            tasks: [
                "DEXs listings on Solana",
                "CG & CMC listing",
                "Orca listing"
            ]
        },
        {
            title: "PHASE 3",
            tasks: [
                "Ecosystem growth",
                "NFT launch",
                "Utility Expansion"
            ]
        },
        {
            title: "PHASE 4",
            tasks: [
                "Staking Dapp",
                "Zebu toolkit",
                "coming soon.."
            ]
        }
    ];

    return (
        <div className="wrap bg-neutral-950 py-16">
            <Container>
                <div className="heading text-5xl text-white font-bold text-center">
                    <span><span className='text-yellow-500'>$ZEBU</span> Roadmap</span>
                </div>

                <div className="grid lg:grid-cols-4 mt-16 gap-5">
                    {phases.map((i, index) => (
                        <div className="wrap bg-white bg-opacity-10 p-5 rounded-md" key={index}>
                            <div className="heading text-xl font-bold text-yellow-500">
                                <span>{i.title}</span>
                            </div>

                            <div className="list leading-8 my-4">
                                <ul className=' list-disc list-inside'>
                                    {i.tasks.map((list, index) => (
                                        <li className='text-slate-400' key={index}>{list}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

            </Container>
        </div>
    )
}
