import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '/about',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },

  {
    title: 'Work',
    path: '/work',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Skills & CV',
    path: '/skills',
    icon: <FaIcons.FaCogs />,
    cName: 'nav-text'
  },
  {
    title: 'Tips & Ideas',
    path: '/tips',
    icon: <DeveloperModeIcon/>,
    cName: 'nav-text'
  },

  

];