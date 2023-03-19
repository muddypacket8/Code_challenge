let grade=document.getElementById('grade')
let speed=document.getElementById('speed')
let salary=document.getElementById('salary')


grade.addEventListener('click', (e)=>{
e.preventDefault()
let inputGrade=parseInt(document.getElementById('input-grade').value)
console.log(inputGrade)
let finalOutput

let marks = prompt("Please enter the student's marks (between 0 and 100): ");

marks = parseInt(marks);

if (marks >= 80) {
  grade = 'A';
} else if (marks >= 60) {
  grade = 'B';
} else if (marks >= 50) {
  grade = 'C';
} else if (marks >= 40) {
  grade = 'D';
} else {
  grade = 'E';
}

console.log("The student's grade is " + grade);
finalOutput='assign your final output to this variable'
document.getElementById('marks-id').append(finalOutput)

})
speed.addEventListener('click', (e)=>{
    e.preventDefault()
    let inputSpeed=parseInt(document.getElementById('input-speed').value)
    console.log(inputSpeed)
    let finalOutput
    const speed = 80;
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    
    if (speed <= speedLimit) {
  console.log("Ok");
} else {
  const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
  console.log(`You have been given ${demeritPoints} demerit points.`);
}
finalOutput='assign your final output to this variable'
    document.getElementById('speed-id').append(finalOutput)

})
salary.addEventListener('click', (e)=>{
        e.preventDefault()
        let inputSalary=parseInt(document.getElementById('input-salary').value)
        console.log(inputSalary)
let finalOutput
function netsalary(basic_salary, banefits){
    return netSalary =basic_salary - Payee - NHIF-education -NSSF-deduction
}
function findPayee (basic_salary){
    let Payee =0;
     if (basic_salary <= 288000){
        Payee =(10/100)* basic_salary;
    }
    else if (basic_salary >= 288001 && basic_salary <= 388000){
        Payee = (25/100) * basic_salary;
    }
    else {
        Payee = (30/100) * basic_salary;
    }
    return Payee
}

let deduction;

if (grossPay <= 5999) {
  deduction = 150;
} else if (grossPay <= 7999) {
  deduction = 300;
} else if (grossPay <= 11999) {
  deduction = 400;
} else if (grossPay <= 14999) {
  deduction = 500;
} else if (grossPay <= 19999) {
  deduction = 600;
} else if (grossPay <= 24999) {
  deduction = 750;
} else if (grossPay <= 29999) {
  deduction = 850;
} else if (grossPay <= 34999) {
  deduction = 900;
} else if (grossPay <= 39999) {
  deduction = 950;
} else if (grossPay <= 44999) {
  deduction = 1000;
} else if (grossPay <= 49999) {
  deduction = 1100;
} else if (grossPay <= 59999) {
  deduction = 1200;
} else if (grossPay <= 69999) {
  deduction = 1300;
} else if (grossPay <= 79999) {
  deduction = 1400;
} else if (grossPay <= 89999) {
  deduction = 1500;
} else if (grossPay <= 99999) {
  deduction = 1600;
} else {
  deduction = 1700;
}
//it is used to return the gross pay

function calculateNSSFContribution(grossPay, payFrequency) {
    const employeeContribution = 0.05 * grossPay;
    const employerContribution = 0.05 * grossPay;
    let maxContribution;
  
    switch (payFrequency) {
      case "monthly":
        maxContribution = 400;
        break;
      case "biweekly":
        maxContribution = 200;
        break;
      case "weekly":
        maxContribution = 100;
        break;
      default:
        throw new Error("Invalid pay frequency");
    }
  
    const totalContribution = employeeContribution + employerContribution;
    return totalContribution > maxContribution ? maxContribution : totalContribution;
  }

  const grossPay = 20000;
const payFrequency = "monthly";

const nssfContribution = calculateNSSFContribution(grossPay, payFrequency);

console.log(nssfContribution);
finalOutput ='assign your final output to this variable'
document.getElementById('salary-id').append(finalOutput)
        
})