import { TicketInfo } from '../TicketInfo';
// import S7Logo from '../../data/images/S7_Logo.svg';

import styles from './index.module.scss';

type Segments = {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
};

type TicketProps = {
  price: number;
  carrier: string;
  segments: Segments[];
};

const Ticket = ({ carrier, price, segments }: TicketProps) => {
  // console.log(carrier, price, segments);

  return (
    <div className={styles.ticket}>
      <header className={styles.ticketHeader}>
        <span className={styles.price}>{price} P</span>
        <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt="airline logo" className={styles.logo} />
      </header>
      <main className={styles.ticketMain}>
        {carrier &&
          price &&
          segments[0] &&
          segments.map((segment) => {
            return <TicketInfo key={segments.indexOf(segment)} {...segment} />;
          })}
      </main>
    </div>
  );
};

export { Ticket };
