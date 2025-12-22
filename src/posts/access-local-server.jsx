import Post from "../components/Post/Post"
import ReactMarkdown from 'react-markdown'
import content from '../markdown/access-local-server.md?raw'

const AccessLocalServer = () => {
  return (
    <>
      <Post date={"12/21/25"}>
        <ReactMarkdown>{content}</ReactMarkdown>
      </Post >
    </>
  )
}

export default AccessLocalServer
