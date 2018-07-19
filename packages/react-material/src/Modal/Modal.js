/**
 * @ignore - do not document.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './ModalBase';
import ConfirmDialog from './Confirm';

function confirm(config) {
  let div = document.createElement('div');
  document.body.appendChild(div);
  function onClose(...args) {
    destroy(...args);
  }
  function destroy(...args) {
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }
    const triggerCancel = args && args.length && args.some(param => param && param.triggerCancel);
    if (config.onCancel && triggerCancel) {
      config.onCancel(...args);
    }
  }
  function render(props) {
    ReactDOM.render(<ConfirmDialog {...props} />, div);
  }
  render(Object.assign({}, config, { open: true, onClose }));
  return {
    destroy: onClose,
  };
}
Modal.info = function(props) {
  const config = {
    type: 'info',
    okCancel: false,
    ...props,
  };
  return confirm(config);
};

Modal.success = function(props) {
  const config = {
    type: 'done',
    okCancel: false,
    ...props,
  };
  return confirm(config);
};

Modal.error = function(props) {
  const config = {
    type: 'cancel',
    okCancel: false,
    ...props,
  };
  return confirm(config);
};

Modal.warning = Modal.warn = function(props) {
  const config = {
    type: 'error',
    okCancel: false,
    ...props,
  };
  return confirm(config);
};

Modal.confirm = function(props) {
  const config = {
    type: 'contact_support',
    okCancel: true,
    ...props,
  };
  return confirm(config);
};

export default Modal;
