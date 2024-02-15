function gradeCalculator(score){
    let grade = null;
    if (score >= 90) {
        grade = 'A';
        console.log('Grade: ' + grade);
    } else if (score >= 80 && score <= 89){
        grade = 'B';
        console.log('Grade: ' + grade);
    } else if (score >= 70 && score <= 79){
        grade = 'C';
        console.log('Grade: ' + grade);
    } else if (score >= 60 && score <= 69){
        grade = 'D';
        console.log('Grade: ' + grade);
    } else {
        grade = 'F';
        console.log('Grade: ' + grade);
    }
}

gradeCalculator(59);