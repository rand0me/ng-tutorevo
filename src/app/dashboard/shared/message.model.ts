export class Message {
  name: string;
  text: string;

  constructor({ name = '', text = '' }) {
    this.name = name;
    this.text = text;
  }
}