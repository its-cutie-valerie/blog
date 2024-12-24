// src/components/ArticleList.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

type ArticleListProps = Record<string, unknown>;

const ArticleList: React.FC<ArticleListProps> = () => {
  const [articles, setArticles] = useState<string[]>([]);

  useEffect(() => {
    // Fetch the list of articles (Markdown files) from the public folder
    fetch('/articles.json')
      .then(response => response.json())
      .then(data => setArticles(data));
  }, []);

  return (
    <div>
      <h1>Blog Articles</h1>
      <ul>
        {articles.slice().reverse().map(article => (
          <li key={article}>
            <Link to={`/article/${article.replace('.md', '')}`}>
              {article.replace('.md', '')}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;