import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '../styles';
import { Publish } from '@material-ui/icons';
import PropTypes from 'prop-types';

const styles = {
  rmBackTop: {
    zIndex: '10',
    position: 'fixed',
    right: '100px',
    bottom: '50px',
    height: '40px',
    width: '40px',
    cursor: 'pointer',
  },
  rmBackTopContent: {
    paddingTop: '10px',
    transition: 'all .3s cubic-bezier(.645,.045,.355,1)',
    height: '40px',
    width: '40px',
    borderRadius: '20px',
    backgroundColor: 'rgba(64,64,64,.4)',
    color: '#fff',
    textAlign: 'center',
  },
};

function hasScrollbar() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight);
}

function getScrollTop() {
  var scrollPos;
  if (window.pageYOffset) {
    scrollPos = window.pageYOffset;
  } else if (document.compatMode && document.compatMode != 'BackCompat') {
    scrollPos = document.documentElement.scrollTop;
  } else if (document.body) {
    scrollPos = document.body.scrollTop;
  }
  return scrollPos;
}

class BackTop extends React.Component {
  static propTypes = {
    /**
     * show BackTop button when scroll to this height
     */
    visibilityHeight: PropTypes.number,

    /**
     * callback function when click BackTop button
     */
    onClick: PropTypes.func,
    /**
     * custom BackTop button,must hava only child
     */
    children: PropTypes.node,
  };

  static defaultProps = {
    visibilityHeight: 300,
  };

  scrollHandler = this.handleScroll.bind(this);

  constructor(props) {
    super(props);
    this.state = {
      visibilityHeight: props.visibilityHeight,
      customButton: props.children,
      onClick: props.onClick,
      showBackTop: false,
    };

    try {
      if (this.state.customButton) {
        React.Children.only(this.state.customButton); //如果自定义按钮，验证是否只有唯一的根元素
      }
    } catch (err) {
      console.log(err);
    }
  }

  handleScroll(event) {
    if (hasScrollbar()) {
      const scrollTop = getScrollTop();
      if (scrollTop > this.state.visibilityHeight) {
        this.setState({ showBackTop: true });
      } else {
        this.setState({ showBackTop: false });
      }
    }
  }

  componentDidMount() {
    if (hasScrollbar()) {
      const scrollTop = getScrollTop();
      if (scrollTop > this.state.visibilityHeight) {
        this.setState({ showBackTop: true });
      }
    }
    window.addEventListener('scroll', this.scrollHandler);
  }

  returnTop = e => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation();
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.props.onClick(e);
  };

  render() {
    const { classes } = this.props;
    const { showBackTop, customButton } = this.state;

    const backTopButton = customButton ? (
      <div>
        <div
          style={{ bottom: '100px' }}
          onClick={e => this.returnTop(e)}
          className={classes.rmBackTop}
        >
          {customButton}
        </div>
      </div>
    ) : (
      <div>
        <div onClick={e => this.returnTop(e)} className={classes.rmBackTop}>
          <div className={classes.rmBackTopContent}>
            <Publish />
          </div>
        </div>
      </div>
    );

    return showBackTop ? backTopButton : null;
  }
}

export default withStyles(styles)(BackTop);
