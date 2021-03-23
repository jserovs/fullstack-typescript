// import patientData from "../data/patients.json";
import patients from "../misc/patients"
import { Patient, PatientData } from "../types/Patient";
import { toPatientData } from "../utils/PatientUtils";

// const patients: Array<Patient> = patientData as Array<Patient>;

const getAll = (): Array<Patient> => {
  return patients;
};

const getPatients = (): PatientData[] => {
  return patients.map(( {id, name, dateOfBirth, gender, occupation}) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

const addPatient = (input: Patient): PatientData => {
  const patient: Patient = toPatientData(input);
  patients.push(patient);
  const res: PatientData = patient;
  console.log("added");
  return res;
};

const getPatient = (id:string): Patient | undefined=> {
  var patient = patients.find((element) => element.id === id);

  if (patient!== undefined) {
    // patient.entries = [];
    return patient;
  }
  
  return undefined;

};

export default { getAll, getPatients, addPatient, getPatient };
