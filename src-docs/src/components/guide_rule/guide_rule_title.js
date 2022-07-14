import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { OuiTitle } from '../../../../src/components';

export const GuideRuleTitle = ({ children, className, ...rest }) => {
  const classes = classNames('guideRule__title', className);

  return (
    <OuiTitle className={classes} {...rest}>
      <h2>{children}</h2>
    </OuiTitle>
  );
};

GuideRuleTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
