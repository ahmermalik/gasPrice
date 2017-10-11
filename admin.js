var resultsDiv = document.getElementById('result-div');


function analyze() {
    var creditPrice, crp, cashBack, cab, cashPrice, cap, gallons, ga;
    creditPrice = document.getElementById("form1");
    cashBack = document.getElementById("form2");
    cashPrice= document.getElementById("form3");
    gallons = document.getElementById("form4");
    crp=creditPrice.elements["creditPrice"].value;
    cab=cashBack.elements["cashBack"].value;
    cap=cashPrice.elements["cashPrice"].value;
    ga=gallons.elements["gallons"].value;

    var newPrice;

    //calculations
    cashBack= parseFloat(((crp)-.01*crp));
    newPrice = parseFloat(cashBack * ga) ;
    cashPrice = parseFloat(ga * cap);

    //display
    resultsDiv.innerHTML = "Your per gallon cost with cashback will be: $" + parseFloat((cashBack))+"<br>";
    resultsDiv.innerHTML += "To fuel your vehicle using a credit card, it will cost: $" + parseFloat((newPrice))+"<br>";
    resultsDiv.innerHTML += "To fuel your vehicle using cash, it will cost: $" + parseFloat((cashPrice))+"<br>";


    if (newPrice > cashPrice) {
        result = "There will be more savings if you pay using cash.";
    }

    else {
        result = "There will be more savings if you pay using credit.";
    }

    resultsDiv.innerHTML += result;

};





