import { ReactElement } from 'react';
import { useMediaQuery } from 'react-responsive';

import { useActions } from '../../hooks/useActions';

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

  const { filterAll, filterNoTransfers, filterOneTransfer, filterTwoTransfers, filterThreeTransfers } = useActions();
  return (
    <aside className={styles['aside-menu']} style={isMobile ? mobileStyle : {}}>
      <span className={styles.textTitle}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <label className={styles['aside-transfers']}>
        <input
          className={styles.checkbox}
          type="checkbox"
          id="all"
          name="transfer-all"
          defaultChecked={false}
          onChange={filterAll}
        />
        <span className={styles.text}>Bce</span>
      </label>
      <label className={styles['aside-transfers']}>
        <input
          className={styles.checkbox}
          type="checkbox"
          id="noTransfers"
          name="transfer-0"
          defaultChecked={false}
          onChange={filterNoTransfers}
        />
        <span className={styles.text}>Без пересадок</span>
      </label>
      <label className={styles['aside-transfers']}>
        <input
          className={styles.checkbox}
          type="checkbox"
          id="oneTransfer"
          name="transfer-1"
          defaultChecked={false}
          onChange={filterOneTransfer}
        />
        <span className={styles.text}>1 пересадка</span>
      </label>
      <label className={styles['aside-transfers']}>
        <input
          className={styles.checkbox}
          type="checkbox"
          id="twoTransfers"
          name="transfer-2"
          defaultChecked={false}
          onChange={filterTwoTransfers}
        />
        <span className={styles.text}>2 пересадки</span>
      </label>
      <label className={styles['aside-transfers']}>
        <input
          className={styles.checkbox}
          type="checkbox"
          id="threeTransfers"
          name="transfer-3"
          defaultChecked={false}
          onChange={filterThreeTransfers}
        />
        <span className={styles.text}>3 пересадки</span>
      </label>
    </aside>
  );
};

export { AsideMenu };
