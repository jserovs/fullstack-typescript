import patientData from "../data/patients.json";
import { Patient, PatientData } from "../types/Patient";
import { toPatientData } from "../utils/PatientUtils";

const patients: Array<Patient> = patientData as Array<Patient>;

const getAll = () => {
  return patients;
};

const getPatients = (): PatientData[] => {
  return patients;
};

const addPatient = (input: object): PatientData => {
  const patient: Patient = toPatientData(input);
  patients.push(patient);
  const res: PatientData = patient;
  console.log("added");
  return res;
};

export default { getAll, getPatients, addPatient };
