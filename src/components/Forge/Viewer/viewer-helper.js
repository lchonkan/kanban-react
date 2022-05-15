import axios from 'axios';
/* global Autodesk, THREE */
const url_base = 'http://localhost:4000/';
// Get token from server
// const getToken = async () => {
//   const { data } = await axios.get(url_base + 'forge/auth');
//   return data;
// };

export const initializeViewer = async (urn, token) => {
  // const token = await getToken();

  const viewerOptions = {
    env: 'AutodeskProduction',
    accessToken: token,
    api: 'derivativeV2',
  };

  //!loading extensions
  // var config3D = {
  //   extensions: ['Autodesk.Viewing.Wireframes'],
  // };

  var viewerContainer = document.getElementById('viewerContainer');
  var viewer = new Autodesk.Viewing.Private.GuiViewer3D(viewerContainer, {});

  Autodesk.Viewing.Private.InitParametersSetting.alpha = true; //enable alpha for the renderer

  Autodesk.Viewing.Initializer(viewerOptions, () => {
    viewer.start();
    Autodesk.Viewing.Document.load(`urn:${urn}`, (doc) => {
      var defaultModel = doc.getRoot().getDefaultGeometry();
      viewer.loadDocumentNode(doc, defaultModel);
      // viewer.setBackgroundColor(0, 100, 0, 0, 0, 0);
      viewer.setLightPreset(2);
      viewer.setQualityLevel(true, true);
      // viewer.setTheme('dark-theme');

      //!Making the background transparent
      viewer.impl.renderer().setClearAlpha(0); //clear alpha channel
      viewer.impl.glrenderer().setClearColor(0xffffff, 0); //set transparent background, color code does not matter
      // viewer.impl.invalidate(true); //trigger rendering

      //!removing the shadow
      viewer.setGroundShadow(false);
    });
  });
};
