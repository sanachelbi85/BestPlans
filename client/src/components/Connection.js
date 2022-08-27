import React from 'react';
import { Link } from 'react-router-dom';
import Register from './Register';

const Connection = () => {
  return (
    <div>
        <Link to="/register"><li>{<Register />}</li></Link>
       
    </div>
  )
}

export default Connection