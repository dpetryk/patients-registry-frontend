export class Note {
  id: number;
  note: string;
  noteDate: string;


  constructor(id?: number, note?: string, noteDate?: string) {
    this.id = id;
    this.note = note;
    this.noteDate = noteDate;
  }
}
