let button = document.getElementById("simplebutton")

function simpleInterestCalculator() {
    let userPrinciple = parseFloat(document.getElementById("simplePrincipal").value, 10);
    console.log(typeof userPrinciple);
    let userInterest = parseFloat(document.getElementById("simpleInterest").value, 10);
    let userTerm = parseFloat(document.getElementById("simpleTerm").value, 10);
    let userSimpleInterest = (userPrinciple * userInterest * userTerm)/100;
    let userSimpleTotal = userPrinciple + userSimpleInterest;
    console.log(userSimpleInterest, userPrinciple, userInterest, userTerm);
    headingSimpleResult = document.getElementById("simpleResult");
    headingSimpleResult.innerHTML = `Your total amount is ${userSimpleTotal.toFixed(2)}$ with an interest of ${userSimpleInterest.toFixed(2)}$`;
}

button.addEventListener("click", function (e) {
    simpleInterestCalculator();
});