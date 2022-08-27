import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletedestination, getdestination } from '../js/slice/destinationSlice'
import AddDestination from './AddDestination'
import EditDest from './EditDest'

const DestinationTab = () => {
  const dispatch = useDispatch();
    const dests = useSelector(state=>state.destination?.destinations)
    console.log(dests)
  return (
    
    <div className="dash_containerDash">
    <div className="liste">Liste of Destinations</div>
    <table className="table_reservation">
    <AddDestination/>
      <tbody><tr>
          <th>Places</th>
          <th>Date</th>
          <th>Users</th>
          <th>location</th>
          <th />
        </tr>
        {dests.map((el,i)=>
        <tr>
        <td>{el.name}</td>
        <td>2021-08-05</td>
        {/* <td><svg style={{margin: '0 0.3rem'}} xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>payed</td> */}
        <td style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}><img src="https://cdn-icons-png.flaticon.com/512/186/186037.png" alt="" /></td>
        <td>{el.location}</td>
        <td className="last_td">
         <EditDest el={el}/>
         <button  style={{backgroundColor:"#9e0000", border:"none", width:"30px", color:"white"}}onClick={()=>{dispatch(deletedestination(el._id)); dispatch(getdestination())}}>X</button>
          {/* <a href="#" className="red">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1={10} y1={11} x2={10} y2={17} /><line x1={14} y1={11} x2={14} y2={17} /></svg>
          </a> */}
        </td>
      </tr>)}
  </tbody>
  </table>
</div>   )
}

export default DestinationTab