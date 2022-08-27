import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const UserTab = () => {
    const users=useSelector(state=>state?.user?.users)
  return (
    <div className="dash_containerDash">
    <div className="liste">Liste of users</div>
    <table className="table_reservation">
      <tbody><tr>
          <th>All users</th>
          <th>Date</th>
          <th>Users</th>
          <th>Email</th>
          <th />
        </tr>
       
        {users?.map((el,i)=><tr key={i}>
          <td>{el.name}</td>
          <td>2021-08-04</td>
          <td style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}><img src="https://cdn-icons-png.flaticon.com/512/186/186037.png" alt="" /></td>
          <td>{el.email}</td>
          <td className="last_td">
            <Link to="#" className="green">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg></Link>
            <a href="#" className="red">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1={10} y1={11} x2={10} y2={17} /><line x1={14} y1={11} x2={14} y2={17} /></svg>
            </a>
          </td>
        </tr>)}
        
      </tbody></table>
  </div>  )
}

export default UserTab