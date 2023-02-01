/**
    Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and
    bangla of a student.

    Input: The first line of the input is the marks of the five subjects mentioned above, respectively.

    Output: Print the result in 2 decimal places.


        Sample Input:   75.25, 65, 80, 35.45, 99.50
            Output:     71.04
 */

                let mathematicsNumber = 77.25;
                let biologyNumber = 65;
                let chemistryNumber = 80;
                let physicsNumber = 35.45;
                let banglaNumber = 99.50;

    let totalNumber = mathematicsNumber + biologyNumber + chemistryNumber + physicsNumber + banglaNumber;
    let totalSubject = 5;

    let averageNumber = totalNumber / totalSubject;

    console.log(averageNumber.toFixed(2))
