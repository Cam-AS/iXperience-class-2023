import React, { useState, useEffect } from 'react';

import './Chats.css';

import ProfileService from '../../services/profile.service';
import ChatService from '../../services/chat.service';

import AvailableChats from './AvailableChats';
import ChatMessages from './ChatMessages';
import ChatsSidebar from './ChatsSidebar';

export default function ChatsPage({ user }) {
  const [profiles, setProfiles] = useState([]);
  const [chats, setChats] = useState([]);
  const [chat, setChat] = useState(null);

  useEffect(() => {
    // fetch Profiles
    fetchProfiles();

    // subscribe to chats
    const unsubscribe = ChatService.subscribeToUserChats(user, (chats) => {
      setChats(chats);
    });

    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  async function fetchProfiles() {
    const profiles = await ProfileService.fetchProfiles();
    setProfiles(profiles);
  }

  return (
    <div className="container my-4">
      <h3>Chats: {user.email}</h3>

      <div>
        <AvailableChats profiles={profiles} user={user} chats={chats} />
      </div>

      <div className="row mt-5">
        <div className="col-4">
          <ChatsSidebar
            profiles={profiles}
            user={user}
            chat={chat}
            chats={chats}
            onChatSelected={(chat) => setChat(chat)}
          />
        </div>
        <div className="col-8">
          <ChatMessages user={user} chat={chat} />
        </div>
      </div>
    </div>
  );
}
