$(document).ready(function () {
    $("button").on("click", calculate);
});


function calculate()
{
    // gather all input

    let totalSalary = parseFloat( $("#yearlySalary").val() );

    // ask user for total height
    // convert to number type
    let totalCredit = parseFloat( $("#creditScore").val() );

    let totalMonths = parseFloat( $("#monthsWorked").val() );


//Step 2, 2 triple nested if statements to check if they are approved.

    let isApproved = false; //Set boolean approval
    let approvalString = '';
    if(totalSalary >= 40000)
    {
        if(totalCredit >= 600){
            isApproved = true;
        }
        else {
        if(totalMonths > 12){
            isApproved = true;
        }
    }
    }
    else{
        if(totalCredit >= 600){
            if(totalMonths > 12){
                isApproved = true;
            }
        }
    }

    if(isApproved === true){
        approvalString = 'approved';
    }
    else {
    approvalString = 'not approved';
}

    // OUTPUT!

    $("span#totalApproval").text(approvalString);


    $(".output").show();
}