import styles from './Tech.module.css'
import list from './list.json'

const Tech = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Technology</h1>

          {list && Object.entries(list).map(([key, value]) => (
            <div key={key}>
              <div className={styles.heading}>
                {value.model ? <h2 className={styles.deviceName}>{key} ({value.model})</h2> : <h2 className={styles.deviceName}>{key}</h2>}
                {value.link && <a href={value.link} target="_blank" rel="noopener noreferrer"><h2 className={styles.linkText}> → see {value.linkName}</h2></a>}
              </div>

              <ul className={styles.list}>
                {value.items.map((item) =>
                  <li>{item}</li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div >
    </>
  )
}

export default Tech
