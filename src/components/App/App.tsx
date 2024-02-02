import aviasalesLogo from '../../data/images/Logo.svg';

import styles from './index.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <img className={styles.logo} src={aviasalesLogo} alt="logo" />
    </div>
  );
}

export { App };
