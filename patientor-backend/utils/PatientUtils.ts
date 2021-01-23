/* eslint-disable @typescript-eslint/no-explicit-any */
import { Gender, Patient } from "../types/Patient";
import crypto from "crypto";

const isGender = (param: any): param is Gender => {
  const gen = Object.values(Gender).includes(param);
    return gen;
  };
  
  const parseGender = (gender: string): Gender => {
    if (!gender || !isGender(gender)) {
        throw new Error('Incorrect or missing visibility: ${gender}');
    }
    return gender;
  };

const toPatientData = (object: Patient) : Patient => {
    return {
        id: crypto.randomBytes(20).toString("hex"),
        name: object.name,
        dateOfBirth: object.dateOfBirth,
        ssn: object.ssn,
        gender: parseGender(object.gender),
        occupation: object.occupation,
    };
};

export { toPatientData };