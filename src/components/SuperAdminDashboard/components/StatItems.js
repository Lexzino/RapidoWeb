import React from 'react';
import { BiBadge, BiBarChart, BiUserCheck, BiUserPlus } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';

export const stats = [
    {
        name: 'Number of Visitors',
        color: '#7D70BC',
        linearGradient: 'linear-gradient(to bottom, #9987F0, #6353AE)',
        icon: <BiUserCheck size={50} color={'white'} />
    },
    {
        name: 'Number of Registered Visitors',
        color: '#339AEF',
        linearGradient: 'linear-gradient(to bottom, #3EA2E0, #0D81C7)',
        icon: <BiBadge size={50} color={'white'} />
    },
    {
        name: 'Number of Registered Specialists',
        color: 'green',
        linearGradient: 'linear-gradient(to bottom, #45C889, #1BA05E)',
        icon: <BiUserPlus size={50} color={'white'} />
    },
    {
        name: 'Number of Registered Pharmacies',
        color: 'red',
        linearGradient: 'linear-gradient(to bottom, #F26687, #DC496C)',
        icon: <BiBarChart size={50} color={'white'} />
    },
    {
        name: 'Ratings',
        color: '#1A4402',
        linearGradient: 'linear-gradient(to bottom, #6F9525, #204B09)',
        icon: <FaStar size={50} color={'white'} />,
        volume: 108
    }
]