import { useActions } from '../../hooks/useActions';
import { useTypeSelector } from '../../hooks/useTypeSelector';

import styles from './index.module.scss';

const MainHeader = () => {
  const { cheapest, fastest, optimal } = useTypeSelector((state) => state.sort);
  const { sortCheapest, sortFastest, sortOptimal } = useActions();
  return (
    <header className={styles.header}>
      <button
        id={'cheapest'}
        aria-label="cheapest"
        onClick={sortCheapest}
        className={cheapest ? styles.headerButtonActive : styles.headerButton}
      >
        <span className={styles.text}>САМЫЙ ДЕШЕВЫЙ</span>
      </button>
      <button
        id={'fastest'}
        aria-label="fastest"
        onClick={sortFastest}
        className={fastest ? styles.headerButtonActive : styles.headerButton}
      >
        <span className={styles.text}>САМЫЙ БЫСТРЫЙ</span>
      </button>
      <button
        id={'optimal'}
        aria-label="optimal"
        onClick={sortOptimal}
        className={optimal ? styles.headerButtonActive : styles.headerButton}
      >
        <span className={styles.text}>ОПТИМАЛЬНЫЙ</span>
      </button>
    </header>
  );
};

export { MainHeader };
