import React from 'react';
import { Link } from 'react-router-dom';

function SideBarBTN({ name, ICON, callBack, state }) {
  // Prevent callBack from executing immediately
  const handleClick = () => callBack(name);

  return (
    <li className="my-2 flex flex-col items-center">
      <Link
        to={`/${name.toLowerCase()}`}
        onClick={handleClick()} // Pass function reference
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '15px',
          backgroundColor: state === name ? '#ef0533' : '#000',
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
        <ICON className="text-white" style={{ fontSize: '20px' }} />
        <p className="text-center text-white text-xs">{name}</p>
      </Link>
    </li>
  );
}

function DrawerBTN({ name, ICON, callBack, state }) {
  // Prevent callBack from executing immediately
  const handleClick = () => callBack(name);

  return (
    <li className="my-2 flex items-center">
      <Link
        to={`/${name.toLowerCase()}`}
        onClick={handleClick()} // Pass function reference
        style={{
          height: "35px",
          borderRadius: '5px',
          backgroundColor: state === name ? '#ef0533' : '#000',
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
        <div className='flex items-center'>
          <ICON className="text-white" style={{ fontSize: '20px' }} />
          <p className="text-white text-xs mx-1">{name}</p>
        </div>
      </Link>
    </li>
  );
}

// Correctly exporting components
export { SideBarBTN, DrawerBTN };
