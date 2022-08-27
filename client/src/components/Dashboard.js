import React from 'react';
import { useSelector } from 'react-redux';
import "./Dashboard.css";
import logo1 from "./image/logo1";
import {Link, Outlet } from 'react-router-dom'
import UserTab from './UserTab';


const Dashboard = () => {
  const user = useSelector ((state)=>state?.user?.user );

  return (
    <div>
         <div className="containerDash">
        <nav className="navbarDash">
          <div className="nav_icon" onclick="toggleSidebar()">
            <i className="fa fa-bars" aria-hidden="true" />
          </div>
          <div className="navbarDash__left">
            <Link to='userlist' className="active_link">Users</Link> 
           <Link to="deslist" className="active_link">Destination</Link>
          </div>
          <div className="navbarDash__right">
            <a href="#">
              <i className="fa fa-search" aria-hidden="true" />
            </a>
            <a href="#">
              <i className="fa fa-clock-o" aria-hidden="true" />
            </a>
            <a href="#">
              <img width={30} src="assets/avatar.svg" alt="" />
              {/* <i class="fa fa-user-circle-o" aria-hidden="true"></i> */}
            </a>
          </div>
        </nav>
        <main>
          <div className="main__containerDash">
            {/* MAIN TITLE STARTS HERE */}
            <div className="main__title">
              <img src="https://cdn5.vectorstock.com/i/1000x1000/01/69/businesswoman-character-avatar-icon-vector-12800169.jpg" alt="" />
              <div className="main__greeting">
                <h1>Sana Chelbi</h1>
                <p>Welcome to your admin dashboard</p>
              </div>
            </div>
            {/* MAIN TITLE ENDS HERE */}
            {/* MAIN CARDS STARTS HERE */}
            <div className="main__cardsDash">
              <div className="cardDash">
                <i className="fa fa-user-o fa-2x text-lightblue" aria-hidden="true" />
                <div className="cardDash_inner">
                  <p className="text-primary-p">Number of Travelers</p>
                  <span className="font-bold text-title">578</span>
                </div>
              </div>
              <div className="cardDash">
                <i className="fa fa-calendar fa-2x text-red" aria-hidden="true" />
                <div className="cardDash_inner">
                  <p className="text-primary-p">scheduled trips </p>
                  <span className="font-bold text-title">2467</span>
                </div>
              </div>
              <div className="cardDash">
                <i className="fa fa-video-camera fa-2x text-yellow" aria-hidden="true" />
                <div className="cardDash_inner">
                  <p className="text-primary-p">Chosen destinations</p>
                  <span className="font-bold text-title">340</span>
                </div>
              </div>
              <div className="cardDash">
                <i className="fa fa-thumbs-up fa-2x text-green" aria-hidden="true" />
                <div className="cardDash_inner">
                  <p className="text-primary-p">Number of Likes</p>
                  <span className="font-bold text-title">645</span>
                </div>
              </div>
            </div>
            {/* MAIN CARDS ENDS HERE */}
            {/* MAIN DASHBOARD CONTENT */}
           <Outlet/>
            {/* CHARTS STARTS HERE */}
           {/*  <div className="chartsDash">
              <div className="chartsDash__left">
                <div className="chartsDash__left__title">
                  <div>
                    <h1>Daily Reports</h1>
                    <p>Cupertino, California, USA</p>
                  </div>
                  <i className="faDash fa-usd" aria-hidden="true" />
                </div>
                <div id="apex1" />
              </div>
              <div className="chartsDash__right">
                <div className="chartsDash__right__title">
                  <div>
                    <h1>Stats Reports</h1>
                    <p>Cupertino, California, USA</p>
                  </div>
                  <i className="faDash fa-usd" aria-hidden="true" />
                </div>
                <div className="chartsDash__right__cardsDash">
                  <div className="cardDash1">
                    <h1>Income</h1>
                    <p>$75,300</p>
                  </div>
                  <div className="cardDash2">
                    <h1>Sales</h1>
                    <p>$124,200</p>
                  </div>
                  <div className="cardDash3">
                    <h1>Users</h1>
                    <p>3900</p>
                  </div>
                  <div className="cardDash4">
                    <h1>Orders</h1>
                    <p>1881</p>
                  </div>
                </div>
              </div>
            </div>
            {/* CHARTS ENDS HERE */}
          </div>
        </main> 
        <div id="sidebar">
          <div className="sidebar__title">
            <div className="sidebar__img">
             <img src={logo1} alt="logo" />
            </div>
            <i onclick="closeSidebar()" className="fa fa-times" id="sidebarIcon" aria-hidden="true" />
          </div>
          <div className="sidebar__menu">
          <Link to="/"><div className="sidebar__link active_menu_link">
           <i className="fa fa-home" />
           Home
            </div></Link>
             
            <div className="sidebar__link">
             <i className="fa fa-user-secret" aria-hidden="true" />
             <Link to="/destination"> Destination</Link>
            </div>
             <div className="sidebar__link">
              <i className="fa fa-building-o" />
              <Link to="/experience">Experience</Link>
            </div>
            <div className="sidebar__link">
              <i className="fa fa-wrench" />
              <Link to="/Favoris">Favoris</Link>
            </div>
            <div className="sidebar__link">
              <i className="fa fa-archive" />
             <Link to="/contact"> Contact</Link>
            </div>
            {/*<div className="sidebar__link">
              <i className="fa fa-handshake-o" />
              <a href="#">Contracts</a>
            </div>
            <h2>LEAVE</h2>
            <div className="sidebar__link">
              <i className="fa fa-question" />
              <a href="#">Requests</a>
            </div>
            <div className="sidebar__link">
              <i className="fa fa-sign-out" />
              <a href="#">Leave Policy</a>
            </div>
            <div className="sidebar__link">
              <i className="fa fa-calendar-check-o" />
              <a href="#">Special Days</a>
            </div>
            <div className="sidebar__link">
              <i className="fa fa-files-o" />
              <a href="#">Apply for leave</a>
            </div>
            <h2>PAYROLL</h2>
            <div className="sidebar__link">
              <i className="fa fa-money" />
              <a href="#">Payroll</a>
            </div>
            <div className="sidebar__link">
              <i className="fa fa-briefcase" />
              <a href="#">Paygrade</a>
            </div> */}
            <div className="sidebar__logout">
              <i className="fa fa-power-off" />
              <a href="#">Log out</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Dashboard