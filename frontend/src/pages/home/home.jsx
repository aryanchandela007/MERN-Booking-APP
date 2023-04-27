import React from 'react';
import Featured from '../../Components/featured/Featured';
import Header from '../../Components/header/Header';
import Navbar from '../../Components/navbar/Navbar';
import PropertyList from '../../Components/propertyList/Propertylist';
import FeaturedProperties from '../../Components/featuredProperties/FeaturedProperties';
import './home.css';
import MailList from '../../Components/mailList/Maillist';
import Footer from '../../Components/footer/Footer';
const Home =() =>{
    return (
        <div >
            <Navbar/>
            <Header/>
            <div className='homeContainer'>

            <Featured/>

            <h1 className='homeTitle'>Browse by property type</h1>
            <PropertyList/>

            <h1 className='homeTitle'>Home Guest Love</h1>
            <FeaturedProperties/>
            <MailList/>
            <Footer/>
            </div>
        </div>
    )
}
export default Home;