//Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from './ApprovalCard';

//Create a react component
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning</h4>
          Are you sure you want to do it?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Sam"
          timeAgo="Today at 4:45pm"
          comments="Nice blog post"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Alex"
          timeAgo="Today at 2:00am"
          comments="Amazing"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Jane"
          timeAgo="Yesterday at 5:00pm"
          comments="Good stuff"
        />
      </ApprovalCard>
    </div>
  );
};

//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
