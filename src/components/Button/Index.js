import React from 'react';
import { Button } from './styles';

const CommonButton = (props) => {
  const [children, className, shape] = props;
  return (
    <Button className={className} shape={shape}>
      {children}
    </Button>
  );
};

export default CommonButton;
