import React from 'react';
import Spinner from './Spinner';

export default function Button({
  className,
  children,
  onClick,
  variant = 'primary',
  loading = false,
  disabled = false,
  ...other
}) {
  return (
    <button
      {...other}
      style={{
        position: 'relative',
      }}
      onClick={onClick}
      disabled={disabled || loading}
      className={'btn btn-' + variant + ' ' + className}
    >
      {children}

      {loading ? (
        <div
          style={{
            position: 'absolute',
            top: '2px',
            right: '2px',
          }}
        >
          <Spinner />
        </div>
      ) : (
        <></>
      )}
    </button>
  );
}
