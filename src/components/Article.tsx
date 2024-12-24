import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./Article.css";

type ArticleParams = {
  [key: string]: string | undefined;
  articleId?: string;
};

const Article: React.FC = () => {
  const { articleId } = useParams<ArticleParams>();
  const [content, setContent] = useState("");

  useEffect(() => {
    if (articleId) {
      fetch(`/articles/${articleId}.md`)
        .then((response) => response.text())
        .then((text) => setContent(text));
    }
  }, [articleId]);

  return (
    <>
    <a href="/">Back to all articles</a>
    <div className="article-container">
      <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
    </div>
    </>
  );
};

export default Article;