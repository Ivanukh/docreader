import { useEffect, useState, } from 'react';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'



function Content() {
  const [content, setContent] = useState('');

  function loadMd() {
    fetch(window.location.origin + '/docs/test.md').
      then(r => r.text()).
      then(setContent).
      catch(console.log);
  }
  useEffect(loadMd, []);

  return <>
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
    >
      {content}
    </ReactMarkdown >
  </>
}

export default Content;
