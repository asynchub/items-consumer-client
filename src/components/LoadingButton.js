import React from 'react';
import Button from 'react-bootstrap/Button';
import { ImSpinner2 } from 'react-icons/im';
import './LoadingButton.css';

export default function LoadingButton({
  isLoading,
  className='',
  disabled=false,
  ...props
}) {
  return(
    <Button
      className={`LoadingButton ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading &&
        <ImSpinner2 className='spinning' />
      }
      {props.children}
    </Button>
  )
}