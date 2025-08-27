import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';

import Service1 from '@/assets/service1.jpg';
import Service2 from '@/assets/service2.jpg';
import Service3 from '@/assets/service3.jpg';

import TerminalService from './TerminalService';
import ServiceDiv from './ServiceDiv';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Services = ({ setSelectedPage }: Props) => {

  return (
    <section id="services" className="w-full overflow-hidden bg-primary-50 py-16 px-6 md:px-12 lg:px-20">
      {/* HEADER */}
      <motion.h1
        className="text-2xl md:text-3xl font-bold text-primary-600 mb-12"
        onViewportEnter={() => setSelectedPage(SelectedPage.Services)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -40 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        Services
      </motion.h1>

      {/* SERVICE CARDS */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <ServiceDiv
          setSelectedPage={setSelectedPage}
          img={Service1}
          heading="Elbridge"
          detail="Enterprise solution deployed through licensed institutions like banks, Superagents, and PTSPs to SMEs and agent aggregators to have control of their transactions."
          button="Learn More"
        />
        <ServiceDiv
          setSelectedPage={setSelectedPage}
          img={Service2}
          heading="elPay"
          detail="elPay aggregates transactions acquired via POS by agents of licensed Superagents and banks."
          button="Sign Up"
        />
        <ServiceDiv
          setSelectedPage={setSelectedPage}
          img={Service3}
          heading="Consultations & Advisory"
          detail="From ideation through prototyping to deployment. Our track record from various projects is an asset for that new project you want to deploy."
          button="Contact Us"
        />
      </div>

      {/* TERMINAL SERVICE SECTION */}
      <div className="mt-20">
        <TerminalService setSelectedPage={setSelectedPage} />
      </div>
    </section>
  );
};

export default Services;
