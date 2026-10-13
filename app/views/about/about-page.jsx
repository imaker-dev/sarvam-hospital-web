import React from 'react'
import PageHeader from '../layouts/page-header'
import AboutSection from '../home/components/about-section'

const AboutPage = () => {
  return (
    <div>
      <PageHeader title={'About Us'} highlight={'Us'}/>
      <AboutSection />
    </div>
  )
}

export default AboutPage
