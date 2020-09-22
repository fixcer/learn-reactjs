import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './components/CommentDetail';
import ApprovalDetail from './components/ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalDetail>
        <CommentDetail
          avatar={faker.image.avatar()}
          author={faker.name.firstName()}
          content={faker.lorem.sentence()}
          date={faker.date.recent()}
        />
      </ApprovalDetail>
      <ApprovalDetail>
        <CommentDetail
          avatar={faker.image.avatar()}
          author={faker.name.firstName()}
          content={faker.lorem.sentence()}
          date={faker.date.recent()}
        />
      </ApprovalDetail>
      <ApprovalDetail>
        <CommentDetail
          avatar={faker.image.avatar()}
          author={faker.name.firstName()}
          content={faker.lorem.sentence()}
          date={faker.date.recent()}
        />
      </ApprovalDetail>
      <ApprovalDetail>Are you ok?</ApprovalDetail>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
