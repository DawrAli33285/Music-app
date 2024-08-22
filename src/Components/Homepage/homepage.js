import React from 'react'
import "./homepage.css"
import TabsSection from './tabs_sec/tabs'
import Homebanner from './home_banner_sec/home_banner'
import Createuser from './Creater_user/Creater_user'
import TrustLogo from './Trust_sec/trust'
import Musictab from './Music_dashboard/musicsec'
import Testimonial from './testimonial_Sec/testmonial'

const Homepage = () => {
  return (
    <section>

      < Homebanner />
      <Createuser />

      <TabsSection />

      <TrustLogo />

      <Musictab />

      <Testimonial />


    </section>
  )
}

export default Homepage