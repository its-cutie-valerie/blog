// src/components/Article.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ArticleParams {
  articleId: string;
}

const Article: React.FC = () => {
  const { articleId } = useParams() as ArticleParams;
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    // Fetch the Markdown content
    fetch(`/articles/${articleId}.md`)
      .then(response => response.text())
      .then(text => setContent(text));
  }, [articleId]);

  return (
    <div>
      <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
    </div>
  );
};

export default Article;