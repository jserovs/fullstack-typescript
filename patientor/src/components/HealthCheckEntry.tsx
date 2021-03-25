import React from "react";
import { Card, Icon, List } from "semantic-ui-react";
import { Diagnose, HealthCheckEntry } from "../types";
import HealthRatingBar from "./HealthRatingBar";

const HealthCheck: React.FC<{
  entry: HealthCheckEntry;
  diagnoses: { [id: string]: Diagnose };
}> = ({ entry, diagnoses }) => {
  return (
    <Card fluid color='yellow'>
      <p>{entry.date} <Icon name='medrt' size='large' /></p>
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
      <HealthRatingBar rating={entry.healthCheckRating} showText={false} />
    </Card>
  );
};

export default HealthCheck;
