// Num of Potatoes in a String
function potatoNum() {
    var pot = document.getElementById("pot").value;
    console.log("User given String", pot);
    var val = pot.lastIndexOf("potato");
    if (val == -1) {
        value = 0;
        console.log("No.of Potatoes in string is 0");
    }
    else {
        var value = (pot.match(/potato/g)).length;
        console.log(`No.of Potatoes in string is ${value}`);
    }
    var resultP = document.createElement("p");
    var nodeP = document.createTextNode(`No.of Potatoes in string is ${value}`);
    resultP.appendChild(nodeP);
    var elementP = document.getElementById("pDiv");
    elementP.appendChild(resultP);
}
// Counting Num of Character
function charStr() {
    var singleChar = document.getElementById("singleChar").value;
    console.log("User given Character", singleChar);
    var secondStr = document.getElementById("secondStr").value;
    console.log("User given String", secondStr);
    if (secondStr != "" && singleChar != "") {
        var vale = (secondStr.match(new RegExp(`${singleChar}`, "g"))).length;
        console.log(`No.of ${singleChar} in ${secondStr} is ${vale}`);
    }
    else {
        alert("Enter String Values")
    }
    var singleC = document.createElement("p");
    var nodeSingleC = document.createTextNode(`No.of ${singleChar} in ${secondStr} is ${vale}`);
    singleC.appendChild(nodeSingleC);
    var elementSingleC = document.getElementById("singleCharDiv");
    elementSingleC.appendChild(singleC);
}

// Bill Calculation
function billCalc() {
    var bill;
    var units = document.getElementById("units").value;
    console.log("No. of units = ", units);
    if (units < 0 || units == "") {
        alert("No. of units should be Zero or Greater")
    }
    else if (units > 0 && units <= 50) {
        bill = units * 0.50;
    }
    else if (units > 50 && units <= 150) {
        bill = units * 0.75;
    }
    else if (units > 150 && units <= 250) {
        bill = units * 1.20;
    }
    else {
        bill = units * 1.50;
    }
    var surcharge = (bill * 20) / 100
    var netBill = bill + surcharge;
    console.log("Net Bill is = ", netBill);
    var resultBill = document.createElement("p");
    var nodeBill = document.createTextNode(`The Net Bill is ${netBill}`);
    resultBill.appendChild(nodeBill);
    var elementBill = document.getElementById("billDiv");
    elementBill.appendChild(resultBill);
}
// Salary Calculation
function salaryCalc() {
    var salaryInput = parseInt(document.getElementById("salary").value);
    if (salaryInput <= 10000) {
        var hra = (salaryInput * 20) / 100;
        var da = (salaryInput * 80) / 100;
        var grossSalary = parseInt(salaryInput + hra + da);
    }
    else if (salaryInput <= 20000) {
        var hra = (salaryInput * 25) / 100;
        var da = (salaryInput * 90) / 100;
        var grossSalary = parseInt(salaryInput + hra + da);
    }
    else if (salaryInput > 20000) {
        var hra = (salaryInput * 30) / 100;
        var da = (salaryInput * 95) / 100;
        var grossSalary = parseInt(salaryInput + hra + da);
    }
    else {
        alert("Enter Salary(Numeric Value)")
    }
    console.log("Gross Salary is = ", grossSalary);
    var netSalary = document.createElement("p");
    var nodeSalary = document.createTextNode(`Gross Salary is ${grossSalary}`);
    netSalary.appendChild(nodeSalary);
    var elementSalary = document.getElementById("salaryDiv");
    elementSalary.appendChild(netSalary);
}
// Hide Credit Card Numbers
function numHide() {
    var cardNum = document.getElementById("cCNum").value;
    if (cardNum.length === 16) {
        var hiddenChar = cardNum.slice(0, 12);
        hiddenChar = "************";
        shownChar = cardNum.slice(12, 16);
        var finalCCNum = hiddenChar + shownChar;
    }
    else {
        alert("Invaid Card Number");
    }
    console.log("The Reqiured Output is = ", finalCCNum);
    var outputCCNum = document.createElement("p");
    var nodeCCNum = document.createTextNode(`The Reqiured Credit Card Number is ${finalCCNum}`);
    outputCCNum.appendChild(nodeCCNum);
    var elementCCNum = document.getElementById("cCNumDiv");
    elementCCNum.appendChild(outputCCNum);
}
// Dobule Character
function doubleCh() {
    var doubleChar = document.getElementById("doubleChar").value;
    var elementCh = "";
    for (var index = 0; index < doubleChar.length; index++) {
        elementCh = elementCh + (doubleChar.charAt(index) + doubleChar.charAt(index));
    }
    console.log(`${elementCh}`);
    var outputDoubleCh = document.createElement("p");
    var nodeDoubleCh = document.createTextNode(`The Reqiured String is ${elementCh}`);
    outputDoubleCh.appendChild(nodeDoubleCh);
    var elementDoubleCh = document.getElementById("doubleCharDiv");
    elementDoubleCh.appendChild(outputDoubleCh);

}

function multiples() {
    var multiple = document.getElementById("multiple").value;
    var sum = 0;
    combine = "";
    if (multiple > 1000 || multiple === "") {
        alert("Value should be less than or equal to 1000 for finding multiples")
    }
    else {
        console.log("Multiples are:");
        for (var num = 1; num < multiple; num++) {
            if ((num % 3 === 0) || (num % 5 === 0)) {
                sum = sum + num;
                var multipleNum = num.toString();
                console.log(multipleNum);
                if (num > 0) {
                    combine += "*" + num;
                }
            }
        }
        console.log(sum);
        var outputMultiple = document.createElement("p");
        var nodeMultiple = document.createTextNode(` Multiples are ${combine} and Sum = ${sum} `);
        outputMultiple.appendChild(nodeMultiple);
        var elementMultiple = document.getElementById("multipleDiv");
        elementMultiple.appendChild(outputMultiple);

    }
}