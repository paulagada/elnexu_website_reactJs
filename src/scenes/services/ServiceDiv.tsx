import ActionButton from '@/shared/ActionButton';
import ContactFormModal from '@/shared/ContactFormModal';
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  img: string;
  heading: string;
  detail: string;
  button: string;
  isForm?: boolean;
};

const ServiceDiv = ({
  setSelectedPage,
  img,
  heading,
  detail,
  button,
  isForm = false,
}: Props) => {
  return (
    <motion.div
      className='flex flex-col items-start max-w-xs text-left'
      onViewportEnter={() => setSelectedPage(SelectedPage.Services)}>
      {/* IMAGE */}
      <div className='overflow-hidden rounded-2xl shadow-md'>
        <img
          src={img}
          alt={heading}
          className='w-full h-60 object-cover rounded-2xl transition-transform duration-500 ease-in-out hover:scale-110 hover:rotate-2'
        />
      </div>

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
        {heading}
      </motion.h2>

      {/* DETAILS */}
      <p className='mt-3 text-sm md:text-base text-gray-700 leading-relaxed'>
        {detail}
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
        {!isForm ? (
          <ActionButton setSelectedPage={setSelectedPage}>
            {button}
          </ActionButton>
        ) : (
          <ContactFormModal>{button}</ContactFormModal>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ServiceDiv;
