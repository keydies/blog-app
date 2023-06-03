import React, { Fragment, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return <Fragment>{children}</Fragment>;
};
