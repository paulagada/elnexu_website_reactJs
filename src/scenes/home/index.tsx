import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import { SelectedPage } from '@/shared/types';
import Sterling from '@/assets/sterling.webp';
import Img1 from '@/assets/IMG_1.webp';
import Img2 from '@/assets/IMG_2.webp';
import Img3 from '@/assets/IMG_3.webp';
import Img4 from '@/assets/img4.webp';
import Ecosystem from '@/assets/ecosystem.webp';
import ThreeLine from '@/assets/3Line.webp';
import Amju from '@/assets/amju.webp';
import Parallex from '@/assets/parallex.webp';
import Fcmb from '@/assets/fcmb.webp';
import Kuda from '@/assets/kuda.webp';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Sponsors from './Sponsors';
import ContactFormModal from '@/shared/ContactFormModal';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');
  const images = [Img4, Img1, Img2, Img3];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section
        id='home'
        className=' relative w-full min-h-screen overflow-hidden md:pb-0'>
        {/* BACKGROUND SLIDESHOW */}
        <AnimatePresence>
          <motion.div
            key={images[index]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className='absolute inset-0 z-0 bg-cover bg-center'
            style={{ backgroundImage: `url(${images[index]})` }}
          />
        </AnimatePresence>

        {/* OVERLAY (optional dark gradient for readability) */}
        <div className='absolute inset-0 bg-black/40' />

        {/* CONTENT */}
        <motion.div
          className='absolute inset-0 z-10 mx-auto flex w-5/6 flex-col items-start justify-center md:w-1/2 md:ml-20 py-50 md:py-60'
          onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
          <motion.h1
            className='mt-8 text-[40px] font-extrabold text-white md:text-5xl md:max-w-3/4'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}>
            We build off-the-shelf financial solutions for business
          </motion.h1>

          <p className='mt-6 text-lg text-white w-1/2'>
            Delivering top notch financial solutions with our cutting edge
            technology
          </p>

          {/* ACTIONS */}
          <motion.div
            className='mt-8 flex items-start gap-8'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}>
            {/* <ActionButton setSelectedPage={setSelectedPage}>
              Get Started
            </ActionButton> */}

            {/* Contact Form Button */}
            <ContactFormModal>Get Started</ContactFormModal>
          </motion.div>
        </motion.div>
      </section>
      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className='w-full bg-white text-center px-10 font-bold pb-5'>
          <h1 className='pt-5'>Partners</h1>
          <div className='mx-auto flex flex-auto  items-center justify-between py-5'>
            <Sponsors source={Ecosystem} />
            <Sponsors source={ThreeLine} />
            <Sponsors source={Amju} />
            <Sponsors source={Parallex} />
          </div>
          <div className='mx-auto flex  items-center justify-between'>
            <Sponsors source={Sterling} />
            <Sponsors source={Fcmb} />
            <Sponsors source={Kuda} />
            {/* <Sponsors source={Parallex} /> */}
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
