import {
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
} from 'firebase/firestore';

import { db } from '../firebase/firebase';
import { Chat } from '../models/Chat';

class ChatService {
  constructor() {
    this.collection = 'chats';
  }

  async createChat(chat) {
    const collectionRef = collection(db, this.collection);
    // addDoc to create a new chat
    const docRef = await addDoc(collectionRef, chat.toJson());
    chat.id = docRef.id;
    return chat;
  }

  subscribeToUserChats(user, onChatsUpdate) {
    const collectionRef = collection(db, this.collection);
    const q = new query(
      collectionRef,
      where('users', 'array-contains', user.uid)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const chats = [];
      querySnapshot.forEach((doc) => {
        chats.push(Chat.fromFirebase(doc));
      });
      onChatsUpdate(chats);
    });

    return unsubscribe;
  }
}

const service = new ChatService();
export default service;
