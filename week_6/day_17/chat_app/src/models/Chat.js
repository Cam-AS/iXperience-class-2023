export class Chat {
  constructor({ id, users }) {
    // unique id from firebase
    // array with 2 users id's
    this.id = id;
    this.users = users;
  }

  toJson() {
    return {
      users: this.users,
    };
  }

  static fromFirebase(docSnap) {
    const data = docSnap.data();

    return new Chat({
      id: docSnap.id,
      users: data.users,
    });
  }
}
