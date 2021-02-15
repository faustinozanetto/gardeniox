import React, { ReactNode } from 'react';
import { Footer, Navbar } from '../components';

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Navbar mb={20} />
      {children}
      <Footer mt={12} />
    </>
  );
};