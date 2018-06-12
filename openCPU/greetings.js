//set CORS to call "appdemo" package on public server
ocpu.seturl("http://alexandrabk.ocpu.io/packagetest1/R")



//calls R function: stats::rnorm(n=100, mean=runif(1)):
$("#postbutton").click(function(){
	var name = $("#fname").val();
    var req = ocpu.call("hello", {name: name}, function(session){
        session.getObject(function(data){
        //data is the object returned by the R function
        alert(data); 
    });
    }).fail(function(){
        alert("Error: " + req.responseText);
    });
});