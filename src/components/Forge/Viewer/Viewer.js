import React, { useEffect } from 'react';
import { initializeViewer } from './viewer-helper';

import './Viewer.css';

import { useSelector } from 'react-redux';

const Viewer = () => {
  //USing Redux
  const authCredentials = useSelector((state) => state.auth.credentials);
  const access_token = authCredentials.access_token;

  const urn = 'dXJuOmFkc2sud2lwcHJvZDpmcy5maWxlOnZmLmlDbnVRSHFaUnB1V0dUN2t4cnk3aFE_dmVyc2lvbj0y';

  useEffect(() => {
    if (access_token) {
      initializeViewer(urn, access_token);
      // initializeViewer(urn, authCtx.credentials.access_token);
    }
  }, []);

  return <div className='adsk-viewing-viewer' id='viewerContainer'></div>;
};

export default Viewer;
