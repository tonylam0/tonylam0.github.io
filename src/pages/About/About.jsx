import styles from './About.module.css'
import PageTitle from '../../components/PageTitle/PageTitle.jsx'

const About = () => {
  return (
    <>
      <div className={styles.container}>
        {/* <PageTitle>About me</PageTitle> */}
        {/* <p className={styles.text}>Text</p> */}

        <div className={styles.content}>
          <h1 className={styles.title}>About me</h1>
          <p className={styles.text}>
            Hello! I am currently an undergraduate student at the University of Virginia, majoring in computer science.
            My main priorities are optimizing my workflow and constantly growing both mentally and physically.
          </p>
        </div>
      </div >
    </>
  )
}

export default About
