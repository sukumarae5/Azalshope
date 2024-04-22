// import React, { useState } from "react";
import { useSelector } from "react-redux";


const Dashboard = () => {
  // const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const users = useSelector(state=>state.users);
  console.log(users);
  // const OpenSidebar = () => {
  //   setOpenSidebarToggle(!openSidebarToggle);
  // };
  return (
    <div className="grid-container">
    {/* <SideNavbar
      openSidebarToggle={openSidebarToggle}
      OpenSidebar={OpenSidebar}
    />
    <Header OpenSidebar={OpenSidebar} /> */}
    hello
  </div>
  )
}

export default Dashboard