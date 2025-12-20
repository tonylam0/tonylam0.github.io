import styles from './About.module.css'

function About() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>About me</h1>
        </div>
        <p className={styles.text}></p>
      </div>
    </>
  )
}

export default About
