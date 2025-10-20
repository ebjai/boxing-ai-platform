import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AIBar from '../components/AIBar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <AIBar />
      <main className="container py-8">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
