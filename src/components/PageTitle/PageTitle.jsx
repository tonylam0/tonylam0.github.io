import { Children } from 'react'
import styles from './PageTitle.module.css'

const PageTitle = ({children}) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            {children}
          </h1>
        </div>
        <p className={styles.text}></p>
      </div>
    </>
  )
}

export default PageTitle
