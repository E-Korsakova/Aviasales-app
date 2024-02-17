import { useMediaQuery } from 'react-responsive';
import { ReactElement, useEffect, useState } from 'react';
import { Spin } from 'antd';

import { AsideMenu } from '../AsideMenu';
import { Main } from '../Main';
import Logo from '../../data/images/Logo.svg';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setSort, fetchTickets, getFilteredTickets, searchId } from '../../store/fetchSlice';

import styles from './index.module.scss';

function App(): ReactElement {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFilter, setIsFilter] = useState(false);

  const dispatch = useAppDispatch();
  const stateFetch = useAppSelector((state) => state.fetch);

  useEffect(() => {
    setIsLoading(true);
    dispatch(searchId());
  }, [dispatch]);

  useEffect(() => {
    if (stateFetch.searchId && !stateFetch.stop && !stateFetch.loading) dispatch(fetchTickets(stateFetch.searchId));
    if (stateFetch.stop) setIsLoading(false);
  }, [stateFetch.searchId, stateFetch.loading, dispatch, stateFetch.stop]);

  useEffect(() => {
    setIsFilter(false);
    if (stateFetch.tickets.length !== 0) {
      dispatch(getFilteredTickets(stateFetch));
      setIsFilter(true);
    }
  }, [
    stateFetch.filters.all,
    stateFetch.filters.noTransfers,
    stateFetch.filters.oneTransfer,
    stateFetch.filters.twoTransfers,
    stateFetch.filters.threeTransfers,
    stateFetch.tickets,
    dispatch,
  ]);

  useEffect(() => {
    if (stateFetch.filteredTickets.length !== 0) {
      if (stateFetch.sort === 'cheapest') dispatch(setSort('cheapest'));
      if (stateFetch.sort === 'fastest') dispatch(setSort('fastest'));
      if (stateFetch.sort === 'optimal') dispatch(setSort('optimal'));
    }
  }, [stateFetch.filteredTickets, dispatch, stateFetch.sort]);
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
      {(stateFetch.loading || isLoading) && <Spin style={{ marginBottom: 20, marginTop: -40 }} />}
      <div className={styles['app-page']}>
        {!isMobile && isFilter && <AsideMenu />}
        {isFilter && <Main tickets={stateFetch.filteredTickets} />}
      </div>
    </div>
  );
}

export { App };
