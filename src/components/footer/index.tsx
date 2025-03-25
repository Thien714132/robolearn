/* eslint-disable @next/next/no-img-element */
'use client';
import Image from 'next/image';
import { useRouter } from 'next/router';
import IconCopyright from '../../../public/svg/ic_copyright.svg';
import IconFile from '../../../public/svg/ic_file.svg';
import IconIns from '../../../public/svg/ic_ins.svg';
import IconShield from '../../../public/svg/ic_shield.svg';
import IconTiktok from '../../../public/svg/ic_tiktok.svg';
import IconX from '../../../public/svg/ic_x.svg';
import styles from './index.module.scss';

export const Footer = () => {
  const router = useRouter();

  const goToTerm = () => {
    router.push('/term-and-condition');
  };
  const goToPrivacy = () => {
    router.push('/privacy-policy');
  };
  return (
    <div className="flex flex-col items-center">
      <img
        src="favicon.ico"
        className={['h-[100px] w-[100px] mb-[10px]', styles.logo].join(' ')}
        alt="logo"
      />
      <div className="flex gap-[30px] mb-[10px]">
        <div
          className="flex cursor-pointer items-center gap-[3px]"
          onClick={goToTerm}>
          <Image
            src={IconFile}
            height={24}
            width={24}
            alt=""
            className={styles.iconTerm}
          />
          <div className={styles.txtTerm}>Terms & Conditions</div>
        </div>
        <div
          className="flex cursor-pointer items-center gap-[3px]"
          onClick={goToPrivacy}>
          <Image
            src={IconShield}
            height={24}
            width={24}
            alt=""
            className={styles.iconTerm}
          />
          <div className={styles.txtTerm}>Privacy Policy</div>
        </div>
      </div>
      <div className="flex gap-[20px] items-center mb-[10px] hidden">
        <Image
          src={IconX}
          height={32}
          width={32}
          alt=""
          className="cursor-pointer"
        />
        <Image
          src={IconIns}
          height={40}
          width={40}
          alt=""
          className="cursor-pointer"
        />
        <Image
          src={IconTiktok}
          height={40}
          width={40}
          alt=""
          className="cursor-pointer"
        />
      </div>
      <div className="flex gap-[3px] items-center mb-[100px]">
        <Image
          src={IconCopyright}
          height={22}
          width={22}
          alt=""
          className={styles.iconTerm}
        />
        <div className={styles.txtTerm}>2025 Robolearn</div>
      </div>
    </div>
  );
};
