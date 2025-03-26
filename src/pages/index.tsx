'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import IconUnderDevelopment from '../../public/webp/settings.webp';
import Image from 'next/image';

const Home = () => {
  return (
    <>
      <div className="h-[100vh] flex flex-col items-center justify-center">
        <Image alt="" src={IconUnderDevelopment} height={350} width={350} />
        <div className="text-[45px] font-[600] mt-[30px] text-center">
          Feature under development
        </div>
      </div>
    </>
  );
};
export default Home;
