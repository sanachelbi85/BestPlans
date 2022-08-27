import React from 'react';
import { Link } from 'react-router-dom';

import "./home.css";



function Home() {
  return (
    <div className='home'>
      <div>
        <img src="https://img.freepik.com/photos-gratuite/concept-voyage-complet-points-repere_23-2149153258.jpg?size=626&ext=jpg&ga=GA1.2.358506462.1657103263" alt="mg" style={{ width:"100%", height:"700px"}} className="imghome" />
        </div>
          <h1 className='h11'>Best Places in south of Tunisia</h1>
          <div className="container">
  <div className="box">
    <img src="https://discovart.fr/wp-content/uploads/2019/05/vacances-%C3%A0-djerba.jpg"/>
    <span>Djerba</span>
  </div>
  <div className="box">
    <img src="https://managers.tn/wp-content/uploads/2022/02/gabes-tunisie.jpg"/>
    <span>Gabes</span>
  </div>
  <div className="box">
    <img src="https://assets.anantara.com/image/upload/q_auto,f_auto/media/minor/anantara/images/anantara-tozeur-resort/experiences/sahara/anantara_tozeur_resort_sahara_dining_960x519.jpg"/>
    <span>Tozeur</span>
  </div>
  <div className="box">
    <img src="https://1.bp.blogspot.com/-T_9j5wKYrXU/WOysBOa-S1I/AAAAAAABJhY/d1tyISZMIZInIm8pv7U5mxZ0BzbQi80ZgCLcB/s1600/portpechezarzis.jpg"/>
    <span>Zarzis</span>
  </div>
</div>
</div>
  )
}



       

export default Home