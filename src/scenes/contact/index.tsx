import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import ActionButton from '@/shared/ActionButton';
import Footer from './footer';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contact = ({ setSelectedPage }: Props) => {
  return (
    <div>
      <section
        id='contact'
        className='w-full overflow-hidden py-16 bg-gray-200'>
        <motion.div
          className='flex flex-col items-center justify-center'
          onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}>
          {/* HEADING */}
          <motion.h2
            className='mt-6 text-lg md:text-xl font-semibold text-primary-600'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -30 },
              visible: { opacity: 1, y: 0 },
            }}>
            Get started it’s simple and easy to use
          </motion.h2>

          {/* DETAILS */}
          <p className='mt-3 text-sm md:text-base text-gray-700 text-center'>
            Designed to get the job done simple, easy, and straight forward
          </p>

          {/* ACTION */}
          <motion.div
            className='mt-6'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}>
            <ActionButton setSelectedPage={setSelectedPage}>
              Contact us
            </ActionButton>
          </motion.div>
        </motion.div>
      </section>
      <Footer setSelectedPage={setSelectedPage} />
    </div>
  );
};

export default Contact;
