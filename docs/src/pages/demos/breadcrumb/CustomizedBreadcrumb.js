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
      },
      { path: '/demos/breadcrumb', name: 'Breadcrumb', icon: <Grade /> },
      { path: '/demos/Anchor', name: 'Anchor', icon: <Lock /> },
      {
        path: '/api',
        name: 'Api',
        icon: <Home />,
      },
      { path: '/api/breadcrumb', name: 'Breadcrumb', icon: '' },
      { path: '/api/Anchor', name: 'Anchor', icon: '' },
    ];
  }

  indexOf(path) {
    return this.routes.findIndex(element => element.path === path);
  }

  render() {
    const pathname = typeof window == 'undefined' ? '/demos/breadcrumb' : window.location.pathname;

    let pathSnippets = pathname.split('/').filter(i => i);
    pathSnippets.unshift('');

    const extraBreadcrumbItems = pathSnippets.map((url, i) => {
      const path = `${pathSnippets.slice(0, i + 1).join('/') || '/'}`;
      const index = this.indexOf(path);

      if (index === -1) {
        return null;
      }

      const route = this.routes[index];

      return (
        <BreadcrumbItem
          key={path}
          path={path}
          icon={route.icon}
          name={route.name}
          notLink={pathSnippets.length == i + 1}
        />
      );
    });

    return <Breadcrumb color="white">{extraBreadcrumbItems}</Breadcrumb>;
  }
}
export default App;
