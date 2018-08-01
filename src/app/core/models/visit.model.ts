import {Patient} from './patient.model';

export class Visit {
  id: number;
  visitDate: Date;
  notes: string;
  recommendations: string;
  prescriptions: string;
  completed: boolean;
  patient: Patient;


  constructor(
    id?: number,
    visitDate?: Date,
    notes?: string,
    recommendations?: string,
    prescriptions?: string,
    completed?: boolean,
    patient?: Patient
  ) {
    this.id = id;
    this.visitDate = visitDate;
    this.notes = notes;
    this.recommendations = recommendations;
    this.prescriptions = prescriptions;
    this.completed = completed;
    this.patient = patient;
  }
}
