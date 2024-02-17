import { lightFormat } from 'date-fns';

import styles from './index.module.scss';

type Segments = {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
};

const TicketInfo = ({ origin, destination, stops, duration, date }: Segments) => {
  const departureTime = lightFormat(new Date(date), 'HH:mm');
  const arrivalDate = new Date(date).getTime() + duration * 60000;
  const arrivalTime = lightFormat(new Date(arrivalDate), 'HH:mm');
  return (
    <>
      <div className={styles.info}>
        <span className={styles.textHeader}>
          {origin} - {destination}
        </span>
        <span className={styles.text}>
          {departureTime} - {arrivalTime}
        </span>
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
