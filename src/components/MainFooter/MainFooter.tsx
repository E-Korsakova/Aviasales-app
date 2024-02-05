import styles from './index.module.scss';

const MainFooter = () => {
  return (
    <footer className={styles.footer}>
      <button aria-label="show more" className={styles.footerButton}>
        <span className={styles.text}>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!</span>
      </button>
    </footer>
  );
};

export { MainFooter };
