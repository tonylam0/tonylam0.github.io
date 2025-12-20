import styles from './Notes.module.css'

const Notes = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Notes</h1>
          <p>A collection of my thoughts.</p>

          <div className={styles.placeholder}>
            <p className={styles.phText}>Still haven't made a note yet... </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Notes
