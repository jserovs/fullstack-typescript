import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'
import { Header, Icon } from 'semantic-ui-react';
import { apiBaseUrl } from '../constants';
import { useStateValue } from "../state";
import { Patient } from '../types';

function PatientInfo() {
    const { id } = useParams<{ id: string }>();

    const [{ patients }, dispatch] = useStateValue();
    const patient: Patient = patients[id];

    React.useEffect(() => {

        const extendPatientInfo = async () => {
            try {
                const { data: patientListFromApi } = await axios.get<Patient>(
                    `${apiBaseUrl}/patients/${id}`
                );
                dispatch({ type: "EXTEND_PATIENT_INFO", payload: patientListFromApi });
            } catch (e) {
                console.error(e);
            }
        };

        if (patient !== undefined && patient.ssn === undefined) {
            extendPatientInfo();
        }
        
    }, [dispatch]);

    if (patient === undefined) {
        return <div>loading</div>
    } else {
        return (
            <div>
                <Header as="h2">{patient.name} <Icon name={patient.gender === 'male' ? 'mars': 'venus'}/></Header>
                <p>ssn: {patient.ssn}</p>
                <p>occupation : {patient.occupation}</p>
            </div>
        )
    }
}

export default PatientInfo
