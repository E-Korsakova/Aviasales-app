import uniqid from 'uniqid';

import { MainHeader } from '../MainHeader';
import { MainFooter } from '../MainFooter';
import { Ticket } from '../Ticket';
import { useAppSelector } from '../../hooks';

import styles from './index.module.scss';

type Segments = {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
};

type TicketType = {
  price: number;
  carrier: string;
  segments: Segments[];
};

type MainPropsType = {
  tickets: TicketType[];
};

const Main = ({ tickets }: MainPropsType) => {
  const fetchState = useAppSelector((state) => state.fetch);

  const isFilter =
    fetchState.filters.noTransfers ||
    fetchState.filters.oneTransfer ||
    fetchState.filters.twoTransfers ||
    fetchState.filters.threeTransfers;

  const displayTickets: TicketType[] = [];
  if (isFilter) {
    for (let i = 0; i < fetchState.showMoreCount; i++) {
      displayTickets.push(tickets[i]);
    }
  }
  return (
    <main className={styles.main}>
      <MainHeader />
      {!isFilter ? (
        <span>Рейсов, подходящих под заданные фильтры, не найдено</span>
      ) : (
        displayTickets.map((ticket) => {
          return <Ticket key={uniqid.time('ticket-')} {...ticket} />;
        })
      )}
      {isFilter && <MainFooter />}
    </main>
  );
};

export { Main };
