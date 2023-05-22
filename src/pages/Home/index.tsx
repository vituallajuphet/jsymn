import React from 'react'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import {Section1, Section2, Section4, Section5, Section6, Events} from './Sections'


const Home:React.FC<any> = () => {
  return (
    <div className='homepage main_container'>
        <Header />
        <Banner />
        <Events />
        <Section1 />
        <Section2 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Footer />
    </div>
  )
}

export default Home