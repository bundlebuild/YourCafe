import * as React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import CafeServices from '../components/CafeServices'
import Menu from '../components/Menu'
import ContactUs from '../components/ContactUs'
import StaticOnlyWebsite from '../components/StaticOnlyWebsite'
import Footer from '../components/Footer'
import InHouseCoffee from '../components/InHouseCoffee'
import MobileMenu from '../components/MobileMenu'
const Home = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
        <div className="gyan-container">
          {menuOpen == true ? (
            <MobileMenu setMenuOpen={setMenuOpen} />
          ) : (
            <></>
          )}
          <Header setMenuOpen={setMenuOpen}/>
          <div className="page-content">
            <StaticOnlyWebsite />
            <Hero />
            <AboutUs />
            <CafeServices />
            <Menu />
            <InHouseCoffee />
            <ContactUs />
            <Footer />
          </div>
        </div>
    </>
  )
}

export default Home