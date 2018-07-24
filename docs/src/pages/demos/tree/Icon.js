import React from 'react';
import Tree from '@6thquake/react-material/Tree';
import { withStyles } from '@6thquake/react-material/styles';

const TreeNode = Tree.TreeNode;

class Demo extends React.Component {
  render() {
    return (
      <Tree showIcon defaultExpandAll defaultSelectedKeys={['0-0-0']}>
        <TreeNode icon={<i class="material-icons">folder_open</i>} title="parent 1" key="0-0">
          <TreeNode icon={<i class="material-icons">folder_open</i>} title="leaf" key="0-0-0" />
          <TreeNode
            icon={({ selected }) => <i class="material-icons">{selected ? 'check' : 'close'}</i>}
            title="leaf"
            key="0-0-1"
          />
        </TreeNode>
      </Tree>
    );
  }
}

export default withStyles()(Demo);
