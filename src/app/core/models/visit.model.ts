import {Patient} from './patient.model';

export class Visit {
  id: number;
  visitDate: Date;
  notes: string;
  prescriptions: string;
  patient: Patient;


  constructor(id?: number, visitDate?: Date, notes?: string, prescriptions?: string, patient?: Patient) {
    this.id = id;
    this.visitDate = visitDate;
    this.notes = notes;
    this.patient = patient;
  }
}
