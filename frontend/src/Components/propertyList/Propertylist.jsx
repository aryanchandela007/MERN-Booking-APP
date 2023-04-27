import useFetch from "../../hooks/useFetch";
import "./propertylist.css";
const PropertyList =()=>{
    const {data,loading,error} = useFetch("/hotels/countByType");
    const images=[
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-MqwmTZlqjDihmlSxlFM6D-KyHFYDJ-J63CnnfoaSm19TEX5q1apxwd4QVNYKPALoGNE&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC_trbpTYftLDqjHw8MkRrt8XIPEzj8Oxk1wDUiV4MxAvLM7Ws6LL0qClgcjePqC4sMcQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-AgeoEFg9RjzuqVGEaqVM_XuHlkR3h1khDeOJ9bi7N4X420A7tY2CtP82py_AwXNu_dw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9X2BNdVZVZ-gU0aiAzk3TrcVXUOKvVh5uow&usqp=CAU",
        "https://media.istockphoto.com/id/474917902/photo/modern-architecture-design-100-for-house-bungalow.jpg?s=612x612&w=0&k=20&c=w5sBVyE-1ZmGmLdtK0F808826hMOyeVOiGYN2H17bOg="
    ]
    return(
        <div className="pList">
        {loading?(
            "Loading..."
            ):(
        <>
       { data && images.map((img,i)=>(
        <div className="pListItem" key={i}>
            <img src={img}
            alt=""
            className="pListImg"
            />
        
        <div  className="pListTitles">
        {
            // optional chaining
        }
        <h1>{data[i]?.type}</h1>
        <h2>{data[i]?.count} {data[i]?.type}</h2>
        </div>
        </div>
       ))
        }
        </>)}
        </div>
    )
}
export default PropertyList;