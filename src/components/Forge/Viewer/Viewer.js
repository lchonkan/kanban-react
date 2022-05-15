import React, { useEffect, useContext } from 'react';
import { initializeViewer } from './viewer-helper';
import { AuthContext } from '../../../context/auth-provider';

const Viewer = () => {
  const authCtx = useContext(AuthContext);

  const urn = 'dXJuOmFkc2sud2lwcHJvZDpmcy5maWxlOnZmLnhnZ1pRdkNBUjFtVzNWWnFyN1B3NWc_dmVyc2lvbj0z';

  useEffect(() => {
    if (authCtx.credentials.access_token) {
      initializeViewer(urn, authCtx.credentials.access_token);
    }
  }, []);

  return (
    <div>
      <h2>Forge Viewer</h2>
      <div id='viewerContainer'></div>
    </div>
  );
};

export default Viewer;
