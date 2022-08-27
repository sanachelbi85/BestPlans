import React from 'react';
import { useSelector } from 'react-redux';
import "./CardFav.css";



const FavorisCard = ({favoris={name:"",address:""}}) => {
    const user = useSelector((state) => state?.user?.user );
    console.log(user)
  return (
    <div className="fav">
    <div className="containerfav">
    <div className="cardfav">
      <div className="cardfav-headerfav">
        <img src={favoris.image} alt="rover" />
      </div>
      <div className="cardfav-bodyfav">
        <span className="tagfav tag-teal">{favoris.name_place}</span>
        <h4 style={{fontSize:"small"}}>{favoris.address}</h4></div>
         <div className="userfav">
          <img src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo" alt="user" /> 
          <div className="userfav-infofav">
            <h5>{user.name}</h5>
        </div>
      </div>
    </div>
  
      </div>
      </div>
);
}

export default FavorisCard