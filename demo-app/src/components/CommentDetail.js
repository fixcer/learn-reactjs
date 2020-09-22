import React from 'react';

const CommentDetail = ({ avatar, author, content, date }) => {
  return (
    <div className="comment">
      <a className="avatar" href="/">
        <img alt="avatar" src={avatar} />
      </a>
      <div className="content">
        <a className="author" href="/">
          {author}
        </a>
        <div className="metadata">
          <span className="date">{date.toString()}</span>
        </div>
        <div className="text">{content}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
