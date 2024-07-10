function calculateNetPay(basicSalary){
   const PAYE = calculatePAYE(basicSalary)
   const NHIF = calculateNHIF(basicSalary)
   const netSalary = basicSalary - PAYE - NHIF 
    
    console.log("PAYE: ",PAYE)
    console.log("---------------")
    console.log("NHIF: ",NHIF)
    console.log("---------------")
    console.log("Gross salary: ",basicSalary)
    console.log("---------------")
    console.log("Net salary: ",netSalary)
}

function calculatePAYE(basicSalary){
    if (basicSalary > 0 && basicSalary <= 24000){
        return basicSalary*10/100
     } else if(basicSalary >= 24001 && basicSalary <= 32333){
         return basicSalary*25/100
     }  else if(basicSalary >= 32334 && basicSalary <= 500000){
         return basicSalary*30/100
     }  else if(basicSalary >= 500001 && basicSalary <= 800000){
         return basicSalary*32.5/100
     }  else if(basicSalary > 800000){
         return basicSalary*35/100
     } else{
        return 0
     }
}

function calculateNHIF(basicSalary){
    if (basicSalary > 0 && basicSalary <= 5999){
        return 150
     } else if(basicSalary >= 6000 && basicSalary <= 7999){
         return 300
     }  else if(basicSalary >= 8000 && basicSalary <= 11999){
         return 400
     }  else if(basicSalary >= 12000 && basicSalary <= 14999){
         return 500
     }  else if(basicSalary >= 15000 && basicSalary <= 19999){
         return 600
     }  else if(basicSalary >= 20000 && basicSalary <= 24999){
        return 750
    }  else if(basicSalary >= 25000 && basicSalary <= 29999){
        return 850
    }  else if(basicSalary >= 30000&& basicSalary <= 34999){
        return 900
    }  else if(basicSalary >= 35000 && basicSalary <= 39999){
        return 950
    }  else if(basicSalary >= 40000 && basicSalary <= 44999){
        return 1000
    }  else if(basicSalary >= 45000 && basicSalary <= 49999){
        return 1100
    }  else if(basicSalary >= 50000 && basicSalary <= 59999){
        return 1200
    }  else if(basicSalary >= 60000 && basicSalary <= 69999){
        return 1300
    }  else if(basicSalary >= 70000 && basicSalary <= 79999){
        return 1400
    }  else if(basicSalary >= 80000 && basicSalary <= 89999){
        return 1500
    }  else if(basicSalary >= 90000 && basicSalary <= 99999){
        return 1600
    } else if(basicSalary >= 100000){
        return 1700
    } else {
        return 0
    }  
 
}

function nssfDeduction(monthlySalary,monthPay) {
    // let monthPay = parseFloat(prompt("Enter  year of payment for monthly salary"));
    // let monthlySalary = parseFloat(prompt("Enter monthly for the year salary"));
    let deduction=0;
    if (monthlySalary <= 7000 && monthPay >= 2024) {
        deduction =  monthlySalary * 0.06;
        console.log(`NSSF deduction: ${deduction}`); return;
    } else if (monthlySalary> 7000 && monthlySalary <= 36000 && monthPay >= 2024) {
        deduction = monthlySalary * 0.06;
        console.log(` NSSF deduction: ${deduction}`); return;
    } else if (monthlySalary <=6000 && monthPay <=2023){
        deduction = monthlySalary* 0.06;
        console.log(` NSSF deduction: ${deduction}`); return;
    }else if (monthlySalary > 6000 && monthlySalary <= 18000 && monthPay <=2023){
        deduction = monthlySalary * 0.06;
        console.log( `NSSF deduction: ${deduction}`); return;
    }else {
        console.log("NSSF deduction: 0");
        return;
    }
}

calculateNetPay(50000)
nssfDeduction(8000,2024)