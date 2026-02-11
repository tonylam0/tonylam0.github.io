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
            {posts && [...posts]
              .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sorts descending
              .map((post) => (
                <NoteCard
                  key={post.id}
                  route={post.route}
                  title={post.title}
                  date={post.date}
                />
              ))
            }
          </div>
        </div>
      </div >
    </>
  )
}

export default Notes
