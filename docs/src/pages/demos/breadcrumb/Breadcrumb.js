import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import Breadcrumb from '@6thquake/react-material/Breadcrumb';
import { Home, Grade, Lock } from '@material-ui/icons';

import { matchRoutes } from 'react-router-config';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.routes = [
      { path: '/', name: 'Home', icon: <Home />, exact: true },
      {
        path: '/demos',
        name: 'Demos',
        routes: [
          { path: '/demos/breadcrumb', name: 'Breadcrumb', icon: <Grade /> },
          { path: '/demos/Anchor', name: 'Anchor', icon: <Lock /> },
        ],
      },
      {
        path: '/api',
        name: 'Api',
        icon: <Home />,
        routes: [
          { path: '/api/breadcrumb', name: 'Breadcrumb', icon: '' },
          { path: '/api/Anchor', name: 'Anchor', icon: '' },
        ],
      },
    ];
  }

  itemRender(route, params, routes, paths) {
    const last = routes.indexOf(route) === routes.length - 1;
    return last ? (
      <span>
        {route.icon}
        &nbsp;
        {route.name}
      </span>
    ) : (
      <a href={paths.join('/')}>
        {route.icon}
        &nbsp;
        {route.name}
      </a>
    );
  }

  render() {
    const pathname = typeof window == 'undefined' ? '/demos/breadcrumb' : window.location.pathname;

    let branch = matchRoutes(this.routes, pathname);

    if (pathname != '/') {
      let home = matchRoutes(this.routes, '/');
      branch = home.concat(branch);
    }

    let routes = branch.map(route => route.route);

    return <Breadcrumb routes={routes} itemRender={this.itemRender} />;
  }
}
export default App;
