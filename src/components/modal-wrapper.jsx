import React, { useState } from 'react';

import '../styles/modal-wrapper.css';

const withModal = (WrappedComponent) => {
  return (props) => {
    const [startClosing, setStartClosing] = useState(false);

    const delayedClose = () => {
      setStartClosing(true);
      setTimeout(() => {
        props.onClose();
      }, 250);
    }
    return (
      <div className={`modal-container ${startClosing ? 'modal-container--invisible' : ''}`}>
        <WrappedComponent {...props} onClose={delayedClose} />
      </div>
    );
  };
};

export default withModal;