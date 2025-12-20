import styles from './About.module.css'
import PageTitle from '../components/PageTitle/PageTitle'

const About = () => {
  return (
    <>
      <div className={styles.container}>
        <PageTitle></PageTitle>
        <p className={styles.text}></p>
      </div>
    </>
  )
}

export default About
