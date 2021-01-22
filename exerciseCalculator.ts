interface result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: String;
  target: number;
  average: number;
}

function calculateExercises(array: Array<number>, target: number): result {
  const sum: number = array.reduce((a, b) => a + b, 0);
  const sucess: boolean = sum / array.length > target ? true : false;

  var rating: number = 0;
  if (sucess) {
    rating = 3;
  } else if (sum / array.length > 1) {
    rating = 2;
  } else {
    rating = 1;
  }

  var descr: String = "";
  switch (rating) {
    case 3:
      descr = "You are ok";
      break;
    case 2:
      descr = "not too bad but could be better";
      break;
    case 1:
      descr = "be better next time";
      break;
    default:
      descr = "total 0";
      break;
  }

  return {
    periodLength: array.length,
    trainingDays: array.filter((element: number) => {
      element > 0;
    }).length,
    success: sucess,
    rating: rating,
    ratingDescription: descr,
    target: target,
    average: sum / array.length,
  };
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
