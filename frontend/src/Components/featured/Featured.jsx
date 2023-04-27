import React from "react";
import "./featured.css";
import useFetch from "../../hooks/useFetch";
const Featured=()=>{
  
  const {data,loading,error} = useFetch("/hotels/countByCity?cities=Vrindavan,Mayapur,Gokul")
  //console.log(data);
    return(
    <div className="featured">
    {loading? ("Loading..."):(
      <><div className="featuredItem">
    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2VumkZJn_fThdqssHtAhq1pW15NWaYJzcC3Z_pla9iqxTBboYuS6yKX_BbPcWIwvQ9MtczbWnWjAtjpRlmbljo5ItH-0ZOcX_03S3_xwRIynaEIYuCBoSz8kf-gCXjuFCcRTw2eteKR2gEn-86XYVWoD3oc-FuOEACcdWuhUtlpPDWmkwHkGOAHIWdA/s513/2.jpg" alt="" className="featuredImg"
    />
    <div className="featuredTitles">
    <h1>vrindavan</h1>
    <h2>{data[0]} Properties</h2>
    </div>
    </div>

    <div className="featuredItem">
    <img src="https://triporissa.com/wp-content/uploads/2022/03/1-Jagannath-Temple-Puri.jpg" alt="" className="featuredImg"
    />
    <div className="featuredTitles">
    <h1>Orissa</h1>
    <h2>{data[1]} Properties</h2>
    </div>
    </div>

    <div className="featuredItem">
    <img src="https://bharatdiscovery.org/bharatkosh/w/images/thumb/5/52/Radhadamodar.jpg/1104px-Radhadamodar.jpg" alt="" className="featuredImg"
    />
    <div className="featuredTitles">
    <h1>vrindavan</h1>
    <h2>{[data[2]]} Properties</h2>
    </div>
    </div>

    <div className="featuredItem">
    <img src="https://content.jdmagicbox.com/comp/vrindavan/j6/9999px565.x565.141221132751.f6j6/catalogue/sri-sri-radha-shyamsundar-mandir-vrindavan-ho-vrindavan-temples-9w1jlbl-250.jpg" alt="" className="featuredImg"
    />
    <div className="featuredTitles">
    <h1> Radha Shyamsundar Mandir Vrindavan</h1>
    <h2>123 Properties</h2>
    </div>
    </div>
    </>)}
    </div>
  )
}
export default Featured;
