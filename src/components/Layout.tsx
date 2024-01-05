// src/components/Layout.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

// Define the type for the props expected by the Layout component
type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
