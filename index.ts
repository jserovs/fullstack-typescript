import express from "express";
import calculateBmi from "./calculateBmi"
const app = express();

app.get("/hello", (_request: express.Request, response: express.Response) => {
  response.send("Hello Full Stack!");
});

interface BmiResponse {
  weight: number;
  height: number;
  bmi: String;
}

app.get("/bmi", (request: express.Request, response: express.Response) => {
  
  const height:number = Number(request.query.height)
  const weight:number = Number(request.query.weight)

  if ( isNaN(height) || isNaN(weight)) {
    response.send({error: "malformatted parameters"});
    return;
  }

  const res: BmiResponse = {
    weight: weight,
    height: height,
    bmi: calculateBmi(height, weight)
  };
 

  response.send(res);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
