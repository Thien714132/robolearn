/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import useCheckMobileScreen from "@/hooks/useCheckMobileScreen";
import {
  AI_FEATURE,
  HOW_TO_USE_ROBOLEARN,
  RATING_BY_USER,
} from "@/ultils/contants";
import Head from "next/head";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TextDownloadApple from "../../public/svg/downloadAppleText.svg";
import TextDownloadGoogle from "../../public/svg/downloadGoogleText.svg";
import IconApple from "../../public/svg/iconApple.svg";
import IconGoogle from "../../public/svg/iconGoogle.svg";
import IconStar from "../../public/svg/iconStar.svg";
import IconStarEmpty from "../../public/svg/iconStarEmpty.svg";

const StarRating = ({ stars }: { stars: number }) => {
  return (
    <div className="flex gap-[5px] pt-[20px] pb-[20px] StarItem">
      {[...Array(5)].map((_, i) =>
        i < stars ? (
          <Image src={IconStar} alt="" key={i} className="IconStar" />
        ) : (
          <Image src={IconStarEmpty} alt="" key={i} className="IconStar" />
        )
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
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        reverseDirection: reverse,
      }}
      loop={true}
      spaceBetween={20}
      slidesPerView={isMobile ? 1 : 3}
      modules={[Autoplay]}
      pagination={{ clickable: true }}
    >
      {data?.map((item) => {
        return (
          <SwiperSlide
            key={item?.id}
            className="flex bg-[#F9FAFB] min-w-[350px] p-[20px] rounded-[16px] RatingItemContainer"
          >
            <div className="flex flex-col justify-between h-[377px] RatingItemField">
              <div>
                <div className="text-[24px] font-[700] leading-[36px] text-[#000] RatingTitleItem">
                  {item?.title}
                </div>
                <StarRating stars={item?.star} />
                <div className="text-[18px] leading-[27px] font-[600] text-[#000] RatingContentItem ">
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
                  <div className="text-[24px] font-[600] leading-[36px] text-[#98A2B3] RatingName">
                    {item?.name}
                  </div>
                  <div className="text-[18px] font-[300] leading-[27px] text-[#98A2B3] RatingSchool">
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

const Home = () => {
  const isMobile = useCheckMobileScreen();

  return (
    <>
      <Head>
        <div></div>
      </Head>
      <div className="flex flex-col items-center pl-[10px] pr-[10px]">
        <div className="flex flex-col justify-center items-center pt-[222px] pb-[122]  HomeContainer">
          {/* Intro field */}

          <div className="text-[80px] font-bold leading-[96px] text-center gradientText">
            Learn{" "}
            <span className="bg-gradient-to-t from-[#00A18C] to-[#D6FFDB] bg-clip-text text-transparent">
              faster
            </span>
          </div>
          <div className="text-[80px] font-bold leading-[96px] text-center gradientText">
            remember{" "}
            <span className="bg-gradient-to-t from-[#00A18C] to-[#D6FFDB] bg-clip-text text-transparent">
              longer
            </span>
          </div>
          <span className="font-regular text-[24px] leading-[36px] text-center mt-[48px] mb-[50px] detailText">
            Robolearn transforms your notes into smart summaries, flashcards,
            quizzes, and mind maps – all powered by AI
          </span>

          {/* download field */}

          <div className="flex gap-[20px] justify-center downloadContainer">
            <div className="flex bg-[black] w-[200px] h-[65px] rounded-[20px] gap-[10px] items-center justify-center cursor-pointer downloadButton">
              <Image src={IconGoogle} alt="Logo" width={26.84} height={30} />
              <Image
                src={TextDownloadGoogle}
                alt="Logo"
                width={99.85}
                height={32.19}
              />
            </div>
            <div className="flex bg-[black] w-[200px] h-[65px] rounded-[20px] gap-[10px] items-center justify-center cursor-pointer downloadButton">
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
          <div className="text-[42px] leading-[53px] font-semibold text-center mb-[30px] YourAssistants">
            Your Personalized AI Study Assistant
          </div>
          <div className="flex flex-col max-w-[1200px]">
            {AI_FEATURE?.map((item) => {
              return (
                <div
                  key={item?.id}
                  className="flex items-center flex-wrap items-center justify-center mb-[30px]"
                >
                  <div className="flex flex-col mr-[100px] max-w-[350px] FeatureLeftView">
                    <Image
                      src={item?.icon}
                      alt={`icon${item?.id}`}
                      width={100}
                      height={100}
                      className="FeatureIcon"
                    />
                    <div className="font-semibold text-[24px] leading-[32px] text-[#000] FeatureTitle">
                      {item?.title}
                    </div>
                    <div className="">
                      {/* {item?.content} */}
                      <div
                        className="font-[300] text-[18px] leading-[27px] text-[#98A2B3] FeatureContent"
                        dangerouslySetInnerHTML={{ __html: item?.content }}
                      />
                    </div>
                  </div>
                  <Image
                    src={item?.webp}
                    alt={`webp${item?.id}`}
                    width={750}
                    height={420}
                    className="rounded-[20px] FeatureWebp"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* How users are using Robolearn */}

        <div className="flex flex-col justify-center mt-[170px] UsingContainer items-center mb-[200px]">
          <div className="font-semibold text-[42px] leading-[53px] text-[#000] text-center UsingTitle mb-[30px]">
            How users are using Robolearn
          </div>
          <div className="flex gap-[100px] flex-wrap justify-center UsingItemContainer">
            {HOW_TO_USE_ROBOLEARN?.map((item) => {
              return (
                <div key={item?.id} className="max-w-[333px]">
                  <Image
                    src={item?.icon}
                    alt=""
                    height={100}
                    width={100}
                    className="UsingIcon"
                  />
                  <div className="font-semibold text-[24px] leading-[36px] mt-[20px] mb-[20px] UsingTitleItem">
                    {item?.title}
                  </div>
                  <div
                    className="text-[18px] font-[300] text-[#98A2B3] leading-[27px] UsingContentItem"
                    dangerouslySetInnerHTML={{ __html: item?.content }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Swiper */}
        <div className="pb-[100px] w-[100%] bg-[#green] items-center RateContainer">
          <div className="text-[42px] font-[600] leading-[53px] text-[#000] w-[100%] flex flex-col items-center mb-[30px] RateTitle">
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
      </div>
    </>
  );
};
export default Home;
