import React from "react";
import PageNavBar from "./PageNavBar";
import { useTheme } from "./ThemeController"; // Assuming you have defined useTheme and ThemeContext correctly
// import themes from "../themes"; // Import your themes

function Page({ name, Icon, children }) {
  const { theme, toggleTheme } = useTheme();
  return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: theme.background,
          color: theme.color,
          transition: "background-color 0.3s, color 0.3s",
        }}
        className="flex flex-col md:ms-10 min-w-screen"
      >
        <PageNavBar name={name} Icn={Icon} />
        <div className="flex flex-col p-4 md:ms-10">
          {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
          {children}
        </div>
      </div>
  );
}

export default Page;

// function Page({ name, Icon, children }) {

//     return (
//         <div style={{ minHeight: "100vh", backgroundColor: "#090b0d" }} className='flex flex-col md:ms-10 min-w-screen' >
//             <PageNavBar name={name} Icn={Icon} />
//             <div className='flex flex-col p-4 md:ms-10'>
//                 <ThemeProvider>
//                     {children}
//                 </ThemeProvider>
//             </div>

//         </div>
//     );
// }

// export default Page;

// Page.js
