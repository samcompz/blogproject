import React from "react";
import Category from "./blog post/Category";
import Posts from "./blog post/Posts";
import PostPage from "./blog post/VanillaPage";

function Home() {

  return(
    <>
          <Category />
          <Posts />
     </>
  );
}

export default Home;