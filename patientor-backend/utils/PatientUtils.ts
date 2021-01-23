import { Gender, Patient } from "../types/Patient";
const crypto = require("crypto");

const isGender = (param: any): param is Gender => {
    return Object.values(Gender).includes(param);
  };
  
  const parseGender = (visibility: any): Gender => {
    if (!visibility || !isGender(visibility)) {
        throw new Error('Incorrect or missing visibility: ' + visibility);
    }
    return visibility;
  };

const toPatientData = (object: any) : Patient => {
    return {
        id: crypto.randomBytes(20).toString("hex"),
        name: object.name,
        dateOfBirth: object.dateOfBirth,
        ssn: object.ssn,
        gender: parseGender(object.gender),
        occupation: object.occupation,
    };
};

export { toPatientData }