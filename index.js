function main(){
    $("#grow-me").addClass("big");
    $("#shrink-me").removeClass("big");
    $('li').text(console.log); 
    $('a').attr("href", "https://www.example.com").text('somewhere');
    $("#hide-me").css("display", "none");
    $("#show-me").css("display", "block");
    const name = $("input").val()
    $("h1").html("Welcome"  +  name);
}

$("#action").on("click", main);