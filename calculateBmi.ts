function calculateBmi(height:number, weight:number):String {

    const res:number= weight*10000 / (height*height);

    if (res < 18.5) {
        return 'Underweight'
    }
    if (res >= 18.5 && res < 25) {
        return 'Normal (healthy weight)'
    }
    if (res > 25) {
        return 'Overweight'
    }

    return '';

}

const height: number = Number(process.argv[2])
const weight: number = Number(process.argv[3])

console.log(calculateBmi(height, weight));