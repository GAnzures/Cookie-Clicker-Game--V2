let totalCookies = 0;
let ovens = 0;
let factories = 0;
let grand = 0;

//Cookies
$("#cookie").click(function(){
    totalCookies = totalCookies + 1;
    $("#total-cookies").text(totalCookies);
});


//Buy an oven
$("#oven").click(function(){
    if (totalCookies < 10){
        alert("you need 10 cookies to buy an oven!");
        }else{
 	totalCookies=totalCookies - 10;
        $("#total-cookies").text(totalCookies);
        ovens = ovens +1;
        $("#total-ovens").text(ovens);
    }          
});


//Buy a factory
$("#factory").click(function(){
    if (totalCookies < 100) {
        alert("You need 100 cookies to buy a factory!");
    }else{
 	totalCookies = totalCookies - 100;
        $("total-cookies").text(totalCookies);
        factories = factories + 1;
        $("#total-factories").text(factories);
    }
});

$("#Grandma").click(function(){
    if (totalCookies < 25) {
        alert("You need 25 cookies in order to be worthy in grandmas eyes!");
    }else{
 	totalCookies = totalCookies + 50;
        $("#total-cookies").text(totalCookies);
        alert("Congrats you're worthy of Grandmas love!");
    }
});



