import { useEffect, useState } from 'react';
import DefaultHeader from '../components/DefaultHeader';

function DefaultLayout({ children }) {
  return (
    <div className="inner">
      <DefaultHeader />
      {children}
    </div>
  );
}

export default DefaultLayout;
