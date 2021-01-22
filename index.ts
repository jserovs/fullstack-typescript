import express from "express";
import { calculateBmi } from "./calculateBmi";
import {result, calculateExercises} from "./exerciseCalculator"
const app = express();

app.use(express.json());

app.get("/hello", (_request: express.Request, response: express.Response) => {
  response.send("Hello Full Stack!");
});

interface BmiResponse {
  weight: number;
  height: number;
  bmi: String;
}

app.get("/bmi", (request: express.Request, response: express.Response) => {
  const height: number = Number(request.query.height);
  const weight: number = Number(request.query.weight);

  if (isNaN(height) || isNaN(weight)) {
    response.send({ error: "malformatted parameters" });
    return;
  }

  const res: BmiResponse = {
    weight: weight,
    height: height,
    bmi: calculateBmi(height, weight),
  };

  response.send(res);
});

app.post(
  "/exercises",
  (request: express.Request, response: express.Response) => {

    if (request.body.target === undefined || request.body.daily_exercises === undefined) {
        response.send({ error: "parameters missing" });
        return;
    }

    const target: number = Number(request.body.target);
          
    if (!Array.isArray(request.body.daily_exercises) || request.body.daily_exercises.some(isNaN) || isNaN(target) ) {
        response.send({ error: "malformatted parameters" });
        return;
    }

    const excercises: Array<number> = request.body.daily_exercises;
  
    const res:result = calculateExercises(excercises, target);    

    response.send(res);
  },
);

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
