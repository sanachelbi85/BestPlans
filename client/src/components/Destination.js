import React, { useState } from 'react';
import DestinationCard from './DestinationCard';
import {useSelector}from 'react-redux';
import "./Card.css";
import Search from './Search';



const Destination = () => {
  const [dest, setdest] = useState("");
const destination = useSelector((state)=>state?.destination?.destinations);
    console.log(destination)
  
    return (

      <div> 
        <Search dest={dest} setdest={setdest}/>
      <div className='bodyyy' style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
          {destination?.filter((el)=>el.location.toLowerCase().includes(dest.toLowerCase())).map((el) => <DestinationCard destination={el}/>)} 
</div>

</div>
  )
}

export default Destination