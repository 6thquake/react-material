import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '../styles';
import { Publish } from '@material-ui/icons';
import PropTypes from 'prop-types';

const styles = {
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
  backTop: {
    zIndex: '10000000',
    position: 'fixed',
    height: '40px!important',
    width: '40px!important',
    cursor: 'pointer',
  },
  windowBtn: {
    right: '100px',
    bottom: '50px',
  },
};

class BackTop extends React.Component {
  scrollHandler = this.handleScroll.bind(this);

  constructor(props) {
    super(props);
    this.state = {
      visibilityHeight: props.visibilityHeight,
      customButton: props.children,
      onClick: props.onClick,
      showBackTop: false,
      fixLeft: 0,
      fixTop: 0,
    };

    try {
      if (this.state.customButton) {
        React.Children.only(this.state.customButton); //如果自定义按钮，验证是否只有唯一的根元素
      }
    } catch (err) {
      console.log(err);
    }
  }

  hasScrollbar() {
    if (this.container == window) {
      return (
        document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight)
      );
    } else {
      return (
        this.container.scrollHeight > this.container.clientHeight ||
        this.container.offsetHeight > this.container.clientHeight
      );
    }
  }

  getScrollTop() {
    var scrollPos;
    if (this.container == window) {
      if (window.pageYOffset) {
        scrollPos = window.pageYOffset;
      } else if (document.compatMode && document.compatMode != 'BackCompat') {
        scrollPos = document.documentElement.scrollTop;
      } else if (document.body) {
        scrollPos = document.body.scrollTop;
      }
    } else {
      scrollPos = this.container.scrollTop;
    }

    return scrollPos;
  }

  handleScroll(event) {
    if (this.hasScrollbar()) {
      const scrollTop = this.getScrollTop();
      if (scrollTop > this.state.visibilityHeight) {
        this.setState({ showBackTop: true });
      } else {
        this.setState({ showBackTop: false });
      }
    }
    if (this.container != window) {
      this.resetPosition();
    }
  }

  componentDidMount() {
    this.showWindowBtn = false;
    let idSel = this.props.container;
    const { customButton } = this.state;
    this.container = document.querySelector(idSel) || window;
    if (this.hasScrollbar()) {
      const scrollTop = this.getScrollTop();
      if (scrollTop > this.state.visibilityHeight) {
        this.setState({ showBackTop: true });
      }
    }
    if (this.container == window) {
      this.showWindowBtn = true;
    }
    window.addEventListener('scroll', this.scrollHandler); // 不管是什么类型的button 都需要监听浏览器滚动

    if (this.container != window) {
      this.container.addEventListener('scroll', this.scrollHandler);
    }

    if (this.container != window) {
      this.resetPosition();
    }
  }

  resetPosition() {
    const { customButton } = this.state;
    let top = 0; // container 下边界距窗口最上面的距离
    let left = 0; // container 右边界距窗口最左边的距离

    let fixLeft = 0; // backTop button 相对位置 left值
    let fixTop = 0; // backTop button 相对位置 top值

    top = this.container.getBoundingClientRect().bottom;
    left = this.container.getBoundingClientRect().right;

    if (customButton) {
      customWith = customButton.getBoundingClientRect().width; // 自定义按钮本身的宽度
      customHeight = customButton.getBoundingClientRect().height; // 自定义按钮本身的高度
      if (customWith > 40) {
        customWith = 40;
      }
      if (customHeight > 40) {
        customHeight = 40;
      }
      fixLeft = left - customWith - 100;
      fixLTop = top - customHeight - 50;
    } else {
      fixLeft = left - 40 - 100;
      fixTop = top - 40 - 50;
    }
    this.setState({ fixLeft: fixLeft, fixTop: fixTop });
  }

  componentWillUnmount() {
    this.container.removeEventListener('scroll', this.ths, false);
  }

  returnTop = e => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation();
    this.container == window
      ? (document.body.scrollTop = document.documentElement.scrollTop = 0)
      : (this.container.scrollTop = 0);
    this.props.onClick(e);
  };

  render() {
    const { classes } = this.props;
    const { showBackTop, customButton, fixLeft, fixTop } = this.state;

    const windowBtnNoCustom = (
      <div onClick={e => this.returnTop(e)} className={classes.backTop + ' ' + classes.windowBtn}>
        <div className={classes.rmBackTopContent}>
          <Publish />
        </div>
      </div>
    );

    const windowBtnCustom = (
      <div
        style={{ bottom: '100px' }}
        onClick={e => this.returnTop(e)}
        className={classes.backTop + ' ' + classes.windowBtn}
      >
        {customButton}
      </div>
    );

    const containerBtnNoCustom = (
      <div
        style={{ left: `${fixLeft}px`, top: `${fixTop}px` }}
        onClick={e => this.returnTop(e)}
        className={classes.backTop}
      >
        <div className={classes.rmBackTopContent}>
          <Publish />
        </div>
      </div>
    );

    const containerBtnCustom = (
      <div
        style={{ bottom: '100px', left: `${fixLeft}px`, top: `${fixTop}px` }}
        onClick={e => this.returnTop(e)}
        className={classes.backTop}
      >
        {customButton}
      </div>
    );

    let backTopButton = windowBtnNoCustom;

    if (this.showWindowBtn) {
      if (customButton) {
        backTopButton = windowBtnCustom;
      } else {
        backTopButton = windowBtnNoCustom;
      }
    } else {
      if (customButton) {
        backTopButton = containerBtnCustom;
      } else {
        backTopButton = containerBtnNoCustom;
      }
    }

    //const backTopButton = this.showWindowBtn ? (customButton ? windowBtnCustom : windowBtnNoCustom) :( customButton? containerBtnCustom : containerBtnNoCustom);

    return showBackTop ? backTopButton : null;
  }
}

BackTop.propTypes = {
  /**
   * show BackTop button when scroll to this height
   */
  visibilityHeight: PropTypes.number,

  /**
   * callback function when click BackTop button
   */
  onClick: PropTypes.func,

  /**
   * Id selector, element that needs to be listened the scroll event, the default value is window
   */
  container: PropTypes.string,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,
};
BackTop.defaultProps = {
  visibilityHeight: 300,
};

export default withStyles(styles)(BackTop);
