import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>Genzypto - Komunitas & Edukasi Kripto</title>
        <meta name="description" content="Platform komunitas dan edukasi kripto untuk generasi Z. Bergabunglah dengan Genzypto untuk mempelajari crypto, blockchain, dan web3." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Genzypto - Komunitas & Edukasi Kripto" />
        <meta property="og:description" content="Platform komunitas dan edukasi kripto untuk generasi Z" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://genzypto.vercel.app" />
        <meta property="og:image" content="https://genzypto.vercel.app/og-image.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Genzypto - Komunitas & Edukasi Kripto" />
        <meta name="twitter:description" content="Platform komunitas dan edukasi kripto untuk generasi Z" />
        <meta name="twitter:image" content="https://genzypto.vercel.app/og-image.jpg" />
      </Head>
      
      <Navbar />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
