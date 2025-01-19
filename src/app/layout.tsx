import './styles/globals.css';

import Footer from './components/Footer';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Next.js Portfolio',
  description: 'A modern portfolio built with Next.js and Tailwind CSS.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center">
        <Navbar />
        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
