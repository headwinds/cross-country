import React from "react";

export interface ArticleProps {
  title: string;
  content: string;
  author: string;
  date: string;
}

const Article: React.FC<ArticleProps> = ({ title, content, author, date }) => {
  return (
    <article>
      <h1>{title}</h1>
      <p>{content}</p>
      <footer>
        <small>
          Written by {author} on {date}
        </small>
      </footer>
    </article>
  );
};

export default Article;
