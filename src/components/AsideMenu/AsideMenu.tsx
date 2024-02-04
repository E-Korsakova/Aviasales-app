import styles from './index.module.scss';

const AsideMenu = () => {
  return (
    <aside className={styles['aside-menu']}>
      <span className={styles.textTitle}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <label className={styles['aside-transfers']}>
        <input className={styles.checkbox} type="checkbox" id="transfer-all" name="transfer-all" checked={false} />
        <span className={styles.text}>Bce</span>
      </label>
      <label className={styles['aside-transfers']}>
        <input className={styles.checkbox} type="checkbox" id="transfer-0" name="transfer-0" checked={true} />
        <span className={styles.text}>Без пересадок</span>
      </label>
      <label className={styles['aside-transfers']}>
        <input className={styles.checkbox} type="checkbox" id="transfer-1" name="transfer-1" checked={false} />
        <span className={styles.text}>1 пересадка</span>
      </label>
      <label className={styles['aside-transfers']}>
        <input className={styles.checkbox} type="checkbox" id="transfer-2" name="transfer-2" checked={false} />
        <span className={styles.text}>2 пересадки</span>
      </label>
      <label className={styles['aside-transfers']}>
        <input className={styles.checkbox} type="checkbox" id="transfer-3" name="transfer-3" checked={false} />
        <span className={styles.text}>3 пересадки</span>
      </label>
    </aside>
  );
};

export { AsideMenu };
