import React from 'react'
import Header from '../Components/Header'
import Intro from '../Components/Intro'
import Tokenomics from '../Components/Tokenomics'
import Roadmap from '../Components/Roadmap'
import Ecosystem from '../Components/Ecosystem'
import Chart from '../Components/Chart'
import Footer from '../Components/Footer'

export default function Home() {
    return (
        <div className="wrap bg-grad font-bear">
            <Header />
            <Intro />
            <Tokenomics />
            <Roadmap />
            <Ecosystem />
            <Chart />
            <Footer />
        </div>
    )
}
