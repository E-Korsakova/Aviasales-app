import { useMediaQuery } from 'react-responsive';
import { ReactElement, useState } from 'react';

import { AsideMenu } from '../AsideMenu';
import { Main } from '../Main';
import Logo from '../../data/images/Logo.svg';

import styles from './index.module.scss';

function App(): ReactElement {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const [isOpen, setIsOpen] = useState(false);

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
