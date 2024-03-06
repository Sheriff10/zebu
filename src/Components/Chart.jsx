import React from 'react'
import Container from './Container'

export default function Chart() {
    return (
        <div className="wrap bg-neutral-950 pb-16">
            <Container>
                <iframe src="https://dexscreener.com/solana/CP6VMeXSKWe9rbDinGrxFXJ4MVTcq4f7gkDXwWH5bhg7?embed=1&theme=dark" frameborder="100" width={"100%"} height={600}></iframe>
            </Container>
        </div>
    )
}
