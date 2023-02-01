import Contact from 'components/Contact'
import Hero from 'components/Hero'
import Navbar from 'components/Navbar'
import React from 'react'
import "../app/globals.css"

const contact = () => {
  return (
    <div>
      <Navbar />
      <Hero heading="Contact" message="Submit the form below for more work and quotes" />
      <Contact />
    </div>
  )
}

export default contact