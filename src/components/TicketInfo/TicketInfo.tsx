import styles from './index.module.scss';

const TicketInfo = () => {
  return (
    <>
      <div className={styles.info}>
        <span className={styles.textHeader}>MOW - HKT</span>
        <span className={styles.text}>10:45 - 08:00</span>
      </div>
      <div className={styles.info}>
        <span className={styles.textHeader}>B ПУТИ</span>
        <span className={styles.text}>10:45 - 08:00</span>
      </div>
      <div className={styles.info}>
        <span className={styles.textHeader}>1 ПЕРЕСАДКА</span>
        <span className={styles.text}>HKG</span>
      </div>
    </>
  );
};

export { TicketInfo };
