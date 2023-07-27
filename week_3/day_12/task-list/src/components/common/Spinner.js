import React from 'react';
import './Spinner.css';

export default function Spinner({ variant = 'dark', extraClass }) {
  return (
    <div
      className={'spinner-border text-' + variant + ' ' + extraClass}
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}
