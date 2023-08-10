export class Message {
  constructor({ id, message, chatId, fromId }) {
    this.id = id;
    this.message = message;
    this.chatId = chatId;
    this.fromId = fromId;
  }

  toJson() {
    return {
      message: this.message,
      chatId: this.chatId,
      fromId: this.fromId,
    };
  }

  static fromFirebase(docSnap) {
    const data = docSnap.data();

    return new Message({
      id: docSnap.id,
      message: data.message,
      chatId: data.chatId,
      fromId: data.fromId,
    });
  }
}
