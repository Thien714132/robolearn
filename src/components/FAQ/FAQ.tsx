'use client';
import React, { useState } from 'react';
import IconClose from '../../../public/svg/iconClose.svg';
import IconPlus from '../../../public/svg/ic_baseline-plus.svg';
import Image from 'next/image';
import styles from './index.module.scss';
import { FAQ_DATA } from '@/utils/constants';

export const FAQ = () => {
  const [chosenItem, setChosenItem] = useState<number[]>([]);
  const onClickItem = (id: number) => {
    if (!chosenItem?.includes(id)) {
      setChosenItem(prev => [...prev, id]);
    }
  };

  const onCloseItem = (id: number) => {
    setChosenItem(prev => prev.filter(item => item !== id));
  };
  return (
    <div
      className={[
        'flex flex-col items-center mb-[140] w-[680px]',
        styles.container,
      ].join(' ')}>
      <div
        className={[
          'mb-[50px] text-[42px] font-bold leading-[63px] FaqHeaderTitle',
          styles.FaqHeaderTitle,
        ].join(' ')}>
        FAQ
      </div>
      <div className="w-[100%]">
        {FAQ_DATA?.map(item => {
          const isFocus = chosenItem?.includes(item?.id);
          return (
            <div key={item?.id} className={styles.itemContainer}>
              <div
                className="cursor-pointer flex items-center w-[100%]"
                onClick={onClickItem?.bind(null, item?.id)}>
                <div className={[styles.txtQuestion].join(' ')}>
                  {item?.question}
                </div>
                {isFocus ? (
                  <Image
                    src={IconClose}
                    alt="IconClose"
                    onClick={onCloseItem?.bind(null, item?.id)}
                    className={styles.icon}
                  />
                ) : (
                  <Image
                    src={IconPlus}
                    alt="IconPlus"
                    onClick={onCloseItem?.bind(null, item?.id)}
                    className={styles.icon}
                  />
                )}
              </div>
              {isFocus && (
                <div className={styles.txtAnswer}>{item?.anwser}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
