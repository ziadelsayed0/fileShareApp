import React, { Component } from 'react';
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
import PageNavBar from '../components/PageNavBar';
import Page from '../components/Page';
import { ThemeProvider } from '../components/ThemeController';



export function Home() {
  return (

    <Page name="home" Icon={HomeOutlinedIcon}  >
      <div className="min-h-screen p-6">

        {/* Recent Connected Devices Section */}
        <div className="rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold mb-6">
            Recent Connected Devices
          </h1>
          <div className="flex flex-wrap -mx-2">
            <a
              href="#"
              className="bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow w-60 m-2"
            >
              <h3 className="font-semibold text-gray-800">Smart TV</h3>
              <p className="text-sm text-gray-600">
                Last connected: 2 hours ago
              </p>
            </a>
            <a
              href="#"
              className="bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow w-60 m-2"
            >
              <h3 className="font-semibold text-gray-800">Laptop</h3>
              <p className="text-sm text-gray-600">Last connected: Yesterday</p>
            </a>
            <a
              href="#"
              className="bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow w-60 m-2"
            >
              <h3 className="font-semibold text-gray-800">Phone</h3>
              <p className="text-sm text-gray-600">
                Last connected: 3 days ago
              </p>
            </a>
          </div>
        </div>

        {/* News Section */}
        <div className="rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">News</h2>
          <div className="flex flex-wrap -mx-2">
            <a
              href="#"
              className="bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow w-60 m-2"
            >
              <span className="font-semibold text-indigo-600 hover:underline">
                Breaking News: New Technology in AI
              </span>
              <p className="text-sm text-gray-600">Published: 3 hours ago</p>
            </a>
            <a
              href="#"
              className="bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow w-60 m-2"
            >
              <span className="font-semibold text-indigo-600 hover:underline">
                Upcoming Event: Tech Conference 2024
              </span>
              <p className="text-sm text-gray-600">Date: August 25, 2024</p>
            </a>
            <a
              href="#"
              className="bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow w-60 m-2"
            >
              <span className="font-semibold text-indigo-600 hover:underline">
                New Release: Latest Gadget on the Market
              </span>
              <p className="text-sm text-gray-600">Published: 2 days ago</p>
            </a>
          </div>
        </div>
      </div>
    </Page>

  );

}
