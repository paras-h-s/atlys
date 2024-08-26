import React, {useState} from "react";

import PostCardList from "./post-card-list";
import { posts } from "../static/data/data.js";
import withModal from "./modal-wrapper.jsx";
import SignupDialog from "./signup-dialog";
import LoginDialog from "./login-dialog.jsx";

import '../styles/feed.css';
import '../styles/heading-styles.css';

const Feed = () => {
  const [showModal, setShowModal] = useState(false);
  const [showLoginDialog, setShowLoginDialog] = useState(false);

  const AuthDialogModal = withModal(showLoginDialog ? LoginDialog : SignupDialog);

  const openModal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowLoginDialog(false);
    setShowModal(false);
  }

  return (
    <div className="feed">
      {showModal && 
        <AuthDialogModal 
          onClose={closeModal} 
          onShowLoginDialog={() => setShowLoginDialog(true)} 
          onShowSignupDialog={() =>  setShowLoginDialog(false)} />}
      <div className="heading_28px_500" style={{textAlign: "start"}}>Hello Jane</div>
      <div 
        className="subheading_16px_400" 
        style={{
          textAlign: "start",
          marginTop: "7px",
          marginBottom: "35px"}}>
        How are you doing today? Would you like to share something with the community 🤗
      </div>
      <PostCardList posts={posts} launchAuthFlow={openModal} onCardClick={openModal} />
    </div>
  );
}

export default Feed;