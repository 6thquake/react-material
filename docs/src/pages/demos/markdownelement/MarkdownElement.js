import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import MarkdownElement from 'react-material/MarkdownElement'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

function SimpleMarkdownElement(props) {
  const { classes } = props;
  return (
    <div>
      <MarkdownElement  
       language="js"
      >
      {`clone: function (o, visited) {
			var type = _.util.type(o);
      visited = visited || {};
      	switch (type) {	
          case 'Object':
					if (visited[_.util.objId(o)]) {
						return visited[_.util.objId(o)];
					}
					var clone = {};
					visited[_.util.objId(o)] = clone;

					for (var key in o) {
						if (o.hasOwnProperty(key)) {
							clone[key] = _.util.clone(o[key], visited);
						}
					}

					return clone;

		}
` }
      </MarkdownElement>
      <MarkdownElement
      language='css'
      >
      {`
      body {
        font: 100%/1.5 Questrial, sans-serif;
        tab-size: 4;
        hyphens: auto;
      }
      
      a {
        color: inherit;
      }
      
      section h1 {
        font-size: 250%;
      }
      
        section section h1 {
          font-size: 150%;
        }
      
      `}
        </MarkdownElement>
    </div>
  );
}

SimpleMarkdownElement.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMarkdownElement);
