import React, { useContext, useState } from 'react';
import "./hotel.css";
import Navbar from "../../Components/navbar/Navbar"
import Header from '../../Components/header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import MailList from '../../Components/mailList/Maillist'
import Footer from '../../Components/footer/Footer'
import useFetch from "../../hooks/useFetch"
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from '../../context/AuthContext';
import Reserve from '../../Components/reserve/Reserve';

const Hotel =() =>{
    const location=useLocation()
    const path=location.pathname.split("/")
    const id=path[2];
    const {data,loading,error,reFetch}=useFetch(`/hotels/find/${id}`)
    const {user} = useContext(AuthContext);
    const navigate=useNavigate();
    const {dates,options} =useContext(SearchContext);

    const[openModal,setOpenModal]=useState(false);

    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 *24;
    function dayDifference(date1,date2)
    {
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
        return diffDays;
    }
    const days =dayDifference(dates[0].endDate, dates[0].startDate);

    const handleClick = ( )=>{
        if(user){
            setOpenModal(true);
        }
        else{
            navigate("/login");
        }
    };


    return (
        <div>
        <Navbar/>
        <Header type="list"/>
       { loading?("Loading..."):(
       <div className='hotelContainer'>
            <div className='hotelWrapper'>
            <button className='bookNow'>Reserve or Book Now</button>
            <h1 className='hotelTitle'>{data.name}</h1>
            <div className='hotelAddress'>
                <FontAwesomeIcon icon={faLocationDot}/>
                <span>{data.address}</span>
            </div>
            <span className='hotelDistance'>
            Excellent location
            </span>
            <span className='hotelPriceHighlight'>
            Book a stay for {data.cheapestPrice}&#x20B9;
            </span>
            <div className='hotelImages'>
            {data.image?.map(photo => (
            <div className='hotelImgWrapper'>
            <img src={photo.src} alt="hotelImg"/>
            </div>
            ))}
            </div>
            <div className='hotelDetails'>
            <div className='hotelDetailsText'>
            <h1 className='hotelTitle'>{data.title}</h1>
            <p className='hotelDesc'>
            {data.desc}
            </p>
            </div>
            <div className='hotelDetailsPrice'>
                <h1> Perfect for a {days} Stay!</h1>
                <span>
                    Located in the heart of UP , this property has
                    an excellent location score of 9.9!
                </span>
                <h2>
                <b>{days * data.cheapestPrice * options.room} &#8377;</b> ({days} nights)
                </h2>
                <button onClick={handleClick}>Reserve or Book Now!</button>
            </div>
            </div>
       
        </div>
        <MailList/>
        <Footer/>
        </div>)}
{openModal && <Reserve setOpen={setOpenModal} hotelId={id}/>}
    
        </div>
    )
}
export default Hotel;
