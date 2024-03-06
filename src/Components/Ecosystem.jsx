import React from 'react'
import Container from './Container';

export default function Ecosystem() {
    const imagesWithLinks = [
        {
            img: "/asset/solscan.png",
            link: "https://solscan.io/token/7unYePWUHcpB28cnS65TpqT2qqmZaftRz9QABkdR8yN7"
        },
        {
            img: "/asset/ray.webp",
            link: "https://raydium.io/swap/?inputCurrency=7unYePWUHcpB28cnS65TpqT2qqmZaftRz9QABkdR8yN7&outputCurrency=sol&inputAmount=11787027.671526&outputAmount=93.923693&fixed=in"
        },
        {
            img: "/asset/dex.png",
            link: "https://example-dex.com/"
        },
        {
            img: "/asset/jup.png",
            link: "https://app.meteora.ag/pools/FqT17EhHfaHRuXMGmUNtbZKvZtwfDckpGV3ALhBwoPsQ"
        }
    ];

    return (
        <div className="wrap py-16 bg-neutral-950">
            <Container>
                <div className="heading text-xl font-bold text-white mb-10">
                    <span><span className='text-yellow-500'>$ZEBU</span> Ecosystem</span>
                </div>

                <div className="grid gap-5 grid-cols-2 lg:grid-cols-4 justify-center">
                    {imagesWithLinks.map((i, index) => (
                        <div className="wrap" key={index}>
                            <a href={i.link}>
                                <img src={i.img} alt="ZEBU" className='mx-auto' />
                            </a>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}
