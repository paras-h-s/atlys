import React, {useState} from 'react';
import './App.css';
import SigninPage from './components/signin-page';
import Feed from './components/feed';

const App = () => {
  const [renderFeed, setRenderFeed] = useState(false);

  const handleLogin = () => {
    setRenderFeed(true);
  }

  return (
    <div className="App">
      {renderFeed ? <Feed /> : <SigninPage onLogin={handleLogin} />}
    </div>
  );
}

export default App;
