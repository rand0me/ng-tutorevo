export class Meeting {
  title: string;
  speaker: string;
  date: Date;
  active: boolean;

  constructor({title = '', speaker = '', date = new Date(), active = true}) {
    this.title = title;
    this.speaker = speaker;
    this.date = date;
    this.active = active;
  }

}
