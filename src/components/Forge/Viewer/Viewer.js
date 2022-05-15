import React, { useEffect } from 'react';
import { initializeViewer } from './viewer-helper';

const Viewer = () => {
  const urn =
    'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YWRzay1zdHJ1Y3R1cmFsLWJyaWRnZS1kYXRhc2V0LzIwMTlfMDVfMDdfQnJpZGdlLU9ubHlfVjIwMjAucnZ0';

  useEffect(() => {
    initializeViewer(urn);
  }, []);

  return (
    <div>
      <h2>Forge Viewer</h2>
      <div id='viewerContainer'></div>
    </div>
  );
};

export default Viewer;
