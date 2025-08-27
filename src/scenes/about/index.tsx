import { SelectedPage } from '@/shared/types';
import AboutImg from '@/assets/aboutImg.jpg';
import { motion } from 'framer-motion';
import CustomerStory from './Story';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const About = ({ setSelectedPage }: Props) => {
  return (
    <div>
      <section id='about' className='w-full overflow-hidden py-16'>
      <div className='flex flex-col md:flex-row items-center md:items-start gap-12 px-6 md:px-12 lg:px-20'>
        {/* IMAGE */}
        <div className='flex-1 flex justify-center'>
          <img
            src={AboutImg}
            alt='ecosystem'
            className='w-full max-w-[500px] h-auto object-contain rounded-2xl shadow-lg'
          />
        </div>

        {/* CONTENT */}
        <div className='flex-1'>
          <motion.h1
            className='text-2xl md:text-3xl font-bold text-primary-600'
            onViewportEnter={() => setSelectedPage(SelectedPage.About)}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -40 },
              visible: { opacity: 1, y: 0 },
            }}>
            About Us
          </motion.h1>

          <div className='mt-6 space-y-6 text-base md:text-lg text-gray-700 leading-relaxed max-w-xl'>
            <p>
              Focused on delivering top-notch financial solutions with our
              cutting-edge technology.
            </p>
            <p>
              We leverage partnerships to provide a one-stop-shop for payment
              and collection solutions.
            </p>
            <p>
              An engagement with our ever-ready team promises organizations and
              individuals an array of innovative fintech solutions.
            </p>
            <p>
              Our team comprises professionals with rich experience in
              e-banking, product management, sales, PTSP/PSSP, web development,
              and API integration.
            </p>
          </div>
        </div>
        
      </div>
    </section>
    <CustomerStory setSelectedPage={setSelectedPage}/>
    </div>
    
  
  );
};

export default About;
