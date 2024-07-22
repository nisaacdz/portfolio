import React from 'react';

const ProfilePicture = ({ size }) => {
  const pictureSize = size === 'large' ? '200px' : '50px'; // Adjust sizes based on 'large' or 'default'

  return (
    <img
      src="[Your Profile Picture Path]" // Replace with your profile picture source
      alt="Your Name - Profile Picture"
      style={{ width: pictureSize, height: pictureSize, borderRadius: '50%' }}
    />
  );
};

export default ProfilePicture;
