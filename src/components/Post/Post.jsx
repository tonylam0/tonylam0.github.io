import styles from './Post.module.css'

const Post = ({ children, date }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
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
