/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { FAQ } from '@/components/FAQ/FAQ';
import { Footer } from '@/components/footer';
import useCheckMobileScreen from '@/hooks/useCheckMobileScreen';
import {
  AI_FEATURE,
  HOW_TO_USE_ROBOLEARN,
  RATING_BY_USER,
} from '@/utils/constants';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import TextDownloadApple from '../../../public/svg/downloadAppleText.svg';
import TextDownloadGoogle from '../../../public/svg/downloadGoogleText.svg';
import IconApple from '../../../public/svg/iconApple.svg';
import IconGoogle from '../../../public/svg/iconGoogle.svg';
import IconStar from '../../../public/svg/iconStar.svg';
import IconStarEmpty from '../../../public/svg/iconStarEmpty.svg';
import styles from './index.module.scss';

const StarRating = ({ stars }: { stars: number }) => {
  return (
    <div
      className={['flex gap-[5px] pt-[20px] pb-[20px]', styles.StarItem].join(
        ' ',
      )}>
      {[...Array(5)].map((_, i) =>
        i < stars ? (
          <Image src={IconStar} alt="" key={i} className={styles.IconStar} />
        ) : (
          <Image
            src={IconStarEmpty}
            alt=""
            key={i}
            className={styles.IconStar}
          />
        ),
      )}
    </div>
  );
};

