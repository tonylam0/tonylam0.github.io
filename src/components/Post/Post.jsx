import styles from './Post.module.css'

const Post = ({ children, title, date }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          {children}
          <br />
          <p className={styles.signature}>Thanks for reading,</p>
          <p className={styles.signature}>Tony Lam ({date})</p>
        </div>
      </div>
    </>
  )
}

export default Post
