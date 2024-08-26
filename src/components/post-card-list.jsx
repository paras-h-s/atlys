import React from "react";

import PostCard from "./post-card";

import '../styles/post-card-list.css';

const PostCardList = ({posts, launchAuthFlow, onCardClick}) => {
  return (
    <div className="post-card-list-container">
      {posts.map(post => 
        <PostCard 
          key={post.id ? post.id : -1} 
          post={post} 
          launchAuthFlow={launchAuthFlow}
          onCardClick={onCardClick} />
      )}
    </div>
  );
}

export default PostCardList;