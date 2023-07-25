import React from 'react';
import './Spinner.css';

export default function Spinner({ variant = 'dark', extraClass }) {
  return (
    <div
      class={'spinner-border text-' + variant + ' ' + extraClass}
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
  );
}
