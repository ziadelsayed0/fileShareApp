
import { Connect } from "./panels/Connect";
import { Home } from "./panels/Home";
import { Setting } from "./panels/Setting";
import { LogIN } from "./panels/Login";
import { SignUP } from "./panels/SignUp";

const AppRoutes = [
  {
    index: true,
    element: <LogIN />
  },
  {
    path: '/signup',
    element: <SignUP />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/connect',
    element: <Connect/>
  },
  {
    path: '/setting',
    element: <Setting/>
  }
];

export default AppRoutes;
