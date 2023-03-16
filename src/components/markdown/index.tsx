import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeKatex from 'rehype-katex';

type ConvertToMarkdownProps = {
  children: string;
};

function ConvertToMarkdown({ }: ConvertToMarkdownProps) {
  return (
    <ReactMarkdown
      children
      components={{
        code({ node, inline, className, style, child, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline ? (
            <SyntaxHighlighter
              child={String(child).replace(/\n$/, '')}
              style={oneDark}
              language={match ? match[1] : ''}
              PreTag="div"
              {...props}
            />
          ) : (
            <code className="font-semibold italic" {...props}>
              {child}
            </code>
          );
        }
      }}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeKatex]}
    />
  );
}

export default ConvertToMarkdown;
