import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
// import { NavMenu, theme } from './NavMenu';
import { useState } from "react";
//import HomeIcon from '@mui/icons-material/Home';
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CastConnectedOutlinedIcon from "@mui/icons-material/CastConnectedOutlined";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import FolderSharedOutlinedIcon from "@mui/icons-material/FolderSharedOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";

import SideMenu from "./SideMenu";

import { ThemeProvider } from "./ThemeController";

let theme = "light";

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <ThemeProvider>
        <div data-theme="black">
          <SideMenu />
          <div className="flex flex-col">{this.props.children}</div>
        </div>
      </ThemeProvider>
    );
  }
}
