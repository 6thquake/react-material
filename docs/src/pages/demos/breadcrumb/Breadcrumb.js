import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import Breadcrumb from 'react-material/Breadcrumb';
import { Home, Grade, Lock } from '@material-ui/icons';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.breadcrumbNameMap = {
      '/': { name: 'home', icon: <Home /> },
      '/apps': { name: 'Application List', icon: <Home /> },
      '/apps/1': { name: 'Application1', icon: <Grade /> },
      '/apps/2': { name: 'Application2', icon: <Lock /> },
      '/apps/1/detail': { name: 'Detail', icon: '' },
      '/apps/2/detail': { name: 'Detail', icon: '' },
    };
    this._url = '/apps/2/detail';
  }

  render() {
    return (
      <div>
        <Breadcrumb
          nameMap={this.breadcrumbNameMap}
          currUrl={this._url}
          showIcon={true}
          separator=">"
        />
      </div>
    );
  }
}
export default App;
