import React from "react";

const commentsData = [
  {
    name: "vamsi",
    text: "sdhifihiufhwiuhf",
    replies: [],
  },
  {
    name: "vamsi",
    text: "sdhifihiufhwiuhf",
    replies: [
      {
        name: "vamsi",
        text: "sdhifihiufhwiuhf",
        replies: [],
      },
      {
        name: "vamsi",
        text: "sdhifihiufhwiuhf",
        replies: [
          {
            name: "vamsi",
            text: "sdhifihiufhwiuhf",
            replies: [
              {
                name: "vamsi",
                text: "sdhifihiufhwiuhf",
                replies: [
                  {
                    name: "vamsi",
                    text: "sdhifihiufhwiuhf",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrBp4rAadRiXmk6NWl3redkvGJgWGDkBT4vA&s"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
       ////Reccersive///
const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div  key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
 
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
