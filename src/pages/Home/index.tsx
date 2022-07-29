import React from 'react'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import {Section1} from './Sections'


const Home:React.FC<any> = () => {
  return (
    <div className='homepage main_container'>
        <Header />
        <Banner />
            <Section1 />
        <Footer />
    </div>
  )
}

export default Home