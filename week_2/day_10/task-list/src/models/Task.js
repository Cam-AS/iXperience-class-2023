export class Task {
  constructor(id, name, complete) {
    this.id = id;
    this.name = name;
    this.complete = complete;
  }

  static fromJson(json) {
    return new Task(json.id, json.name, json.complete);
  }
}
