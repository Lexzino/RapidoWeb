import React from 'react';
import './style.css'; // Assuming you have some custom CSS
// import ProfileImage from '../../../assets/pageImages/doctor-profile.svg'
// import AvailableAvatar from '../../../assets/icons/available-avatar.svg'
// import RobotAvatar from '../../../assets/icons/robot-icon.svg'
// import LikeIcon from '../../../assets/icons/like-icon.svg'
// import JobIcon from '../../../assets/icons/job-icon.svg'
import { Button } from 'antd';

const DoctorProfileCard = ({ doctor }) => {
    return (
        <div className="card">
            <div className="card-body text-center pb-5">
                <div className='flex justify-between p-2'>
                    <div className='left-avatar'><img src="/icons/available-avatar.svg" alt='available-avatar' /></div>
                    <div><img src="/icons/robot-icon.svg" alt='robot-avatar' /></div>
                </div>
                <div className='flex justify-center'>
                    <img
                        src="/pageImages/doctor-profile.svg"
                        alt={`${doctor.name}'s profile`}
                        className="rounded-circle mb-3"
                        style={{ width: '100px', height: '100px' }}
                    />
                </div>
                <h5 className="card-title">{doctor.name}</h5>
                <p className="card-subtitle text-muted">{doctor.country}</p>
                <div className="rating mt-2">
                    <span className="rating-value">{doctor.rating}</span>
                    <span className="review-count">({doctor.reviewCount})</span>
                </div>
                <Button className="mt-3 primary-color">Book an Appointment</Button>
            </div>
            <div className=" w-full h-[2px] primary-color-bg"></div>
            <div className="card-footer flex bg-white justify-between p-3">
                <div className='flex gap-2'>
                    <img src="/icons/like-icon.svg" alt="like-icon" className="like-icon" />
                    <p className='p-class-card'>95%</p>
                </div>
                <div className='flex gap-2'>
                    <img src="/icons/job-icon.svg" alt="job-icon" className="job-icon" />
                    <p className='p-class-card'>4 Years</p>
                </div>
            </div>
        </div>
    );
};

export default DoctorProfileCard;
