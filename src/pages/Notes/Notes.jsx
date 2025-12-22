import styles from './Notes.module.css'
import NoteCard from '../../components/NoteCard/NoteCard.jsx'
import posts from './posts.json'

const Notes = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Notes</h1>
          <p>A collection of my thoughts.</p>

          <div className={styles.posts}>
            {posts && posts.map((value) => (
              <NoteCard key={value.id} route={value.route} title={value.title} date={value.date}></NoteCard>
            ))}
          </div>
        </div>
      </div >
    </>
  )
}

export default Notes
