import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from './types';

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className='rounded-full bg-primary-600 px-12 py-2 hover:bg-red-800 text-white'
      onClick={() => setSelectedPage(SelectedPage.Contact)}
      href={`#${SelectedPage.Contact}`}>
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
