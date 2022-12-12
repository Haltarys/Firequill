import { auth } from './firebase';

const ChatMessage = ({ msg }) => {
  const { uid, displayName: name } = auth.currentUser;

  const isSent = uid === msg.uid ? 'sent' : 'received';

  return isSent ? (
    <div className={`message sent`}>
      <p>{msg.text}</p>
    </div>
  ) : (
    <div className={`message received`}>
      <h3>{name}</h3>
      <img src={msg.photoURL} alt="" />
      <p>{msg.text}</p>
    </div>
  );
};

export default ChatMessage;
