function calculateGrade(marks){
    // Determining grades based on marks provided
    let grade;
    if (marks > 79){
        grade = 'A';
    } else if (marks >= 60 && marks <= 79){
        grade = 'B';
    } else if (marks >= 50 && marks <= 59){
        grade = 'C';
    } else if (marks >= 40 && marks <= 49){
        grade = 'D';
    } else {
        grade = 'E';
    }

    // Output the grade
    console.log(`Marks: ${marks} => Grade: ${grade}`);

    // Return the grade instead of printing it (if you want to use the grade value elsewhere)
    return grade;
}



calculateGrade(85)