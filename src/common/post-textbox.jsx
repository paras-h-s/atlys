import React, { useState, useEffect } from 'react';

import '../styles/post-textbox.css';

const PostTextBox = ({emote, body, onPostChange}) => {
  const [value, setValue] = useState(body ? body : "");

  const resizeHeight = (target) => {
    target.style.height = 'auto';
    target.style.height = (target.scrollHeight) + 'px';
  }

  const handleChange = (e) => {
    setValue(e.target.value);
    onPostChange(e);
  }

  const autoGrow = () => {
    var ts = document.getElementsByTagName('textarea');
    for (var i in Object.keys(ts)){
      resizeHeight(ts[i]);
    }
  }

  useEffect(() => {
    if (body) {
      autoGrow();
    }
  }, []);

  return (
    <div className="post-text-wrapper">
      <span className="post-emote">{emote ? emote : '💬'}</span>
      <textarea
        className="post-textbox"
        placeholder="How are you feeling today?"
        value={value}
        onChange={handleChange}
        readOnly={body ? true : false}
        onKeyUp={e => resizeHeight(e?.target)} />
    </div>
  );
}

export default PostTextBox;