import React, { Component } from 'react';
import { withStyles } from '../styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const styles = theme => ({
    horizontal: {
        '@global button:first-child': {
            borderTopLeftRadius: 2,
            borderBottomLeftRadius: 2
        },
        '@global button:last-child': {
            borderTopRightRadius: 2,
            borderBottomRightRadius: 2
        }
    },
    vertical: {
        display: 'inline-block',
        verticalAlign: 'middle',
        '@global button:first-child': {
            borderTopLeftRadius: 2,
            borderTopRightRadius: 2
        },
        '@global button:last-child': {
            borderBottomLeftRadius: 2,
            borderBottomRightRadius: 2
        },
        '@global button': {
            width: '100%',
            maxWidth: '100%',
            display: 'block'
        }
    },
    group: {
        '@global button': {
            borderRadius: 0
        }
    }
});

class Group extends Component {
    getChildContext() {
        return {
            resetActive:()=>{
                this.setState({});
            }
        }
    }

    render() {
        const {children, position, className: classNamePro, classes} = this.props;
        const className = classNames({
            [classes.group]: true,
            [classes.vertical]: position === 'vertical',
            [classes.horizontal]: position === 'horizontal'
        }, classNamePro);
        return (
            <div className={className}>
                {children}
            </div>
        )
    }
}



Group.propTypes = {
    position: PropTypes.oneOf(['vertical', 'horizontal'])
};

Group.defaultProps = {
    position: 'horizontal'
};

Group.childContextTypes = {
    resetActive: PropTypes.func
};

export default withStyles(styles)(Group);