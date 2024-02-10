import { useMediaQuery } from 'react-responsive';
import { ReactElement, useEffect, useState } from 'react';

import { AsideMenu } from '../AsideMenu';
import { Main } from '../Main';
import Logo from '../../data/images/Logo.svg';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchTickets, searchId } from '../../store/fetchSlice';

import styles from './index.module.scss';

function App(): ReactElement {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useAppDispatch();
  const stateFetch = useAppSelector((state) => state.fetch);

  useEffect(() => {
    dispatch(searchId());
  }, []);

  useEffect(() => {
    if (stateFetch.searchId && !stateFetch.stop && !stateFetch.loading) dispatch(fetchTickets(stateFetch.searchId));
  }, [stateFetch.searchId, stateFetch.loading]);

  return (
    <div className={styles.app}>
      {isMobile && (
        <button
          aria-label="filters"
          className={isOpen ? styles.buttonOpen : styles.buttonClose}
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
      {isMobile && <AsideMenu isOpen={isOpen} />}
      <img className={styles.logo} src={Logo} alt="logo" />
      <div className={styles['app-page']}>
        {!isMobile && <AsideMenu />}
        <Main />
      </div>
    </div>
  );
}

export { App };
