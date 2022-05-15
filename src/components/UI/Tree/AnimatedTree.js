import React from 'react';
import { useSelector } from 'react-redux';

import Tree from 'react-animated-tree';
import './AnimatedTree.css';

const treeStyles = {
  //   position: 'relative',
  'text-align': 'left',
  'font-size': '1em',
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

const AnimatedTree = () => {
  //Using Redux for context
  const hubs = useSelector((state) => state.dataManagement.hubs);
  const projects = useSelector((state) => state.dataManagement.projects);

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
        return (
          <Tree content={hub.attributes.name} type=''>
            {projects.map((project) => {
              let projecItem = null;
              if (project.hubId === hub.id) {
                projecItem = <Tree content={project.attributes.name} />;
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
