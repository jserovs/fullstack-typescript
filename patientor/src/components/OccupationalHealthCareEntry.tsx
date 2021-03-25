import React from "react";
import { Card, Icon, List } from "semantic-ui-react";
import { Diagnose, OccupationalHealthCareEntry } from "../types";

const OccupationalHealthCare: React.FC<{
  entry: OccupationalHealthCareEntry;
  diagnoses: { [id: string]: Diagnose };
}> = ({ entry, diagnoses }) => {
  return (
    <Card fluid color='orange'>
      <p>{entry.date} <Icon name='caret square right' size='large' /></p>
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

export default OccupationalHealthCare;
