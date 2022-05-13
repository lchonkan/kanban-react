import React, { useEffect } from 'react';
import HubList from '../components/Forge/Hubs/HubList';

import { useSearchParams } from 'react-router-dom';

const Profile = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  let code = searchParams.get('code');

  console.log(code);

  useEffect(() => {
    //TODO Send a requesto to our backend with our code to get an access token
  }, [code]);

  return (
    <div>
      <h1>Profile</h1>
      <br />
      <h3>Authorization code: {code}</h3>
      <br />
      <HubList>
        <h2>HUBS LIST</h2>
      </HubList>
    </div>
  );
};

export default Profile;
