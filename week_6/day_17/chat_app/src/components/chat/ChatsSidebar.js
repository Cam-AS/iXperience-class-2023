import React from 'react';

export default function ChatsSidebar({
  user,
  chats,
  profiles,
  onChatSelected,
  chat: selectedChat,
}) {
  function getOtherUserProfile(chat) {
    const otherProfileId = chat.users.find((userId) => userId !== user.uid);
    return profiles.find((profile) => otherProfileId == profile.id);
  }

  return (
    <div className="chats-sidebar">
      {chats.map((chat) => {
        return (
          <div
            key={chat.id}
            className="profile-row"
            onClick={() => onChatSelected(chat)}
            style={{
              cursor: 'pointer',
              fontWeight: selectedChat?.id == chat.id ? 'bold' : '',
            }}
          >
            <div className="profile-holder">
              <img src={getOtherUserProfile(chat).imageUrl}></img>
              <div className="ms-3">
                {getOtherUserProfile(chat).name + ' '}
                {getOtherUserProfile(chat).surname}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
