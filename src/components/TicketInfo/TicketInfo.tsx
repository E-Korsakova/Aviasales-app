import styles from './index.module.scss';

type Segments = {
  origin: string;
  destination: string;
  date?: string;
  stops: string[];
  duration: number;
};

const TicketInfo = ({ origin, destination, stops, duration }: Segments) => {
  return (
    <>
      <div className={styles.info}>
        <span className={styles.textHeader}>
          {origin} - {destination}
        </span>
        <span className={styles.text}>10:45 - 08:00</span>
      </div>
      <div className={styles.info}>
        <span className={styles.textHeader}>B ПУТИ</span>
        <span className={styles.text}>{`${Math.trunc(duration / 60)}ч ${duration % 60}м`}</span>
      </div>
      <div className={styles.info}>
        <span className={styles.textHeader}>
          {stops.length === 0 ? 'БЕЗ ПЕРЕСАДОК' : stops.length === 1 ? '1 ПЕРЕСАДКА' : `${stops.length} ПЕРЕСАДКИ`}
        </span>
        <span className={styles.text}>{stops.join(', ')}</span>
      </div>
    </>
  );
};

export { TicketInfo };
