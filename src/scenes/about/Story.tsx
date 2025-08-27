import { SelectedPage } from '@/shared/types';
import Story from '@/assets/story.jpg';
import { motion } from 'framer-motion';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const CustomerStory = ({ setSelectedPage }: Props) => {
  return (
    <section
      id='story'
      className='w-full overflow-hidden py-16 bg-primary-700'>
      <div className='flex flex-col md:flex-row items-center justify-center md:items-start gap-12 px-6 md:px-12 lg:px-20'>
        {/* IMAGE */}
        <div className='flex-1'>
          <img
            src={Story}
            alt='story'
            className='w-full max-w-[700px] h-auto object-contain rounded-2xl shadow-lg'
          />
        </div>

        {/* CONTENT */}
        <div className='flex flex-col justify-center md:pt-15'>
          <motion.h1
            className='text-[20px] md:text-2xl text-white'
            onViewportEnter={() => setSelectedPage(SelectedPage.About)}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -40 },
              visible: { opacity: 1, y: 0 },
            }}>
            Customer story
          </motion.h1>

          <div className=' mt-6 space-y-6 text-[20px] md:text-[30px] text-white leading-relaxed max-w-xl'>
            <p>
              “As a business owner, Elnexu Consults gives me peace of mind. I
              don't lose sleep over payment worries anymore."
            </p>

            <p className='text-lg'>
              Ogbonnaya Samuel, Lagos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerStory;
