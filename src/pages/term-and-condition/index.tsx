'use client';
import { Footer } from '@/components/footer';
import { HTML_TERM_OF_SERVICE } from '@/utils/html';
import styles from './index.module.scss';

const TermAndCondition = () => {
  return (
    <div className="flex flex-col items-center pl-[10px] pr-[10px]">
      <div
        className={[
          'flex flex-col items-center pl-[10px] pr-[10px] ',
          styles.container,
        ].join('')}>
        <div className={['flex pt-[160px]', styles.txtTerm].join(' ')}>
          Terms of Use
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: HTML_TERM_OF_SERVICE }}
          className="pb-[100px]"
        />
        <Footer />
      </div>
    </div>
  );
};
export default TermAndCondition;
