import { NavLink , useLocation } from "react-router-dom";
import { Navbar , Dropdown } from "flowbite-react";

import logo from '../img/logo.png';

export default function NavbarComp() {
  const location = useLocation();

  const getNavItemClass = (path) => {
    
      if(path === "/about")
      {
        return 'text-[#3A5A40] text-xl'
      }else{
        return 'sm:text-white text-black text-xl'
      }
      
    };

  return (
    <Navbar fluid rounded className="fixed top-0 left-0 right-0 md:bg-transparent z-50">
      <div className="flex flex-wrap md:flex-nowrap mt-4 w-full items-center justify-between">
        <Navbar.Brand href="https://flowbite-react.com">
          <img src={logo} className="mr-3 h-14 sm:h-24 ml-4" alt="nom" />
        </Navbar.Brand>
        <div className="flex sm:mr-20 items-center md:order-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-gray-600 sm:text-white mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
          <Navbar.Toggle className="block md:hidden" />
        </div>
        <Navbar.Collapse className="flex-nowrap z-10 pl-[10%] md:flex  md:flex-row md:items-center">
          <NavLink
           className={getNavItemClass(location.pathname)}
            to="/"
            end
          >
            ACCUEIL
          </NavLink>
          <NavLink
            className={getNavItemClass(location.pathname)} 
            
            to="/about"
          >
            A PROPOS
          </NavLink>
        
            <div className={getNavItemClass(location.pathname)} >
              <Dropdown  label="NOS PROJETS REALISES" inline>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Item>Sign out</Dropdown.Item>
              </Dropdown>
            </div>
            
          
          <NavLink
            className={getNavItemClass(location.pathname)} 
            to="/projects-ongoing"
          >
            NOS PROJETS EN COURS
          </NavLink>
          <NavLink
            className={getNavItemClass(location.pathname)} 
            to="/contact"
          >
            CONTACT
          </NavLink>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
