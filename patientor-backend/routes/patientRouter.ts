import express from 'express';
import patientService from '../services/patientService';
import { PatientData } from '../types/Patient';

const router = express.Router();

router.get("", (_request: express.Request, response: express.Response)=> {

    response.send(patientService.getPatients());
    return;

});


router.get("/:id", (request: express.Request, response: express.Response)=> {
    
    if (request.params && request.params.id && typeof request.params.id === "string") {
    const id: string = request.params.id;
        const patient = patientService.getPatient(id);
        if (patient!== undefined) {
            response.send(patient);
        } else {
            response.status(404).send("Patient not found");
        }
        
    } else {
        response.status(400).send("ID malformed");
    }
    return;

});

router.post('/', (request: express.Request, response: express.Response) => {

    const patient:PatientData = patientService.addPatient(request.body);
    response.send(patient);
    return;

});

export default router;