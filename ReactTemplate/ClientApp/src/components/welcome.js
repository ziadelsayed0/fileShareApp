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


function Welcome({ onLogin }) {

    return (
        <div className='hero bg-base-200 min-h-screen'>
            <div className='hero-content flex-col lg:flex-row-reverse'>
                <div className='text-center lg:text-left'>
                    <img src='/logo.png' alt='Logo' className='my-1 mx-auto' style={{ maxWidth: 180 }} />
                    <h1 className='text-5xl font-bold'>Login now!</h1>
                    <p className='py-6'>
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className='btn btn-ghost hover:text-white' onClick={onLogin}>Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default Welcome;