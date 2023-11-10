import Link from 'next/link';
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
          <Link href="/deposits">Deposits</Link>
          <Link href="/prizes">Prizes</Link>
          <Link href="/accounts">Accounts</Link>
        </div>
        <div className={styles.subContents}>
          ConnectWallet
        </div>
      </div>
    </header>
  )
}

export default Header;
