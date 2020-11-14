import { Status } from './status';

export default class Task {
  title: string;

  status: Status;

  constructor(title: string, status: Status) {
    this.title = title;
    this.status = status;
  }
}
