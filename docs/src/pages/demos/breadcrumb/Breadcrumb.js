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
      '/demos': { name: 'Demo' },
      '/api': { name: 'Api', icon: <Home /> },
      '/demos/breadcrumb': { name: 'breadcrumb', icon: <Grade /> },
      '/demos/Anchor': { name: 'Anchor', icon: <Lock /> },
      '/api/breadcrumb': { name: 'breadcrumb', icon: '' },
      '/api/Anchor': { name: 'Anchor', icon: '' },
    };
    this._url = '/api/breadcrumb';
  }

  render() {
    return (
      <div>
        <Breadcrumb
          nameMap={this.breadcrumbNameMap}
          separator=">"
          currUrl={this._url}
        />
      </div>
    );
  }
}
export default App;
