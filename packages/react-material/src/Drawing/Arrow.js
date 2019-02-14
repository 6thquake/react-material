/**
 * @ignore - do not document.
 */

import React, { Component } from 'react';

export default class Arrow extends Component {
  render() {
    const { arrowStyle } = this.props;
    const composeArrow = (
      <svg width="13px" height="13px">
        <rect width="7px" height="7px" fill="#000" transform="translate(3 7) rotate(-45)" />
      </svg>
    );
    const aggregateArrow = (
      <svg width="14px" height="14px">
        <rect
          width="7px"
          height="7px"
          stroke="#000"
          stroke-width="1"
          fill="#fff"
          transform="translate(3 7) rotate(-45)"
        />
      </svg>
    );
    const realizeArrow = (
      <svg width="10px" height="10px">
        <polygon points="0 0, 10 5, 0 10" stroke="#000" fill="#fff" stroke-width="1" />
      </svg>
    );
    const generalizeArrow = (
      <svg width="10px" height="10px">
        <polygon points="0 0, 10 5, 0 10" fill="#000" />
      </svg>
    );
    const importArrow = (
      <svg width="12px" height="12px">
        <polygon
          points="1.4 11.9 1.2 11.5 10.6 6 1.2 0.6 1.4 0.1 11.6 6 1.4 11.9"
          stroke="#000"
          stroke-width="0.5"
        />
      </svg>
    );
    return (
      <div>
        {arrowStyle === 'compose'
          ? composeArrow
          : arrowStyle === 'aggregate'
          ? aggregateArrow
          : arrowStyle === 'realize'
          ? realizeArrow
          : arrowStyle === 'default'
          ? null
          : arrowStyle === 'generalize'
          ? generalizeArrow
          : arrowStyle === 'import'
          ? importArrow
          : null}
      </div>
    );
  }
}
