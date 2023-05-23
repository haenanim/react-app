import React, { useEffect, useState } from 'react';
import DefaultHeader from '../components/DefaultHeader';

function DefaultLayout({ children }) {
  return (
    <React.Fragment>
      <DefaultHeader />
      <div
        className="content"
        style={{
          margin: '0 auto',
          width: '1000px',
        }}
      >
        {children}
      </div>
    </React.Fragment>
  );
}

export default DefaultLayout;
