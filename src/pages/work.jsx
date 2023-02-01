import Hero from 'components/Hero'
import Navbar from 'components/Navbar'
import Portfolio from 'components/Portfolio'
import React from 'react'
import "../app/globals.css"
const work = () => {
  return (
    <div>
        <Navbar />
        <Hero heading="My Work" message="This is some of my recent work travelling the world" />
        <Portfolio />
    </div>
  )
}

export default work