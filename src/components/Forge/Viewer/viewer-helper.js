import axios from 'axios';
/* global Autodesk, THREE */
const url_base = 'http://localhost:4000/';
// Get token from server
const getToken = async () => {
  const { data } = await axios.get(url_base + 'forge/auth');
  return data;
};

export const initializeViewer = async (urn) => {
  const token = await getToken();

  const viewerOptions = {
    env: 'AutodeskProduction',
    accessToken: token,
    api: 'derivativeV2',
  };
  var viewerContainer = document.getElementById('viewerContainer');
  var viewer = new Autodesk.Viewing.Private.GuiViewer3D(viewerContainer, {});

  Autodesk.Viewing.Initializer(viewerOptions, () => {
    viewer.start();
    Autodesk.Viewing.Document.load(`urn:${urn}`, (doc) => {
      var defaultModel = doc.getRoot().getDefaultGeometry();
      viewer.loadDocumentNode(doc, defaultModel);
    });
  });
};
