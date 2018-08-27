import React from 'react';
import getDisplayName from 'recompose/getDisplayName';

function createComponentDidUpdate(instance) {
  return function componentDidUpdate() {
    const displayName = getDisplayName(this);
    instance.updates.push({
      displayName,
    });
  };
}

// Inspired by https://github.com/maicki/why-did-you-update
class Rerender {
  updates = [];

  spy = () => {
    this.savedCDU = React.Component.prototype.componentDidUpdate;
    React.Component.prototype.componentDidUpdate = createComponentDidUpdate(this);
  };

  savedCDU = null;

  reset = () => {
    this.updates = [];
    React.Component.prototype.componentDidUpdate = this.savedCDU;
  };
}

export default new Rerender();
