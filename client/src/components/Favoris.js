import React from 'react'
import { useSelector } from 'react-redux';
import FavorisCard from './FavorisCard';
import Footer from './Footer';

function Favoris() {
    const favoris = useSelector((state) => state.favoris.favoris);
  
  return (
    <div style={{display:"flex", width:"100%", flexWrap:"wrap", justifyContent:"space-around"}}>
        {favoris?.map((el) => <FavorisCard favoris={el}/>)}
        <br />
        
        </div>
   
  )
}

export default Favoris