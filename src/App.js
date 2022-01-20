import React, { useState } from "react";
import PostForm from "./components/PostForm";
// import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
// import MyButton from "./components/UI/button/MyButton";
// import MyInput from "./components/UI/input/MyInput";
// import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
import "./styles/PostItem.css";
// import Counter from "./components/Counter";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Descripton" },
    { id: 2, title: "JavaScript 2", body: "Descripton" },
    { id: 3, title: "JavaScript 3", body: "Descripton" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length ? (
        <PostList remove={removePost} posts={posts} title="Todo-list" />
      ) : (
        <h1 style={{ textAlign: "center" }}>Empty list</h1>
      )}
    </div>
  );
}

export default App;
