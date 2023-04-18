$(function(){
    $("input").on("click",function(){
        //alert("Hi");
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        //if(randomChildNumber==0) document.write('<img src="0.jpg">');
        //else if(randomChildNumber==0) document.write('<img src="0.jpg">');
        //if(randomChildNumber==0) document.write('<img src="0.jpg">');
        //if(randomChildNumber==0) <img src="0.jpg">;
        $("h1").text($("li").eq(randomChildNumber).text());
        
        
    });
    
});

/*$(function(){
    $("input").on("click",function(){
        //alert("Hi");
        $("h1").text($("li:first").text());
    });
});
$(function(){
    $("input").on("click",function(){
        //alert("Hi");
        $("h1").text($("li:last").text());
    });
});
$(function(){
    $("input").on("click",function(){
        //alert("Hi");
        $("h1").text($("li").eq(1).text());
    });
});*/

