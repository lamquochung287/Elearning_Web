import React from 'react';
import { SuccessIcon } from '../Icon/Icon';

export const SuccessMessage = ({ className, message }) => {
  return (
    <div className={className}>
      <SuccessIcon
        width="5rem"
        height="5rem"
      />
      <h1>{message}</h1>
    </div>
  );
};

export default SuccessMessage;
