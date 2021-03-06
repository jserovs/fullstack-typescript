export enum Gender {
  male = "male",
  female = "female",
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Entry {
}


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
