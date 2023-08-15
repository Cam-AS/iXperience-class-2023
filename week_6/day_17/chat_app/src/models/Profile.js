export class Profile {
  // accept 4 arguments
  // constructor(id, name, surname, imageUrl) {}
  // accept 1 argument as an Object
  constructor({ id, name, surname, imageUrl }) {
    // This is the userId
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.imageUrl = imageUrl;
  }

  toJson() {
    return {
      name: this.name,
      surname: this.surname,
      imageUrl: this.imageUrl,
    };
  }

  static fromFirebase(docSnap) {
    const data = docSnap.data();

    return new Profile({
      id: docSnap.id,
      name: data.name,
      surname: data.surname,
      imageUrl: data.imageUrl,
    });
  }
}