const RatingSwiper = ({
  data,
  reverse,
}: {
  data: any[];
  reverse?: boolean;
  className?: string;
}) => {
  const isMobile = useCheckMobileScreen();
  return (
    <Swiper
      spaceBetween={isMobile ? 10 : 20}
      autoplay={{
        delay: 0, // No delay, continuous motion
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        stopOnLastSlide: false,
        reverseDirection: reverse,
      }}
      loop={true}
      speed={isMobile ? 7000 : 5000}
      // allowTouchMove={false}
      slidesPerView={'auto'}
      freeMode={true}
      style={{ width: '100%', overflow: 'hidden' }}
      modules={[FreeMode, Autoplay]}>
      {data?.map(item => {
        return (
          <SwiperSlide
            key={item?.id}
            className={[
              'flex bg-[#F9FAFB] min-w-[377px] p-[20px] rounded-[16px]',
              styles.RatingItemContainer,
            ].join(' ')}>
            <div
              className={[
                'flex flex-col justify-between h-[377px]',
                styles.RatingItemField,
              ].join(' ')}>
              <div>
                <div
                  className={[
                    'text-[24px] font-[700] leading-[36px] text-[#000]',
                    styles.RatingTitleItem,
                  ].join(' ')}>
                  {item?.title}
                </div>
                <StarRating stars={item?.star} />
                <div
                  className={[
                    'text-[18px] leading-[27px] font-[600] text-[#000]',
                    styles.RatingContentItem,
                  ].join(' ')}>
                  {item?.content}
                </div>
              </div>
              <div className="flex items-center mt-[30px]">
                <Image
                  src={item?.avatar}
                  height={60}
                  width={60}
                  className="bg-[#D9D9D9] rounded-[30px] mr-[10px]"
                  alt=""
                />
                <div className="flex flex-col justify-center">
                  <div
                    className={[
                      'text-[24px] font-[600] leading-[36px] text-[#98A2B3]',
                      styles.RatingName,
                    ].join(' ')}>
                    {item?.name}
                  </div>
                  <div
                    className={[
                      'text-[18px] font-[300] leading-[27px] text-[#98A2B3]',
                      styles.RatingSchool,
                    ].join(' ')}>
                    {item?.school}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

const LandingPage = () => {
  const isMobile = useCheckMobileScreen();

  const goToGoogleStore = () => {
    window.open(
      'https://play.google.com/store/apps/details?id=com.mbs.note&pli=1',
    );
  };

  const goToAppleStore = () => {
    window.open('https://apps.apple.com/us/app/id6739834586');
  };

  return (
    <>
      <div className="flex flex-col items-center pl-[10px] pr-[10px]">
        <div
          className={[
            'flex flex-col justify-center items-center pt-[222px] pb-[122]',
            styles.HomeContainer,
          ].join(' ')}>
          {/* Intro field */}

          <div
            className={[
              'text-[80px] font-bold leading-[96px] text-center ',
              styles.gradientText,
            ].join(' ')}>
            Learn{' '}
            <span
              className={['text-transparent', styles.gradientTextMove].join(
                ' ',
              )}>
              faster
            </span>
          </div>
          <div
            className={[
              'text-[80px] font-bold leading-[96px] text-center ',
              styles.gradientText,
            ].join(' ')}>
            remember{' '}
            <span
              className={['text-transparent', styles.gradientTextMove].join(
                ' ',
              )}>
              longer
            </span>
          </div>
          <span
            className={[
              'font-regular text-[24px] leading-[36px] text-center mt-[48px] mb-[50px]',
              styles.detailText,
            ].join(' ')}>
            Robolearn transforms your notes into smart summaries, flashcards,
            quizzes, and mind maps – all powered by AI
          </span>

          {/* download field */}

          <div
            className={[
              'flex gap-[20px] justify-center ',
              styles.downloadContainer,
            ].join(' ')}>
            <div
              onClick={goToGoogleStore}
              className={[
                'flex bg-[black] w-[200px] h-[65px] rounded-[20px] gap-[10px] items-center justify-center cursor-pointer',
                styles.downloadButton,
              ].join(' ')}>
              <Image src={IconGoogle} alt="Logo" width={26.84} height={30} />
              <Image
                src={TextDownloadGoogle}
                alt="Logo"
                width={99.85}
                height={32.19}
              />
            </div>
            <div
              onClick={goToAppleStore}
              className={[
                'flex bg-[black] w-[200px] h-[65px] rounded-[20px] gap-[10px] items-center justify-center cursor-pointer',
                styles.downloadButton,
              ].join(' ')}>
              <Image src={IconApple} alt="Logo" width={24.41} height={30} />
              <Image
                src={TextDownloadApple}
                alt="Logo"
                width={88.42}
                height={30.02}
              />
            </div>
          </div>
        </div>

        {/* Your Personalized AI Study Assistant */}

        <div className="flex flex-col items-center">
          <div
            className={[
              'text-[42px] leading-[53px] font-semibold text-center mb-[30px]',
              styles.YourAssistants,
            ].join(' ')}>
            Your Personalized AI Study Assistant
          </div>
          <div className="flex flex-col max-w-[1200px]">
            {AI_FEATURE?.map(item => {
              return (
                <div
                  key={item?.id}
                  className="flex items-center flex-wrap items-center justify-center mb-[30px]">
                  <div
                    className={[
                      'flex flex-col mr-[100px] max-w-[350px]',
                      styles.FeatureLeftView,
                    ].join(' ')}>
                    <Image
                      src={item?.icon}
                      alt={`icon${item?.id}`}
                      width={100}
                      height={100}
                      className={[styles.FeatureIcon].join(' ')}
                    />
                    <div
                      className={[
                        'font-semibold text-[24px] leading-[32px] text-[#000]',
                        styles.FeatureTitle,
                      ].join(' ')}>
                      {item?.title}
                    </div>
                    <div className="">
                      {/* {item?.content} */}
                      <div
                        className={[
                          'font-[300] text-[18px] leading-[27px] text-[#98A2B3]',
                          styles.FeatureContent,
                        ].join(' ')}
                        dangerouslySetInnerHTML={{ __html: item?.content }}
                      />
                    </div>
                  </div>
                  <Image
                    src={item?.webp}
                    alt={`webp${item?.id}`}
                    width={750}
                    height={420}
                    className={['rounded-[20px]', styles.FeatureWebp].join(' ')}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* How users are using Robolearn */}

        <div
          className={[
            'flex flex-col justify-center mt-[170px] items-center mb-[200px]',
            styles.UsingContainer,
          ].join(' ')}>
          <div
            className={[
              'font-semibold text-[42px] leading-[53px] text-[#000] text-center mb-[30px]',
              styles.UsingTitle,
            ].join(' ')}>
            How users are using Robolearn
          </div>
          <div
            className={[
              'flex gap-[100px] flex-wrap justify-center',
              styles.UsingItemContainer,
            ].join(' ')}>
            {HOW_TO_USE_ROBOLEARN?.map(item => {
              return (
                <div key={item?.id} className="max-w-[333px]">
                  <Image
                    src={item?.icon}
                    alt=""
                    height={100}
                    width={100}
                    className={styles.UsingIcon}
                  />
                  <div
                    className={[
                      'font-semibold text-[24px] leading-[36px] mt-[20px] mb-[20px]',
                      styles.UsingTitleItem,
                    ].join(' ')}>
                    {item?.title}
                  </div>
                  <div
                    className={[
                      'text-[18px] font-[300] text-[#000] leading-[36px]',
                      styles.UsingContentItem,
                    ].join(' ')}
                    dangerouslySetInnerHTML={{ __html: item?.content }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Swiper */}
        <div
          className={[
            'pb-[200px] w-[100%] bg-[#green] items-center',
            styles.RateContainer,
          ].join(' ')}>
          <div
            className={[
              'text-[42px] font-[600] leading-[53px] text-[#000] w-[100%] flex flex-col items-center mb-[30px]',
              styles.RateTitle,
            ].join(' ')}>
            What students are saying
          </div>
          {isMobile ? (
            <div>
              <RatingSwiper data={RATING_BY_USER?.slice(0, 5)} />
              <div className="h-[10px]" />
              <RatingSwiper data={RATING_BY_USER?.slice(5, 10)} reverse />
            </div>
          ) : (
            <RatingSwiper data={RATING_BY_USER} />
          )}
        </div>

        {/* FAQ */}
        <FAQ />
        <Footer />
      </div>
    </>
  );
};
export default LandingPage;
