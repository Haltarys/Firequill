import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from './firebase';

import ChatRoom from './ChatRoom';
import SignIn from './SignIn';
import SignOut from './SignOut';

import './App.css';

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <div className="app-header">
          <h1>
            Firequill <img src="/favicon.png" alt="" />
          </h1>
        </div>
        {user && (
          <div className="user-header">
            <SignOut />
            <span>{user.displayName}</span>
            <img src={user.photoURL} alt="" />
          </div>
        )}
      </header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
};

export default App;
