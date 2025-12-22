import styles from './Workflow.module.css'
import ReactMarkdown from 'react-markdown'
import rehypeExternalLinks from 'rehype-external-links'
import content from '../../markdown/workflow.md?raw'

const Workflow = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <ReactMarkdown rehypePlugins={[[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]]}>{content}</ReactMarkdown>
        </div>
      </div>
    </>
  )
}

export default Workflow
