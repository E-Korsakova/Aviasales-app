import { useAppDispatch } from '../../hooks';
import { showMore } from '../../store/fetchSlice';

import styles from './index.module.scss';

// type MainFooterProps = {
//   count: number;
//   setCount: (newCount: number) => void;
// };

const MainFooter = () => {
  const dispatch = useAppDispatch();
  // const isMore = useAppSelector((state) => state.fetch.isShowMore);
  return (
    <footer className={styles.footer}>
      <button
        aria-label="show more"
        className={styles.footerButton}
        onClick={() => {
          dispatch(showMore());
        }}
      >
        <span className={styles.text}>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!</span>
      </button>
    </footer>
  );
};

export { MainFooter };
