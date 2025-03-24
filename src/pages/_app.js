/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import AppProvider from "../context/appContext";
import localFont from "next/font/local";
import "../pages/globals.scss";

const openSans = localFont({
  src: [
    {
      path: "../assets/fonts/OpenSans-Light.ttf",
      weight: "300",
    },
    {
      path: "../assets/fonts/OpenSans-Regular.ttf",
      weight: "400",
    },
    {
      path: "../assets/fonts/OpenSans-Medium.ttf",
      weight: "500",
    },
    {
      path: "../assets/fonts/OpenSans-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../assets/fonts/OpenSans-Bold.ttf",
      weight: "700",
    },
    {
      path: "../assets/fonts/OpenSans-ExtraBold.ttf",
      weight: "800",
    },
    {
      path: "../assets/fonts/OpenSans-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../assets/fonts/OpenSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/OpenSans-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../assets/fonts/OpenSans-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../assets/fonts/OpenSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../assets/fonts/OpenSans-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
  ],
  display: "swap",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <div
        className={[
          openSans.className,
          "flex flex-1 flex-col items-center",
          "RootView",
        ].join(" ")}
      >
        <AppProvider>
          <div className="flex flex-row w-[100%] max-w-[1512px] h-[100px] pl-[20px] pr-[20px] items-center fixed HeaderContainer bg-[#fff] z-[10]">
            <div className="flex items-center flex-1 LogoView">
              <img
                src="favicon.ico"
                className="h-[50px] w-[50px] Logo"
                alt="logo"
              />
              <div className="font-semibold text-[40px]  ml-[10px] AppName">
                Robolearn
              </div>
            </div>
            <div className="DownloadView bg-black flex items-center justify-center text-white font-medium text-[24px] leading-[32px] pt-[10px] pb-[10px] pr-[20px] pl-[20px] rounded-[20px] cursor-pointer">
              Download now
            </div>
          </div>
          <div className="flex flex-col w-[100%] max-w-[1512px]">
            <Component {...pageProps} />
          </div>
        </AppProvider>
      </div>
    </>
  );
}
