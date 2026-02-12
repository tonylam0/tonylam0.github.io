import Post from "../components/Post/Post.jsx"
import ReactMarkdown from 'react-markdown'
import rehypeExternalLinks from 'rehype-external-links'
import content from '../markdown/gold-standard.md?raw'

const GoldStandard = () => {
  return (
    <>
      <Post date={"2/11/2026"}>
        <ReactMarkdown rehypePlugins={[[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]]}>{content}</ReactMarkdown>
      </Post>
    </>
  )
}

export default GoldStandard
