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
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'; import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';

import SideBarBTN from "./SideBarBtn";
import PageNavBar from './PageNavBar';


function Page({ name, Icon, children  }) {

    return (
        <div style={{ minHeight: "100vh",  backgroundColor: "#090b0d" }} className='flex flex-col md:ms-10 min-w-screen' >
            <PageNavBar name={name} Icn={Icon} />
           <div className='flex flex-col p-4 md:ms-10'>
            {children}
           </div>

        </div>
    );
}

export default Page;