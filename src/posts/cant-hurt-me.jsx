import Post from "../components/Post/Post.jsx"
import ReactMarkdown from 'react-markdown'
import rehypeExternalLinks from 'rehype-external-links'
import content from '../markdown/cant-hurt-me.md?raw'

const CantHurtMe = () => {
  return (
    <>
      <Post date={"2/13/26"}>
        <ReactMarkdown rehypePlugins={[[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]]}>{content}</ReactMarkdown>
      </Post >
    </>
  )
}

export default CantHurtMe
