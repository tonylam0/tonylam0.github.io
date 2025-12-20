import styles from './About.module.css'
import PageTitle from '../../components/PageTitle/PageTitle.jsx'

const About = () => {
  return (
    <>
      <div className={styles.container}>
        <PageTitle>About me</PageTitle>
        <p className={styles.text}></p>
      </div >
    </>
  )
}

export default About
