import React from 'react';
import mon from '../image/mon.jpg';
import './style.css';

const Avatar = () => (
    <img 
        src={mon}
        alt="User Avatar"
        style={{
            borderRadius: '50%',
            width: '165px',
            height: '165px',
            objectFit: 'cover'
        }}
    />
);

const UserName = () => (
    <h2 style={{ color: '#ffffffff', margin: '10px 0' }}>
        Banlu Chimsing
    </h2>
);

const UserBio = () => (
    <p style={{ color: '#ffffffff', fontSize: '20px' }}>
        660701764 <br />
        สาขาวิชา เทคโนโลยีสารสนเทศ <br />
        คณะ วิทยาศาสตร์
    </p>
);

const UserCard = () => {
    return (
        <div className='user_card' style={{
            padding: '20px',
            borderRadius: '12px',
            textAlign: 'center',
            backgroundColor: '#262626ff',
            width: '275px',
            height: '350px',
            margin: '50px auto'
        }}>
            <Avatar />
            <UserName />
            <UserBio />
        </div>
    );
};

export default UserCard;