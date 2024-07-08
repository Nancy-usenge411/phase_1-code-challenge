function calculateGrade(Grade){
    let marks = (0 -100)

 //Determining grades based on marks provided
    if (marks > 79){
        return 'Grade A';
    }else if (marks >= 60 && marks <=79){
        return 'Grade B';
    }else if(marks>=50 && marks<= 59){
        return 'Grade C';
    }else if (marks >=40 && marks <=49){
        return 'Grade D';
    }else{
        return 'Grade E';
    }

}