import React, { useState } from 'react';
import {
    FaCarAlt,
    FaBars,
    FaUserAlt,
    FaCommentAlt,
    FaAndroid,
    FaHistory,
    FaAdversal,
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"View All Users",
            icon:<FaUserAlt/>
        },
        {
            path:"/View_Available_Cars",
            name:"View Available Cars",
            icon:<FaCarAlt/>
        },
        {
            path:"/View_All_Owners ",
            name:"View All Owners",
            icon:<FaAndroid/>
        },
        {
            path:"/View_Status_Of_Cars",
            name:"View Status Of cars",
            icon:<FaCommentAlt/>
        },
        {
            path:"/View_History_Of_Cars",
            name:"View History Of Cars",
            icon:<FaHistory/>
        },
        // {
        //     path:"/Manage_Tv_Advertisment",
        //     name:"Manage Tv Advertisment",
        //     icon:<FaAdversal/>
        // }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "400px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Admin Dashboard</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;
