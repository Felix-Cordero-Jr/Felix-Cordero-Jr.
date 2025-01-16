// layout.tsx

'use client'; // This ensures the layout component is client-side only

import React from 'react';
import './styles/globals.css'; // Correct path to globals.css
import Header from './components/Header';


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en"> {/* Root HTML tag */}
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Your Portfolio</title>
        {/* Other head elements */}
      </head>
      <body>
        <header>
          <Header />
          {/* Your header content */}
        </header>
        <main>
          
          {children} {/* Render children (page content) */}
        </main>
        <footer>
          {/* Your footer content */}
        </footer>
      </body>
    </html>
  );
};

export default Layout;
