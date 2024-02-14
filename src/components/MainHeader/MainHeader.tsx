import { useAppDispatch, useAppSelector } from '../../hooks';
import { cheapest, fastest, optimal } from '../../store/fetchSlice';

import styles from './index.module.scss';

const MainHeader = () => {
  const dispatch = useAppDispatch();
  const stateFetch = useAppSelector((state) => state.fetch);
  return (
    <header className={styles.header}>
      <button
        id={'cheapest'}
        aria-label="cheapest"
        onClick={() => {
          dispatch(cheapest());
        }}
        className={stateFetch.sort === 'cheapest' ? styles.headerButtonActive : styles.headerButton}
      >
        <span className={styles.text}>САМЫЙ ДЕШЕВЫЙ</span>
      </button>
      <button
        id={'fastest'}
        aria-label="fastest"
        onClick={() => {
          dispatch(fastest());
        }}
        className={stateFetch.sort === 'fastest' ? styles.headerButtonActive : styles.headerButton}
      >
        <span className={styles.text}>САМЫЙ БЫСТРЫЙ</span>
      </button>
      <button
        id={'optimal'}
        aria-label="optimal"
        onClick={() => {
          dispatch(optimal());
        }}
        className={stateFetch.sort === 'optimal' ? styles.headerButtonActive : styles.headerButton}
      >
        <span className={styles.text}>ОПТИМАЛЬНЫЙ</span>
      </button>
    </header>
  );
};

export { MainHeader };
