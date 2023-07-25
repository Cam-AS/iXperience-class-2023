import React from 'react';

export default function Alert({
  show,
  onHide,
  className,
  // React prop
  children,
  variant = 'danger',
  // ...others contains all the other props besides the above
  ...others
}) {
  return (
    <>
      {show ? (
        <div
          className={
            'alert d-flex justify-content-between alert-' +
            variant +
            ' ' +
            className
          }
          role="alert"
        >
          <div>{children}</div>

          {onHide ? (
            <div style={{ cursor: 'pointer' }} onClick={onHide}>
              X
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
