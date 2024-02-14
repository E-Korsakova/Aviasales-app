import { ReactElement } from 'react';
import { useMediaQuery } from 'react-responsive';

import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  // cheapest,
  // fastest,
  // optimal,
  setAll,
  setNoTransfers,
  setOneTransfer,
  setThreeTransfer,
  setTwoTransfer,
} from '../../store/fetchSlice';

import styles from './index.module.scss';

interface AsideMenuProps {
  isOpen?: boolean;
}

const AsideMenu = ({ isOpen }: AsideMenuProps): ReactElement => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const mobileStyle: React.CSSProperties = {
    position: 'absolute',
    transition: 'transform 0.3s easy-in-out',
    transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
  };

  const dispatch = useAppDispatch();
  const stateFetch = useAppSelector((state) => state.fetch);

  return (
    <aside className={styles['aside-menu']} style={isMobile ? mobileStyle : {}}>
      <span className={styles.textTitle}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <label className={styles['aside-transfers']}>
        <input
          className={styles.checkbox}
          type="checkbox"
          id="all"
          name="transfer-all"
          checked={stateFetch.filters.all}
          onChange={() => {
            dispatch(setAll());
            // if (stateFetch.sort === 'cheapest') dispatch(cheapest());
            // if (stateFetch.sort === 'fastest') dispatch(fastest());
            // if (stateFetch.sort === 'optimal') dispatch(optimal());
          }}
        />
        <span className={styles.text}>Bce</span>
      </label>
      <label className={styles['aside-transfers']}>
        <input
          className={styles.checkbox}
          type="checkbox"
          id="noTransfers"
          name="transfer-0"
          checked={stateFetch.filters.noTransfers}
          onChange={() => {
            dispatch(setNoTransfers());
            // if (stateFetch.sort === 'cheapest') dispatch(cheapest());
            // if (stateFetch.sort === 'fastest') dispatch(fastest());
            // if (stateFetch.sort === 'optimal') dispatch(optimal());
          }}
        />
        <span className={styles.text}>Без пересадок</span>
      </label>
      <label className={styles['aside-transfers']}>
        <input
          className={styles.checkbox}
          type="checkbox"
          id="oneTransfer"
          name="transfer-1"
          checked={stateFetch.filters.oneTransfer}
          onChange={() => {
            dispatch(setOneTransfer());
            // if (stateFetch.sort === 'cheapest') dispatch(cheapest());
            // if (stateFetch.sort === 'fastest') dispatch(fastest());
            // if (stateFetch.sort === 'optimal') dispatch(optimal());
          }}
        />
        <span className={styles.text}>1 пересадка</span>
      </label>
      <label className={styles['aside-transfers']}>
        <input
          className={styles.checkbox}
          type="checkbox"
          id="twoTransfers"
          name="transfer-2"
          checked={stateFetch.filters.twoTransfers}
          onChange={() => {
            dispatch(setTwoTransfer());
            // if (stateFetch.sort === 'cheapest') dispatch(cheapest());
            // if (stateFetch.sort === 'fastest') dispatch(fastest());
            // if (stateFetch.sort === 'optimal') dispatch(optimal());
          }}
        />
        <span className={styles.text}>2 пересадки</span>
      </label>
      <label className={styles['aside-transfers']}>
        <input
          className={styles.checkbox}
          type="checkbox"
          id="threeTransfers"
          name="transfer-3"
          checked={stateFetch.filters.threeTransfers}
          onChange={() => {
            dispatch(setThreeTransfer());
            // if (stateFetch.sort === 'cheapest') dispatch(cheapest());
            // if (stateFetch.sort === 'fastest') dispatch(fastest());
            // if (stateFetch.sort === 'optimal') dispatch(optimal());
          }}
        />
        <span className={styles.text}>3 пересадки</span>
      </label>
    </aside>
  );
};

export { AsideMenu };
