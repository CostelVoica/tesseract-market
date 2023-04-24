import Link from "next/link"
import styles from '../styles/navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>My Ecommerce Site</div>
      <ul className={styles.navbar__links}>
        <li>
          <Link href="/" className={styles.navbar__link}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/books" className={styles.navbar__link}>
            Books
          </Link>
        </li>
        <li>
          <Link href="/about" className={styles.navbar__link}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar