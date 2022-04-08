let button = document.getElementById("simplebutton")

function simpleInterestCalculator() {
    let userPrinciple = parseFloat(document.getElementById("simplePrincipal").value, 10);
    let userInterest = parseFloat(document.getElementById("simpleInterest").value, 10);
    let userTerm = parseFloat(document.getElementById("simpleTerm").value, 10);
    let userSimpleInterest = (userPrinciple * userInterest * userTerm)/100;
    let userSimpleTotal = userPrinciple + userSimpleInterest;
    headingSimpleResult = document.getElementById("simpleResult");
    headingSimpleResult.innerHTML = `Your total amount is ${userSimpleTotal.toFixed(2)}$ with an interest of ${userSimpleInterest.toFixed(2)}$`;
    }

function alertSimpleInterest() {
        alert("Please enter valid numbers for the simple interest calculator");
    }

button.addEventListener("click", function (e) {
    let testPrinciple = parseFloat(document.getElementById("simplePrincipal").value, 10);
    let testInterest = parseFloat(document.getElementById("simpleInterest").value, 10);
    let testTerm = parseFloat(document.getElementById("simpleTerm").value, 10);
    if (isNaN(testPrinciple) || isNaN(testInterest) || isNaN(testTerm)) {
        alertSimpleInterest();
    }
    else {
        simpleInterestCalculator();
    }
});




let buttonTwo = document.getElementById("compoundbutton")

function compoundInterestCalculator() {
    let userPrinciple = parseFloat(document.getElementById("compoundPrincipal").value, 10);
    let userInterest = parseFloat(document.getElementById("compoundInterest").value, 10);
    let userTerm = parseFloat(document.getElementById("compoundTerm").value, 10);
    let userNumberOfTime = parseFloat(document.getElementById("compoundN").value, 10);
    let userCompoundTotal = userPrinciple * (1 + userInterest/100/userNumberOfTime)**(userTerm*userNumberOfTime);
    let userCompoundInterest = userCompoundTotal - userPrinciple;
    headingCompoundResult = document.getElementById("compoundResult");
    headingCompoundResult.innerHTML = `Your total amount is ${userCompoundTotal.toFixed(2)}$ with an interest of ${userCompoundInterest.toFixed(2)}$`;
}

function alertCompInterest() {
    alert("Please enter valid numbers for the compound interest calculator");
}

buttonTwo.addEventListener("click", function (e) {
    let testPrinciple = parseFloat(document.getElementById("compoundPrincipal").value, 10);
    let testInterest = parseFloat(document.getElementById("compoundInterest").value, 10);
    let testTerm = parseFloat(document.getElementById("compoundTerm").value, 10);
    let testNumberOfTime = parseFloat(document.getElementById("compoundN").value, 10);
    if (isNaN(testPrinciple) || isNaN(testInterest) || isNaN(testTerm) || isNaN(testNumberOfTime)) {
        alertCompInterest();
    }
    else {
         compoundInterestCalculator();
    }
});
