import React, { useEffect } from 'react';
import { initializeViewer } from './viewer-helper';

import './Viewer.css';

import { useSelector } from 'react-redux';

const Viewer = () => {
  //USing Redux
  const authCredentials = useSelector((state) => state.auth.credentials);
  const access_token = authCredentials.access_token;

  const urn = 'dXJuOmFkc2sud2lwcHJvZDpmcy5maWxlOnZmLndWY0xsRE5LUWVXdFctc2pQX0RUX1E_dmVyc2lvbj0x';

  useEffect(() => {
    if (access_token) {
      initializeViewer(urn, access_token);
      // initializeViewer(urn, authCtx.credentials.access_token);
    }
  }, []);

  return (
    <div>
      {/* <h2>Forge Viewer</h2> */}
      <div className='adsk-viewing-viewer' id='viewerContainer'></div>
    </div>
  );
};

export default Viewer;
