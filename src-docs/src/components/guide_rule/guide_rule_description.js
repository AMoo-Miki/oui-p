import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { OuiText } from '../../../../src/components';

export const GuideRuleDescription = ({
  children,
  className,
  heading,
  description,
  ...rest
}) => {
  const classes = classNames('guideRule__description', className);

  let headingNode;

  if (heading) {
    headingNode = <h3>{heading}</h3>;
  }

  return (
    <div className={classes} {...rest}>
      <OuiText grow={false}>
        {headingNode}
        <p>{description}</p>
      </OuiText>

      {children}
    </div>
  );
};

GuideRuleDescription.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string.isRequired,
};
