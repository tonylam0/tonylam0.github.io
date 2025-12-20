import styles from './Homepage.module.css'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Tony Lam</h1>
        <div className={styles.pages}>
          <Link to={"/about"}>
            <h2 className={styles.pageTitle}>About</h2>
          </Link>

          <Link to={"/notes"}>
            <h2 className={styles.pageTitle}>Notes</h2>
          </Link>

          <Link to={"/workflow"}>
            <h2 className={styles.pageTitle}>Workflow</h2>
          </Link>

          <Link to={"/tech"}>
            <h2 className={styles.pageTitle}>Tech</h2>
          </Link>

          <Link to={"/contact"}>
            <h2 className={styles.pageTitle}>Contact</h2>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Homepage
