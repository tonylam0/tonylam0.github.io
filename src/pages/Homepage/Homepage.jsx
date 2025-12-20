import styles from './Homepage.module.css'

function Homepage() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Tony Lam</h1>
        <div className={styles.pages}>
          <h2 className={styles.pageTitle}>About</h2>
          <h2 className={styles.pageTitle}>Notes</h2>
          <h2 className={styles.pageTitle}>Workflow</h2>
          <h2 className={styles.pageTitle}>Tech</h2>
          <h2 className={styles.pageTitle}>Contact</h2>
        </div>
      </div>
    </>
  )
}

export default Homepage
