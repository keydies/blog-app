import React, { Fragment, ReactNode } from 'react';

import { Footer } from '@entities/Footer/ui';
import { HeaderWrapper } from '@entities/Header/ui/HeaderWrapper';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <Fragment>
      <HeaderWrapper />
      {children}
      <Footer />
    </Fragment>
  );
};
