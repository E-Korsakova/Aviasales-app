import { AsideMenu } from '../AsideMenu';
import Logo from '../../data/images/Logo.svg';

import styles from './index.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <img className={styles.logo} src={Logo} alt="logo" />
      <div className={styles.main}>
        <AsideMenu />
      </div>
    </div>
  );
};

export { App };
