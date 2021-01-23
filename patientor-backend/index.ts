import express from "express";
import patientRouter from "./routes/patientRouter";
import diagnoseService from "./services/diagnoseService";

import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors());

app.get("/api/ping", (_request: express.Request, response: express.Response)=> {

    response.send("OK");
    return;
});


app.get("/api/diagnoses", (_request: express.Request, response: express.Response)=> {

    response.send(diagnoseService.getAll());
    return;

});


app.use('/api/patients', patientRouter);


const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
