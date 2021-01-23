import express from 'express';
import patientService from '../services/patientService';
import { PatientData } from '../types/Patient';

const router = express.Router();

router.get("", (_request: express.Request, response: express.Response)=> {

    response.send(patientService.getPatients());
    return;

});

router.post('/', (request: express.Request, response: express.Response) => {

    const patient:PatientData = patientService.addPatient(request.body);
    response.send(patient);
    return;

});

export default router;