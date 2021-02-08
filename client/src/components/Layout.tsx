import React from 'react';
import { Navbar, Wrapper, WrapperVariant } from './index';

interface LayoutProps {
  variant?: WrapperVariant;
}

export const Layout: React.FC<LayoutProps> = ({ children, variant }) => {
  return (
    <>
      <Navbar />
      <Wrapper variant={variant}>{children}</Wrapper>
    </>
  );
};
