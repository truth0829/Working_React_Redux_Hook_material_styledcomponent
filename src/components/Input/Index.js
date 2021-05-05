import React from 'react';
import { Input } from './styles';

const CommonInput = (props) => {
  const [children, className, shape] = props;
  return (
    <Input className={className} shape={shape}>
      {children}
    </Input>
  );
};

export default CommonInput;
