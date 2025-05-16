import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import { ClientProviders } from './client-providers';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export const metadata = {
  title: {
    default: "Raya Home DESIGN & CONSTRUCTION",
    template: "%s | Raya Home DESIGN & CONSTRUCTION"
  },
  description: {
    default: "شركة رايا هوم للتصميم والبناء - شريكك الموثوق في تشطيب وتصميم الشقق | Raya Home - Your Trusted Partner in Design and Construction",
    template: "%s | رايا هوم - التصميم والبناء"
  },
  // icons: {
  //   icon: "/logo.png",
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" className={`${inter.variable} ${roboto_mono.variable}`}>
      <body className="antialiased">
        <ClientProviders>
            <Navbar/>

          {children}
            <Footer/>

        </ClientProviders>
      </body>
    </html>
  );
}