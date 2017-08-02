/**
 * Created by ahmermalik on 7/31/17.
 */


var creditPrice = 1.98;
var cashBack = .97;
var gallons = 17;
var cashPrice = 1.94;

savings = "The savings per gallon if you use a credit card is " + creditPrice * cashBack;
creditOnly = "The savings per full tank of gas if you use a credit card is " +creditPrice * cashBack * gallons;
cashOnly = "If you paid with cash, it would cost " +cashPrice *gallons;



console.log(savings);
console.log(cashOnly);

console.log(creditOnly)

if (creditOnly > cashOnly) {
        result = "More savings if you pay using cash";
    }

else {
    result = "More savings if you pay using credit";
}

     console.log(result);

<!--
   document.write("Hello Ahmer your credit price for " +ga+ " gallons of fuel is" +(crp(cab+.01))+"<br>");
   -->
<!--
document.write("For " +ga+ " gallons of fuel, you will pay:"+"<br>");
document.write("Cash Price: " +(ga*cap)+"<br>");
document.write("Credit Price with discount: " +(crp-(crp*(cab*.01)))+"<br>");
-->