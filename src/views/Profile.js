import React from 'react';
import HubList from '../components/Forge/Hubs/HubList';

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <br />
      {/* <h3>Authorization code: {code}</h3> */}
      <br />
      <HubList>
        <h2>HUBS LIST</h2>
      </HubList>
    </div>
  );
};

export default Profile;
