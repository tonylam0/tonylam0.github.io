import styles from './Notes.module.css'
import NoteCard from '../../components/NoteCard/NoteCard.jsx'

const Notes = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Notes</h1>
          <p>A collection of my thoughts.</p>

          <NoteCard name={"reading"} title={"Reading"} date={"12/20/2025"}></NoteCard>
        </div>
      </div >
    </>
  )
}

export default Notes
