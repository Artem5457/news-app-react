import styles from './Header.module.scss';
import { formatDate } from '../../utils/helpers/FormatDate.js';

export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>NEWS PORTAL</h1>
      <p className={styles.date}>{formatDate(new Date())}</p>
    </header>
  );
}
