/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import AppProvider from '../context/appContext';
import localFont from 'next/font/local';
import '../pages/globals.scss';
import { METADATA_SOURCE, ROUTE_NAME } from '../utils/enums.ts';
import { useRouter } from 'next/router';

const openSans = localFont({
  src: [
    {
      path: '../assets/fonts/OpenSans-Light.ttf',
      weight: '300',
    },
    {
      path: '../assets/fonts/OpenSans-Regular.ttf',
      weight: '400',
    },
    {
      path: '../assets/fonts/OpenSans-Medium.ttf',
      weight: '500',
    },
    {
      path: '../assets/fonts/OpenSans-SemiBold.ttf',
      weight: '600',
    },
    {
      path: '../assets/fonts/OpenSans-Bold.ttf',
      weight: '700',
    },
    {
      path: '../assets/fonts/OpenSans-ExtraBold.ttf',
      weight: '800',
    },
    {
      path: '../assets/fonts/OpenSans-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../assets/fonts/OpenSans-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../assets/fonts/OpenSans-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../assets/fonts/OpenSans-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../assets/fonts/OpenSans-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../assets/fonts/OpenSans-ExtraBoldItalic.ttf',
      weight: '800',
      style: 'italic',
    },
  ],
  display: 'swap',
});

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const currentRoute = router.pathname;
  const hideHeader =
    currentRoute !== '/' + ROUTE_NAME.LANDING_PAGE &&
    currentRoute !== '/' + ROUTE_NAME.TERM_AND_CONDITION &&
    currentRoute !== '/' + ROUTE_NAME.PRIVACY_POLICY;
  const goHome = () => {
    router.push('/' + ROUTE_NAME.LANDING_PAGE);
  };
  function downloadApp() {
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    const isWindows = navigator.platform.toUpperCase().indexOf('WIN') >= 0;

    if (isMac) {
      window.open('https://apps.apple.com/us/app/id6739834586');
    } else if (isWindows) {
      window.open(
        'https://play.google.com/store/apps/details?id=com.mbs.note&pli=1',
      );
    } else {
      alert('Your operating system is not supported for this download.');
    }
  }
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>
          Robolearn - AI Note Taker and Feynman AI for Intelligent Learning
        </title>
        <meta
          name={METADATA_SOURCE.searchName}
          content={METADATA_SOURCE.searchContent}
        />
        <meta property="og:site_name" content={METADATA_SOURCE.shareName} />
        <meta property="og:title" content={METADATA_SOURCE.shareTitle} />
        <meta
          property="og:description"
          content={METADATA_SOURCE.shareDescription}
        />
        <meta property="og:image" content={METADATA_SOURCE.shareImg} />
        <meta property="og:url" content={METADATA_SOURCE.webURL} />
        <meta name="description" content={METADATA_SOURCE.shareDescription} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0 maximum-scale=1"
        />
      </Head>
      <div
        className={[
          openSans.className,
          'flex flex-1 flex-col items-center',
          'RootView',
        ].join(' ')}>
        <AppProvider>
          <div
            className={[
              'flex flex-row w-[100%] max-w-[1512px] h-[60px] pl-[20px] pr-[20px] items-center fixed HeaderContainer bg-[rgba(255,255,255,0.9)] z-[10]',
              hideHeader && 'hidden',
            ].join(' ')}>
            <div
              className="flex items-center flex-1 LogoView cursor-pointer"
              onClick={goHome}>
              <img
                src="favicon.ico"
                className="h-[39.51px] w-[38.33px] Logo"
                alt="logo"
              />
              <div className="font-semibold text-[24px] ml-[10px] leading-[24px] AppName">
                Robolearn
              </div>
            </div>
            <div
              onClick={downloadApp}
              className="DownloadView bg-black flex items-center justify-center text-white font-[600] text-[16px] leading-[24px] pt-[8px] pb-[8px] pr-[32px] pl-[32px] rounded-[16px] cursor-pointer">
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
