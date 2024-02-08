import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Upload } from '@mui/icons-material';
import { IoPersonCircleOutline } from "react-icons/io5";
import UploadAvatar from './UploadAvatar';

const Profile = ({ token }) => {
  const [user, setUser] = useState({});
  const [isUserUpdated, setIsUserUpdated] = useState(false);

  useEffect(() => {
    const getProfileData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:1337/api/users/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(data);
        setIsUserUpdated(false);
      } catch (error) {
        console.error(error);
      }
    };

    getProfileData();
  }, [token, isUserUpdated]);

  return (
    <div className="profile">
      <div className="avatar">
        <div className="avatar-wrapper">
          {user.avatarUrl ? (
            <img className="avatar" src={`http://localhost:1337${user.avatarUrl}`} alt={`${user.username} avatar`} />
          ) : (
            <IoPersonCircleOutline />
          )}
          <UploadAvatar
            token={token}
            userId={user.id}
            username={user.username}
            avatarUrl={user.avatarUrl}
            setIsUserUpdated={setIsUserUpdated}
          />
        </div>
      </div>
      <div className="body">
        <h1>Profile</h1>
        {/* Display user information */}
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        {/* Add more fields as needed */}
      </div>
    </div>
  );
};

export default Profile;