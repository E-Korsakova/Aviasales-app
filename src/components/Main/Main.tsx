import { MainHeader } from '../MainHeader';
import { MainFooter } from '../MainFooter';
import { Ticket } from '../Ticket';

import styles from './index.module.scss';

const Main = () => {
  const tickets = Array(5).fill(<Ticket />);
  return (
    <main className={styles.main}>
      <MainHeader />
      {tickets}
      <MainFooter />
    </main>
  );
};

export { Main };
