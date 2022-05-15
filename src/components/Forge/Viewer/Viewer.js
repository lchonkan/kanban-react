import React, { useEffect, useContext } from 'react';
import { initializeViewer } from './viewer-helper';
import { AuthContext } from '../../../context/auth-provider';

import './Viewer.css';

const Viewer = () => {
  const authCtx = useContext(AuthContext);

  const urn = 'dXJuOmFkc2sud2lwcHJvZDpmcy5maWxlOnZmLndWY0xsRE5LUWVXdFctc2pQX0RUX1E_dmVyc2lvbj0x';

  useEffect(() => {
    if (authCtx.credentials.access_token) {
      initializeViewer(urn, authCtx.credentials.access_token);
    }
  }, []);

  return (
    <div>
      {/* <h2>Forge Viewer</h2> */}
      <div className='dsk-viewing-viewer' id='viewerContainer'></div>
    </div>
  );
};

export default Viewer;
