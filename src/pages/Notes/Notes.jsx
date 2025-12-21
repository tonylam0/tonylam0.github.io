import styles from './Notes.module.css'
import NoteCard from '../../components/NoteCard/NoteCard.jsx'

const Notes = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Notes</h1>
          <p>A collection of my thoughts.</p>

          <div className={styles.posts}>
            <NoteCard name={"access-local-server"} title={"How to Access Computer's Local Server on Any Device"} date={"12/21/2025"}></NoteCard>
          </div>
        </div>
      </div >
    </>
  )
}

export default Notes
