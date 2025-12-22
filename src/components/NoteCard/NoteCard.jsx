import styles from './NoteCard.module.css'
import { Link } from 'react-router-dom'

const NoteCard = (props) => {
  return (
    <>
      <Link to={props.route} className={styles.noteLink}>
        <div className={styles.container}>
          <h2 className={styles.title}>{props.title}</h2>
          <h2 className={styles.date}>{props.date}</h2>
        </div>
      </Link >
    </>
  )
}

export default NoteCard 
