﻿import React from 'react';
import { components } from 'react-select';

export const IndicatorsContainer = props => {
  const isOpen = props.selectProps.menuIsOpen;
  return (
    <components.IndicatorsContainer {...props}>
      <span className={`gf-form-select2__select-arrow ${isOpen ? `gf-form-select2__select-arrow--reversed` : ''}`} />
    </components.IndicatorsContainer>
  );
};

export default IndicatorsContainer;
