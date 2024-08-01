import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeController';
import { colors } from '@mui/material';
function SideBarBTN({ name, ICON, callBack, state }) {
  // Prevent callBack from executing immediately
  const handleClick = () => callBack(name);
  const { theme, toggleTheme } = useTheme();

  return (
    <li className="my-2 flex flex-col items-center">
      <Link
        to={`/${name.toLowerCase()}`}
        onClick={handleClick()} // Pass function reference
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '15px',
          backgroundColor: state === name ? theme.sidebar.activeBtn : theme.sidebar.background,
          border: 'none',
          padding: '0',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.3s ease',
        }}
        className="flex flex-col items-center hover:bg-opacity-80"
      >
        <ICON style={{ fontSize: '20px', color: theme.color }} />
        <p className="text-center text-xs " style={{ color: theme.color }} >{name}</p>
      </Link>
    </li>
  );
}

function DrawerBTN({ name, ICON, callBack, state, onClick }) {
  // Prevent callBack from executing immediately
  const handleClick = () => callBack(name);
  const { theme, toggleTheme } = useTheme();

  return (
    <li className="my-2 flex items-center">
      <Link
        to={`/${name.toLowerCase()}`}
        onClick={handleClick()} // Pass function reference
        style={{
          height: "35px",
          borderRadius: '5px',
          backgroundColor: state.toLowerCase() === name.toLowerCase() ? theme.sidebar.activeBtn : theme.sidebar.background,
          border: 'none',
          padding: '0',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.3s ease',
        }}
        className="w-full hover:bg-opacity-80"
      >
        <div className='flex items-start'>
          <ICON style={{ fontSize: '20px' ,color:theme.color}} />
          <p className="text-xs mx-1"  style={{ color:theme.color}}>{name}</p>
        </div>
      </Link>
    </li>
  );
}

// Correctly exporting components
export { SideBarBTN, DrawerBTN };
