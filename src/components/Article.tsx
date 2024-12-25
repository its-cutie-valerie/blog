import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { hopscotch } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCopy } from "react-icons/fa";

type ArticleParams = {
  [key: string]: string | undefined;
  articleId?: string;
};

const Article: React.FC = () => {
  const { articleId } = useParams<ArticleParams>();
  const [content, setContent] = useState("");
  const [copied, setCopied] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (articleId) {
      fetch(`/articles/${articleId}.md`)
        .then((response) => response.text())
        .then((text) => setContent(text));
    }
  }, [articleId]);

  const handleCopy = (text: string) => {
    setCopied(text);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setCopied(null);
    }, 2000);
  };

  return (
    <>
      <a href="/">Back to all articles</a>
      <div className="article-container">
        <ReactMarkdown
          children={content}
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <div className="code-block-container" style={{ backgroundColor: '#200116' }}> {/* Container for copy button */}
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    style={hopscotch}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                  <CopyToClipboard text={String(children)} onCopy={() => handleCopy(String(children))}>
                    <button className="copy-button">
                      {<FaCopy />}
                    </button>
                  </CopyToClipboard>
                </div>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
        {copied && <div className="copy-message">Copied to clipboard!</div>}
      </div>
    </>
  );
};

export default Article;