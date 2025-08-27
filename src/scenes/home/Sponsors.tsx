type Props = {
  source: string;
};

const Sponsors = ({ source }: Props) => {
  return (
    <div className="flex border-1 justify-center items-center h-[130px] w-[245px] border-gray-100 transition-transform duration-500 ease-in-out hover:scale-110 hover:bg-gray-100">
      <img alt='ecosystem' src={source} className='scale-35 transition-transform duration-500 ease-in-out hover:scale-50 hover:-rotate-3' />
    </div>
  );
};

export default Sponsors;
