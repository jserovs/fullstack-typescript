export enum Gender {
  male = "male",
  female = "female",
}

export interface Patient {
  id: String;
  name: String;
  dateOfBirth: String;
  ssn: String;
  gender: Gender;
  occupation: String;
}

export type PatientData = Pick<Patient, "id" | "name" | "dateOfBirth" | "gender" | "occupation" >;
