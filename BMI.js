function calculate() {
let cannang=Number(document.getElementById("weight").value);
let chieucao=Number(document.getElementById("height").value);
let bmi = cannang/((chieucao)*(chieucao));

console.log(cannang);
console.log(chieucao);
console.log(bmi);

let abcd;

    if (bmi > 30) {
        abcd="Obese";
    }else if(bmi > 25) {
        abcd="Overweight";
    }else if (bmi > 18.5){
        abcd="Normal";
    }else{
        abcd="Underweight";
    }
console.log(ketluan);


    document.getElementById("ketluan").innerHTML=abcd;


}