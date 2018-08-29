import React from 'react';
import PropTypes from 'prop-types';
import withWidth from '@6thquake/react-material/withWidth';
import Typography from '@6thquake/react-material/Typography';

const components = {
  sm: 'em',
  md: 'u',
  lg: 'del',
};

function WithWidth(props) {
  const { width } = props;
  const Component = components[width] || 'span';

  return (
    <Typography variant="subheading">
      <Component>{`Current width: ${width}`}</Component>
    </Typography>
  );
}

WithWidth.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withWidth()(WithWidth);
