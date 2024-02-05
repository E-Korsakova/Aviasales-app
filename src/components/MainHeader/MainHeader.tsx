import styles from './index.module.scss';

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <button id={'1'} aria-label="cheapest" className={styles.headerButtonActive}>
        <span className={styles.text}>САМЫЙ ДЕШЕВЫЙ</span>
      </button>
      <button id={'2'} aria-label="fastest" className={styles.headerButton}>
        <span className={styles.text}>САМЫЙ БЫСТРЫЙ</span>
      </button>
      <button id={'3'} aria-label="optimal" className={styles.headerButton}>
        <span className={styles.text}>ОПТИМАЛЬНЫЙ</span>
      </button>
    </header>
  );
};

export { MainHeader };
