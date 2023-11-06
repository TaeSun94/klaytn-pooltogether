import * as styles from './Header.module.css';
import { } from 'react';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          LOGO
        </div>
        <div className={styles.contents}>
          Contents
        </div>
        <div className={styles.subContents}>
          ConnectWallet
        </div>
      </div>
    </header>
  )
}

export default Header;
