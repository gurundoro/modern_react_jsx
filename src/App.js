import React from "react";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

function App() {
  return (
    <>
      <div className="ui container comments">
        <ApprovalCard>
          <CommentDetail
            author="Simon"
            timeAgo="Yesterday at 9:00pm"
            comment="I suck"
            image={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author="Tara"
            timeAgo="Today at 1:00am"
            comment="I suck you"
            image={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author="Rhuwell"
            timeAgo="Now at 9:00am"
            comment="whoa"
            image={faker.image.avatar()}
          />
        </ApprovalCard>
      </div>
    </>
  );
}

export default App;
