import styles from './Workflow.module.css'
import ReactMarkdown from 'react-markdown'
import content from '../../markdown/workflow.md?raw'

const Workflow = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </>
  )
}

export default Workflow
