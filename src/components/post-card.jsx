import React from "react";

import PostTextBox from "../common/post-textbox";
import Button from "../common/button";

import '../styles/post-card.css';
import '../styles/heading-styles.css';
import dotsHorizontal from '../static/dots-horizontal.svg';
import chatBubble from '../static/chat-bubble.svg';

const PostCard = ({post, launchAuthFlow, onCardClick}) => {

  const getPostHeader = () => {
    return (
      post?.id ?
      <div className="post-card-user-header">
        <img src={post?.user?.profile_pic} alt="profile pic" className="profile-pic"/>
        <div className="user-details">
          <div className="heading_16px_500">{post?.user?.name}</div>
          <div className="subheading_14px_500">
            {post?.time_posted}{post?.isEdited ? " • Edited" : ""}
          </div>
        </div>
        <img className="svg-icon" src={dotsHorizontal} alt="" />
      </div> :
      <div className="heading_18px_500" style={{textAlign: "start"}}>Create Post</div>
    );
  }

  const getPostFooter = () => {
    return (
      post?.id ? 
      <div className="post-comments">
        <img className="svg-icon" src={chatBubble} alt="chat bubble" />
        <span className="subheading_14px_500">{post?.comments?.length} comments</span>
      </div> :
      <div className="post-button-container">
        <Button 
          label={"Post"} 
          onClick={launchAuthFlow} />
      </div>
    );
  }

  return (
    <div 
      className="post-card-container"
      onClick={() => post?.body && onCardClick()}
      style={{cursor: `${post?.body ? "pointer" : ""}`}}>
      {getPostHeader()}
      <PostTextBox emote={post?.emote} body={post?.body} onPostChange={(e) => {}} />
      {getPostFooter()}
    </div>
  );
}

export default PostCard;
