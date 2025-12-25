import styles from './Academia.module.css'
import classes from './classes.json'
import { Link } from 'react-router-dom'

const Academia = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Academia</h1>
          <p>A collection of my school notes.</p>
          <br />

          <div className={styles.classSection}>
            {classes && Object.entries(classes).map(([key, value]) => (
              <div className={styles.classContainer}>
                <Link to={value.route}>
                  <div className={styles.imageBox}>
                    <img className={styles.thumbnail} src={value.thumbnail} alt="thumbnail"></img>
                  </div>
                  <div className={styles.nameBox}>
                    <h2 className={styles.name}>{key}</h2>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div >
    </>
  )
}

export default Academia
