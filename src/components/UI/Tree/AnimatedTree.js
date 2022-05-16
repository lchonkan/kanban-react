import React, { useState } from 'react';
//using redux to get the token
import { useSelector, useDispatch } from 'react-redux';

//using the updatedHubs from the store
import { dataActions } from '../../../store/forge-data-management-slice';

import Tree from 'react-animated-tree-v2';
import './AnimatedTree.css';

const treeStyles = {
  //   position: 'relative',
  'text-align': 'left',
  'font-size': '0.9em',
  top: 100,
  left: 40,
  color: 'white',
  fill: 'white',
  width: 'auto',
  zIndez: 100,
};

const typeStyles = {
  fontSize: '2em',
  verticalAlign: 'center',
};

const AnimatedTree = (props) => {
  //Using context for folder contents
  const [folderContents, setFolderContents] = useState([]);

  //Using Redux for context
  const hubs = useSelector((state) => state.dataManagement.hubs);
  const projects = useSelector((state) => state.dataManagement.projects);
  const topFolders = useSelector((state) => state.dataManagement.topFolders);
  const folders = useSelector((state) => state.dataManagement.folders);

  const authCredentials = useSelector((state) => state.auth.credentials);
  const access_token = authCredentials.access_token;

  const dispatch = useDispatch();

  // Handling folder contents
  const onGetFolderContents = (parentId, folderContents) => {
    folderContents.forEach((element) => {
      if (element.type === 'folders') {
        console.log('Adding a folder to the tree:', element.attributes.name);
        return dispatch(dataActions.addFolder({ ...element, parentId }));
      }
    });
  };

  // getting folder contents directly from forge API (not from server)
  const getFolderContents = async (projectId, folderId) => {
    const data = { access_token, projectId, folderId };
    await fetch('http://localhost:8000/api/data-management/getFolderContents', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        const folderContents = JSON.parse(data).data;
        console.log('FolderContents', folderContents);
        onGetFolderContents(folderId, folderContents);
      })

      .catch((error) => {
        console.error('Error:', error);
      });
  };

  let tree = (
    <Tree content='Home' type='ITEM' canHide open style={treeStyles}>
      <Tree content='hello' type={<span style={typeStyles}>🙀</span>} canHide />
      <Tree content='subtree with children' canHide>
        <Tree content='hello' />
        <Tree content='sub-subtree with children'>
          <Tree content='child 1' style={{ color: '#63b1de' }} />
          <Tree content='child 2' style={{ color: '#63b1de' }} />
          <Tree content='child 3' style={{ color: '#63b1de' }} />
          <Tree content='Nesting'>
            <Tree>
              <Tree content='child 2' style={{ color: '#63b1de' }} />
            </Tree>
            <Tree>
              <Tree></Tree>
            </Tree>
          </Tree>
        </Tree>
        <Tree content='hello' />
      </Tree>
      <Tree content='hello' canHide />
      <Tree content='hello' canHide />
    </Tree>
  );

  const dataTree = (
    <Tree content='Hubs' type='' open style={treeStyles}>
      {hubs.map((hub) => {
        //! HUBS
        return (
          <Tree content={hub.attributes.name} type=''>
            {projects.map((project) => {
              //! PROJECTS
              let projecItem = null;
              if (project.hubId === hub.id) {
                projecItem = (
                  <Tree content={project.attributes.name}>
                    {topFolders.map((topFolder) => {
                      //!TOP FOLDERS
                      let folderItem = null;
                      if (topFolder.projectId === project.id) {
                        folderItem = (
                          <Tree
                            onItemClick={() => {
                              getFolderContents(project.id, topFolder.id);
                            }}
                            content={topFolder.attributes.name}
                          >
                            {folders.map((folder) => {
                              //!FOLDERS

                              let folderItem = null;
                              if (folder.parentId === topFolder.id) {
                                folderItem = (
                                  <Tree
                                    onItemClick={() => {
                                      getFolderContents(project.id, folder.id);
                                    }}
                                    content={folder.attributes.name}
                                    open
                                  ></Tree>
                                );
                              }
                              return folderItem;
                            })}
                          </Tree>
                        );
                      }
                      return folderItem;
                    })}
                  </Tree>
                );
              }
              return projecItem;
            })}
          </Tree>
        );
      })}
    </Tree>
  );

  return <>{projects.length > 0 ? dataTree : tree}</>;
};

export default AnimatedTree;
