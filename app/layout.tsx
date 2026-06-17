import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk, Orbitron } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-heading' });
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-logo', weight: ['700', '800', '900'] });

export const metadata: Metadata = {
  title: 'Vagstech',
  description: 'Leading technology company providing web development, game development, and e-commerce solutions',
  icons: {
    icon: '/images/logo_vt.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${orbitron.variable} font-sans`}>
        <Navbar/>
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
