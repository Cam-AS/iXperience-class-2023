import React, { useState, useEffect } from 'react';

import AvailableChats from './AvailableChats';
import ChatMessages from './ChatMessages';
import ChatsSidebar from './ChatsSidebar';

export default function ChatsPage() {
  return (
    <div>
      <AvailableChats />
      <ChatsSidebar />
      <ChatMessages />
    </div>
  );
}
