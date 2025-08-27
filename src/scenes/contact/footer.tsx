import { SelectedPage } from '@/shared/types';
import Logo from '@/assets/elnexuLogo.png';
import youtube from '@/assets/youtube.png';
import linkedIn from '@/assets/linkedIn.png';
import facebook from '@/assets/facebook.png';
import xIcon from '@/assets/xIcon.png';
import instagram from '@/assets/instagram.png';
import { motion } from 'framer-motion';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Footer = ({}: Props) => {
  return (
    <section
      id='footer'
      className='w-full overflow-hidden p-10 bg-primary-700 flex flex-col md:flex-row justify-between'>
      {/* LEFT SIDE */}
      <motion.div
        className={`flex gap-3 items-center text-white`}>
        <img src={Logo} alt='logo' className='h-10 w-10 ' />
        <h1>Elnexu Consults</h1>
      </motion.div>
      {/* DETAILS */}

      {/* CONTACTS */}
      <div className=' flex flex-col gap-3 mt-10 md:mt-0 text-sm md:text-base text-white'>
        <p className='text-[18px]'>Contact</p>
        <p>9 Palace Way, Isheri Lagos Nigeria</p>
        <p>support@elnexuconsult.com</p>
        <p>+234 806 991 8721, +2348063104475</p>
      </div>

      {/* QUICK LINK */}
      <div className=' flex flex-col gap-3 mt-10 md:mt-0 text-sm md:text-base text-white'>
        <p className='text-[18px]'>Quick Link</p>
        <p>Terms and conditions</p>
        <p>Policy</p>
      </div>

      {/* GET IN TOUCH */}
      <div className=' flex flex-col gap-3 mt-10 md:mt-0 text-sm md:text-base text-white'>
        <p className='text-[18px]'>Get in Touch</p>
        <div className='flex flex-row gap-10'>
          <img src={instagram} alt='instagram' />
          <img src={facebook} alt='facebook' />
          <img src={xIcon} alt='x' />
          <img src={linkedIn} alt='linkedIn' />
          <img src={youtube} alt='youtube' />
        </div>
      </div>
    </section>
  );
};

export default Footer;
