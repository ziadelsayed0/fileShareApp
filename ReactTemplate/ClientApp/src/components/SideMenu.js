import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
// import { NavMenu, theme } from './NavMenu';
import { useState } from 'react';
//import HomeIcon from '@mui/icons-material/Home';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CastConnectedOutlinedIcon from '@mui/icons-material/CastConnectedOutlined';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import FolderSharedOutlinedIcon from '@mui/icons-material/FolderSharedOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'; import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

import { SideBarBTN, DrawerBTN } from "./SideBarBtn";
import { useTheme } from './ThemeController';





function MdLGSideMenu({ handleClick, clicked }) {

  const { theme, toggleTheme } = useTheme();

  return (<div style={{ maxWidth: '80px', height: '100vh', backgroundColor: theme.sidebar.background }} className="fixed top-0 left-0 flex flex-col items-center justify-center">
    <ul className="menu rounded-box h-full flex flex-col items-center justify-start ">

      <SideBarBTN name="Home" ICON={HomeOutlinedIcon} callBack={handleClick} state={clicked} />
      <SideBarBTN name="Connect" ICON={CastConnectedOutlinedIcon} callBack={handleClick} state={clicked} />
      <SideBarBTN name="Setting" ICON={SettingsOutlinedIcon} callBack={handleClick} state={clicked} />

    </ul>
    <img src="/logo.png" alt="Logo" />
    <p className="text-lg ms-1" style={{ color: theme.color, fontWeight: "500" }}>FShare</p>
  </div>)
}

function SmSideMenu({ clicked, handleClick }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed drawer z-40	">
      <input
        id="my-drawer"
        type="checkbox"
          // checked={isDrawerOpen}
        //  onChange={handleDrawerToggle}
        className="drawer-toggle"
        style={{background:theme.sidebar.background,color:theme.sidebar.activeBtn}} />

      <div className="drawer-content mx-3 my-2 " >
        {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label> */}


        <label htmlFor="my-drawer" className="btn btn-circle swap swap-rotate"style={{background:theme.sidebar.activeBtn,color:theme.color}} >
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />

          {/* hamburger icon */}
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512">
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          {/* close icon */}
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512">
            <polygon
              points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>

      </div>

      <div className="drawer-side" >
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu text-base-content min-h-full w-80 p-4" style={{backgroundColor:theme.sidebar.background}}>
          <img src="/logo.png" alt="Logo" className='my-1' />
          <h2 className="text-4xl	ms-1 mb-2 text-center" style={{ color: theme.color, fontWeight: "500" }}>FShare</h2>

          <DrawerBTN className="drawer-toggle" name="Home" ICON={HomeOutlinedIcon} callBack={handleClick}  state={clicked} />
          <DrawerBTN className="drawer-toggle" name="Connect" ICON={CastConnectedOutlinedIcon} callBack={handleClick} state={clicked} />
          <DrawerBTN className="drawer-toggle" name="Setting" ICON={SettingsOutlinedIcon} callBack={handleClick} state={clicked} />

        </ul>
      </div>
    </div>
  )
}

function SideMenu() {
  const [clicked, setClicked] = useState("Home");

  const handleClick = (btn) => () => setClicked(btn);

  return (
    <>
      {/* SmSideMenu for small screens */}
      <div className="block sm:hidden">
        <SmSideMenu handleClick={handleClick} clicked={clicked} />
      </div>

      {/* MdLGSideMenu for medium and large screens */}
      <div className="hidden sm:block">
        <MdLGSideMenu handleClick={handleClick} clicked={clicked} />
      </div>
    </>
  );
}

export default SideMenu;