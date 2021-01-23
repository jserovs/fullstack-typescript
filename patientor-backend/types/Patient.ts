export enum Gender {
  male = "male",
  female = "female",
}

export interface Patient {
  id?: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
}

export type PatientData = Pick<Patient, "id" | "name" | "dateOfBirth" | "gender" | "occupation" >;
