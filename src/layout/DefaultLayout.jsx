import React, { useEffect, useState } from 'react';
import DefaultHeader from '../components/DefaultHeader';

function DefaultLayout({ children }) {
  return (
    <React.Fragment>
      <DefaultHeader />
      <div
        className="content"
        style={{
          width: '1000px',
          margin: '0 auto',
        }}
      >
        {children}
      </div>
    </React.Fragment>
  );
}

export default DefaultLayout;
