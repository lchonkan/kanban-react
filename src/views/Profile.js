import React, { useEffect } from 'react';
import HubList from '../components/Forge/Hubs/HubList';

//using redux to get the token
import { useSelector, useDispatch } from 'react-redux';

//using the updatedHubs from the store
import { dataActions } from '../store/forge-data-management-slice';

const Profile = () => {
  //USing Redux
  const authCredentials = useSelector((state) => state.auth.credentials);
  const dispatch = useDispatch();

  const onGetHubs = (data) => {
    const hubs = JSON.parse(data).data; // array of hubs
    console.log('Hubs...', hubs);
    dispatch(dataActions.setHubs(hubs));
    hubs.forEach((hub) => {
      getProjects(hub.id);
    });
  };

  const getHubs = async () => {
    const access_token = { access_token: authCredentials.access_token };
    console.log('Getting hubs...', access_token);

    await fetch('http://localhost:8000/api/data-management/gethubs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(access_token),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        onGetHubs(data);
      })

      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const getProjects = async (hubId) => {
    const data = { access_token: authCredentials.access_token, hubId: hubId };

    console.log('Getting projects...', data);

    await fetch('http://localhost:8000/api/data-management/getProjects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        const projects = JSON.parse(data).data;
        console.log('Projects for Hub: ' + hubId, { projects: projects });
        //onGetHubs(data);
      })

      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    getHubs();
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      <br />
      {/* <h3>Authorization code: {code}</h3> */}
      <br />
      <HubList />
    </div>
  );
};

export default Profile;
