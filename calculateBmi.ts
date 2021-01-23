export function calculateBmi(height:number, weight:number):string {

    const res:number= weight*10000 / (height*height);

    if (res < 18.5) {
        return 'Underweight';
    }
    if (res >= 18.5 && res < 25) {
        return 'Normal (healthy weight)';
    }
    if (res > 25) {
        return 'Overweight';
    }

    return '';

}

const height = Number(process.argv[2]);
const weight = Number(process.argv[3]);

console.log(calculateBmi(height, weight));