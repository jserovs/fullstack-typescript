import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { Header, Icon, List } from "semantic-ui-react";
import { apiBaseUrl } from "../constants";
import { storeExtendedPatientInfo, useStateValue } from "../state";
import { Entry, Patient } from "../types";

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
          <div>
            <Header size="small">Entries</Header>
            {Object.values(patient.entries).map((entry: Entry) => (
              <div key={entry.id}>
                <p>
                  {entry.date} <i>{entry.description}</i>
                </p>
                {entry.diagnosisCodes && (
                  <List as="ul">
                    {Object.values(entry.diagnosisCodes).map((code) => (
                      <List.Item key={code} as="li">
                        {code} {diagnoses[code].name}
                      </List.Item>
                    ))}
                  </List>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default PatientInfo;
