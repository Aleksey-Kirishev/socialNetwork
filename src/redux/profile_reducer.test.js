import profileReducer, {addPostActionCreator, deletePost} from "./profile_reducer";
import React from "react";

let state = {
    posts: [
        {id: 1, comment: 'Hi, I am here, and you?', likesCount: 85, commentsCount: 2},
        {id: 2, comment: 'Hi, me too:)', likesCount: 78, commentsCount: 6},
        {id: 3, comment: 'How did you find the site?', likesCount: 99, commentsCount: 7},
        {id: 4, comment: 'I was using Google Chrome', likesCount: 121, commentsCount: 16},
        {id: 5, comment: 'I was using Yandex', likesCount: 77, commentsCount: 14},
    ]
}


test('new posts length should be incremented', () => {
  //1.test data
    let action = addPostActionCreator("new Post");
  //2. action
  let newState = profileReducer(state,action);
  //3. expectation
    expect(newState.posts.length).toBe(6);
});

test('new posts comment should be correct', () => {
  //1.test data
    let action = addPostActionCreator("new Post");
  //2. action
  let newState = profileReducer(state,action);
  //3. expectation
    expect(newState.posts[5].comment).toBe("new Post");
});

test('posts length should be decrement after deleting', () => {
  //1.test data
    let action = deletePost(1);
  //2. action
  let newState = profileReducer(state,action);
  //3. expectation
    expect(newState.posts.length).toBe(4);
});

test(`length shouldn't decrement if id is incorrect`, () => {
  //1.test data
    let action = deletePost(1000);
  //2. action
  let newState = profileReducer(state,action);
  //3. expectation
    expect(newState.posts.length).toBe(5);
});

