import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useRef, useState } from 'react';

import { firebase, auth, firestore } from './firebase';

import ChatMessage from './ChatMessage';

const ChatRoom = () => {
  const messageRef = firestore.collection('messages');
  const query = messageRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');

  const bottomScroll = useRef();

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messageRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue('');

    bottomScroll.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} msg={msg} />)}
        <span ref={bottomScroll} />
      </main>
      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Type in something..."
        />
        <button type="submit" disabled={!formValue}>
          Send
        </button>
      </form>
    </>
  );
};

export default ChatRoom;
