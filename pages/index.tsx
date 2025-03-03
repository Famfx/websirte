import Head from 'next/head';
import { FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa';
import { SiThreads } from 'react-icons/si';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black text-white">
      <Head>
        <title>Genzypto - Komunitas & Edukasi Kripto</title>
        <meta name="description" content="Platform komunitas dan edukasi kripto untuk generasi Z. Bergabunglah dengan Genzypto untuk mempelajari crypto, blockchain, dan web3." />
        <meta name="keywords" content="kripto, crypto, blockchain, web3, edukasi kripto, komunitas kripto, genzypto" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.section 
          className="flex flex-col items-center justify-center min-h-[80vh] text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            GENZYPTO
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-2xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Platform komunitas dan edukasi kripto terkemuka untuk Generasi Z. Pelajari, tumbuh, dan hasilkan bersama komunitas kami.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-12"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-medium transition duration-300 shadow-lg shadow-blue-500/30">
              Bergabung Sekarang
            </button>
            
            <button className="px-8 py-3 bg-purple-700 hover:bg-purple-800 rounded-full font-medium transition duration-300 shadow-lg shadow-purple-700/30 flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Chat AI Support
            </button>
          </motion.div>
        </motion.section>

        {/* Airdrop & Event Section */}
        <motion.section 
          className="py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="border-b-4 border-blue-500 pb-2">Airdrop & Event</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item}
                className="bg-purple-900/40 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-700/50 hover:border-blue-500/50 transition duration-300 shadow-lg hover:shadow-blue-500/20"
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-48 bg-gradient-to-r from-blue-600/30 to-purple-600/30 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl font-bold text-white/30">EVENT {item}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">Airdrop {item} - Coming Soon</h3>
                  <p className="text-gray-300 mb-4">Dapatkan token gratis dengan bergabung dalam program airdrop kami. Terbatas untuk 1000 peserta pertama.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-purple-300">Mulai: 15 Maret 2025</span>
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition">Daftar</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Social Media Section */}
        <motion.section 
          className="py-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Bergabung dengan Komunitas</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">Ikuti kami di platform sosial media untuk mendapatkan update terbaru tentang kripto, airdrop, dan event eksklusif.</p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-8 mb-12"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href="#" 
              className="flex flex-col items-center gap-2 group"
              whileHover={{ y: -5, scale: 1.1, transition: { duration: 0.3 } }}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-red-600 text-white rounded-full shadow-lg shadow-red-600/30 transition-transform group-hover:shadow-red-600/50">
                <FaYoutube size={32} />
              </div>
              <span>YouTube</span>
            </motion.a>
            
            <motion.a 
              href="#" 
              className="flex flex-col items-center gap-2 group"
              whileHover={{ y: -5, scale: 1.1, transition: { duration: 0.3 } }}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full shadow-lg shadow-purple-600/30 transition-transform group-hover:shadow-purple-600/50">
                <FaInstagram size={32} />
              </div>
              <span>Instagram</span>
            </motion.a>
            
            <motion.a 
              href="#" 
              className="flex flex-col items-center gap-2 group"
              whileHover={{ y: -5, scale: 1.1, transition: { duration: 0.3 } }}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-black text-white rounded-full shadow-lg shadow-black/30 transition-transform group-hover:shadow-black/50">
                <FaTiktok size={32} />
              </div>
              <span>TikTok</span>
            </motion.a>
            
            <motion.a 
              href="#" 
              className="flex flex-col items-center gap-2 group"
              whileHover={{ y: -5, scale: 1.1, transition: { duration: 0.3 } }}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-black text-white rounded-full shadow-lg shadow-black/30 transition-transform group-hover:shadow-black/50">
                <SiThreads size={32} />
              </div>
              <span>Threads</span>
            </motion.a>
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
}
