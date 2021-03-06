import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import Breadcrumb from '@6thquake/react-material/Breadcrumb';
import BreadcrumbItem from '@6thquake/react-material/BreadcrumbItem';
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

  render() {
    const pathname = typeof window == 'undefined' ? '/demos/breadcrumb' : window.location.pathname;

    let branch = matchRoutes(this.routes, pathname);

    if (pathname != '/') {
      let home = matchRoutes(this.routes, '/');
      branch = home.concat(branch);
    }

    let routes = branch.map(route => route.route);

    return (
      <Breadcrumb separator=">">
        {routes.map((route, index) => {
          return (
            <BreadcrumbItem>
              {routes.indexOf(route) === routes.length - 1 ? (
                <span>
                  {route.icon}
                  &nbsp;
                  {route.name}
                </span>
              ) : (
                <a href={route.path}>
                  {route.icon}
                  &nbsp;
                  {route.name}
                </a>
              )}
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>
    );
  }
}
export default App;
