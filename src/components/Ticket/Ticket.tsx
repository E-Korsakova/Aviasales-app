import { TicketInfo } from '../TicketInfo';
import S7Logo from '../../data/images/S7_Logo.svg';

import styles from './index.module.scss';

const Ticket = () => {
  return (
    <div className={styles.ticket}>
      <header className={styles.ticketHeader}>
        <span className={styles.price}>13 400 P</span>
        <img src={S7Logo} alt="airline logo" className={styles.logo} />
      </header>
      <main className={styles.ticketMain}>
        <TicketInfo />
        <TicketInfo />
      </main>
    </div>
  );
};

export { Ticket };
