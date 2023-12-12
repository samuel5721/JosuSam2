import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import PropTypes from 'prop-types';

import Styles from './FloatingActionButton.module.css';

FloatingActionButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

function FloatingActionButton({ iconName, onClick }) {
  const IconComponent = Icons[iconName];

  if (!IconComponent) {
    return <div>?</div>;
  }

  return(
    <button className={Styles.Button} onClick={onClick}>
      <IconComponent size={40} />
    </button>
  )
}

export default FloatingActionButton;