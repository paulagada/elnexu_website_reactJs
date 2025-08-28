import { motion, AnimatePresence } from 'framer-motion';
import { SelectedPage, type PosItem } from '@/shared/types';
import Img1 from '@/assets/pos1.webp';
import Img2 from '@/assets/pos2.webp';
import Img3 from '@/assets/pos3.webp';
import { useState, useEffect } from 'react';
import ContactFormModal from '@/shared/ContactFormModal';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const posData: PosItem[] = [
  {
    img: Img3,
    heading: 'Urovo i5000',
    details:
      'Lightweight & Portable. Android 10.0 with powerful Quad-core 1.4GHz. Supports IC cards, contactless cards, QR, 4G/3G/2G, Wi-Fi, Bluetooth, and GPS positioning.',
  },
  {
    img: Img2,
    heading: 'Aisino A80',
    details:
      'OS: Android 10. Touchscreen, pocket-sized, card reader slot. Perfect balance of performance and portability.',
  },
  {
    img: Img1,
    heading: 'K11 Pro',
    details:
      'Compact & powerful. Android 10.0 Quad-core 1.4GHz. Compatible with IC cards, NFC, QR, 4G/3G/2G, Wi-Fi, Bluetooth, and GPS.',
  },
];

const TerminalService = ({ setSelectedPage }: Props) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % posData.length),
      7000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id='terminal-service'
      className='w-full bg-secondary-50 px-6 py-12 md:px-10 flex flex-col gap-10 md:flex-row md:items-center md:justify-between'>
      {/* LEFT CONTENT */}
      <motion.div
        className='md:w-1/2 flex flex-col justify-center'
        onViewportEnter={() => setSelectedPage(SelectedPage.Services)}>
        <motion.h2
          className='text-lg font-semibold text-primary-600'
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          POS Terminal Sales
        </motion.h2>

        <p className='mt-4 text-base text-gray-700 leading-relaxed'>
          In partnership with a PTSP, our devices and applications are licensed
          by the Nigeria Interbank Settlement System (NIBSS). Our POS brands are
          affordable as we work directly with manufacturers.
        </p>

        {/* ACTION BUTTON */}
        <motion.div
          className='mt-6'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          <ContactFormModal>Get Started</ContactFormModal>
        </motion.div>
      </motion.div>

      {/* RIGHT CONTENT - IMAGE + DETAILS */}
      <motion.div
        className='md:w-1/2 flex flex-col md:flex-row items-center gap-8'
        onViewportEnter={() => setSelectedPage(SelectedPage.Services)}>
        <AnimatePresence mode='wait'>
          <motion.img
            key={posData[index].img}
            src={posData[index].img}
            alt={posData[index].heading}
            className='h-64 w-48 object-cover rounded-2xl shadow-md transition-transform ease-in-out hover:scale-110 hover:rotate-3'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>

        <div>
          <motion.h3
            className='text-lg font-semibold text-primary-600'
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            {posData[index].heading}
          </motion.h3>
          <p className='mt-2 text-sm text-gray-700 leading-relaxed'>
            {posData[index].details}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default TerminalService;
