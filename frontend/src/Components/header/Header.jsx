import React, {useContext, useState} from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "./header.css";
import { format } from 'date-fns';
import {useNavigate} from "react-router-dom";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {DateRange, DateRangePicker} from 'react-date-range';
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";

const Header = ({type}) => {
  const [destination,setDestination] =useState("");
const [openOptions,setOpenOptions] =useState(false);
    const [open,setOpen]=useState(false);
    const [dates,setDates] =useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

const [options,setOptions] =useState({
  adult:1,
  children:0,
  room:1
})
const handleOption = (name,operation) =>
{
  setOptions((prev)=>{
    return{
    ...prev,
    [name] : operation === "i"? options[name] +1: options[name] -1,
  }; 
});
};

const {dispatch} =useContext(SearchContext)

const {user} = useContext(AuthContext);

const navigate=useNavigate();
const handleSearch = ()=>{
  dispatch({type:"NEW_SEARCH",payload:{destination,dates,options}});
  navigate("/hotels",{state :{destination,dates,options}});
}


  return (
    <div className="header">
      <div className={type==="list"? "headerContainer listmode":"headerContainer"}>
        <div className="headerList">
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>stays</span>
          </div>
        </div>
        { type!== "list" &&
          <>
          <h1 className="headerTitle">
          TAKE ONLY MEMORIES, LEAVE ONLY FOOTPRINTS
          </h1>
        <p className="headerDesc">
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free asamordhvabooking account
        </p>
{   !user&&(     <button className="headerBtn">Sign in/Register</button>)}
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you going"
              className="headerSearchInput"
              onChange={(e)=>setDestination(e.target.value)}
            />
            </div>



            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
              <span onClick={()=>setOpen(!open)} className="headerSearchText">{`${format(dates[0].startDate,"MM/dd/yyyy")} to ${format(dates[0].endDate,"MM/dd/yyyy")}`}</span>
              { open && <DateRange
              className="date"
                editableDateInputs={true}
                onChange={(item) =>setDates([item.selection])}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                ranges={dates}
                direction="horizontal"
              ></DateRange>}
              </div>


              
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span className="headerSearchText" onClick={()=>setOpenOptions(!openOptions)}>
                  {`${options.adult} adult ${options.children} children ${options.room} room`}
                </span>
{openOptions &&
<div className="options">
                <div className="optionItem">
                  <span className="optionText">{options.adult}</span>
                  <div className="optionCounter">
                  <button disabled={options.adult <=1 } 
                  className="optionCounterButton" onClick={()=>handleOption("adult","d")}>-</button>
                  <span className="optionCounterNumber">1</span>
                  <button className="optionCounterButton" onClick={()=>handleOption("adult","i")}>+</button>
                </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">{options.children}</span>
                  <div className="optionCounter">
                  <button  disabled={options.children <=1 } 
                   className="optionCounterButton" onClick={()=>handleOption("children","d")}>-</button>
                  <span className="optionCounterNumber">0</span>
                  <button className="optionCounterButton" onClick={()=>handleOption("children","i")}>+</button>
                </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">{options.room}</span>
                  <div className="optionCounter">
                  <button disabled={options.room <=1 } 
                   className="optionCounterButton" onClick={()=>handleOption("room","d")}>-</button>
                  <span className="optionCounterNumber">1</span>
                  <button className="optionCounterButton" onClick={()=>handleOption("room","i")}>+</button>
                </div>
                </div>
</div>
}
              </div>
              <div className="headerSearchItem">
              <button className="headerBtn"
              onClick={handleSearch}>Search</button>
              </div>
            </div>
            </>}
          </div>
        </div>
     
  );
};
export default Header;
