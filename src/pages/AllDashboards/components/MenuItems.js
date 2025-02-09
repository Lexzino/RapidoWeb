import React from "react"
import { FaBuilding, FaCalendar, FaEnvelope, FaHome, FaNewspaper, FaNotesMedical, FaShoppingBag, FaUser, FaUserAlt, FaUserGraduate, FaUserInjured } from "react-icons/fa"
import { BiSolidDashboard, BiHelpCircle } from 'react-icons/bi';

export const menu = [
    {
      name: 'Dashboard',
      icon: <FaHome />,
      submenu: [
        {
          name: 'Super Admin',
          icon: '',
          link: ''
        },
        {
          name: 'Doctors',
          icon: <FaUser />,
          link: ''
        },
        {
          name: "Pharmacy's",
          icon: <FaUserGraduate />,
          link: ''
        },
        {
          name: 'Patients',
          icon: <FaUserInjured />,
          link: ''
        },
        {
          name: 'Therapists',
          icon: <FaCalendar />,
          link: '' 
        }
      ]
    },
    {
        name: 'Hospitals',
        icon: <FaBuilding />,
        link: ''
    },
    {
        name: 'Deals',
        icon: <FaShoppingBag />,
        link: ''
    },
    {
        name: 'Contacts',
        icon: <FaUserAlt />,
        link: ''
    },
    {
        name: 'Reports',
        icon: <FaNotesMedical />,
        link: ''
    },
    {
        name: 'Calendar',
        icon: <FaCalendar />,
        link: ''
    },
    {
        name: 'Message',
        icon: <FaEnvelope />,
        link: ''
    },
    {
        name: 'Documents',
        icon: <FaNewspaper />,
        link: ''
    }
];

export const menu2 = [
  {
    name: 'Articles',
    icon: <BiSolidDashboard color="#1A4402" />,
    link: ''
  }, 
  {
    name: 'Profile',
    icon: <FaUser color="#1A4402" />,
    link: ''
  },
  {
    name: 'Help',
    icon: <BiHelpCircle color="#1A4402" />,
    link: ''
  }
]
