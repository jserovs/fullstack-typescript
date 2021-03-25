import React from "react";
import { Card, Icon, List } from "semantic-ui-react";
import { Diagnose, HospitalEntry } from "../types";

const Hospital: React.FC<{
  entry: HospitalEntry;
  diagnoses: { [id: string]: Diagnose };
}> = ({ entry, diagnoses }) => {
  return (
    <Card fluid color="red">
      <p>
        {entry.date} <Icon name="hospital outline" size="large" />
      </p>
      <p>{entry.description}</p>
      {entry.diagnosisCodes && (
        <List as="ul">
          {Object.values(entry.diagnosisCodes).map((code) => (
            <List.Item key={code} as="li">
              {code} {diagnoses[code].name}
            </List.Item>
          ))}
        </List>
      )}
    </Card>
  );
};

export default Hospital;
