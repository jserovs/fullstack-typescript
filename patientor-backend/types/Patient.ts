import { Diagnose } from "../types/Diagnose";

export enum Gender {
  Male = "male",
  Female = "female",
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface

export interface SickLeaveEntry {
  startDate: string;
  endDate: string 
}

export interface DischargeEntry {
  date: string;
  criteria: string 
}

interface BaseEntry {
  id: string;
  description: string;
  date: string;
  specialist: string;
  diagnosisCodes?: Array<Diagnose['code']>;
}

export enum HealthCheckRating {
  "Healthy" = 0,
  "LowRisk" = 1,
  "HighRisk" = 2,
  "CriticalRisk" = 3
}

interface HealthCheckEntry extends BaseEntry {
 type: "HealthCheck";
  healthCheckRating: HealthCheckRating;
}

interface HospitalEntry extends BaseEntry{
  type: "Hospital";
  discharge: DischargeEntry;

}
interface OccupationalHealthCareEntry extends BaseEntry {
  type: "OccupationalHealthcare";
  employerName: string;
  sickLeave?: SickLeaveEntry;
}

export type Entry =
  | HospitalEntry
  | OccupationalHealthCareEntry
  | HealthCheckEntry;

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
  entries: Entry[];
}

export type PatientData = Pick<Patient, "id" | "name" | "dateOfBirth" | "gender" | "occupation" >;

export type PublicPatient = Omit<Patient, 'ssn' | 'entries' >;
