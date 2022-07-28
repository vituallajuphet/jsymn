import React from 'react'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Header from '../../components/Header'


const Home:React.FC<any> = () => {
  return (
    <div className='homepage main_container'>
        <Header />
        <Banner />
            <div>
               Home page
            </div>
        <Footer />
    </div>
  )
}

export default Home