import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { Card, Header, Icon} from "semantic-ui-react";
import { apiBaseUrl } from "../constants";
import { storeExtendedPatientInfo, useStateValue } from "../state";
import { Diagnose, Entry, Patient } from "../types";
import OccupationalHealthCare from "./OccupationalHealthCareEntry";
import Hospital from "./HospitalEntry";
import HealthCheck from "./HealthCheckEntry";


function PatientInfo() {
  const { id } = useParams<{ id: string }>();

  const [{ patients, diagnoses }, dispatch] = useStateValue();

  const patient: Patient = patients[id];
  

  React.useEffect(() => {
    const extendPatientInfo = async () => {
      try {
        const { data: patientFromApi } = await axios.get<Patient>(
          `${apiBaseUrl}/patients/${id}`
        );

        // enrich entry data with diagnose data

        // dispatch({ type: "EXTEND_PATIENT_INFO", payload:/patientListFromApi });
        dispatch(storeExtendedPatientInfo(patientFromApi));
      } catch (e) {
        console.error(e);
      }
    };

    if (patient !== undefined && patient.ssn === undefined) {
      extendPatientInfo();
      // console.log(diagnoses['S62.5'])
    }
  }, [dispatch]);

  if (patient === undefined) {
    return <div>loading</div>;
  } else {
    return (
      <div>
        <Header as="h2">
          {patient.name}{" "}
          <Icon name={patient.gender === "male" ? "mars" : "venus"} />
        </Header>
        <p>ssn: {patient.ssn}</p>
        <p>occupation : {patient.occupation}</p>
        {patient.entries && patient.entries.length > 0 && (
          <Card.Group>
            <Header size="small">Entries</Header>
            {Object.values(patient.entries).map((entry: Entry) => (
                <EntryDetails entry={entry} diagnoses={diagnoses}/>
            ))}
          </Card.Group>
        )}
      </div>
    );
  }
}

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const EntryDetails: React.FC <{entry: Entry,  diagnoses: { [id: string]: Diagnose }}> = ({entry, diagnoses}) => {
  switch (entry.type) {
    case "HealthCheck":
      return <HealthCheck entry={entry} diagnoses={diagnoses}/>
      case "Hospital":
      return <Hospital entry={entry} diagnoses={diagnoses}/>
      case "OccupationalHealthcare":
      return <OccupationalHealthCare entry={entry} diagnoses={diagnoses}/>
  default:
    return <p>null</p>
  }
}

export default PatientInfo;
