import { v4 as uuidv4 } from 'uuid';
import { Status } from './status';

export default class Task {
  id: string;

  title: string;

  status: Status;

  constructor(title: string, status: Status) {
    this.title = title;
    this.status = status;
    this.id = uuidv4();
  }
}
