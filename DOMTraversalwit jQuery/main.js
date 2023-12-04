


$(".generator").on("click", function() {
   console.log($(this).closest(".computer").find(".processor").attr("id"))
})


 $(".generator").on("click", function() {
    let computerIdsArray = []
    let computerId=($(this).closest(".computer").attr("data-id"))
    computerIdsArray.push({cmd_id:computerId})
    console.log(computerIdsArray)
});

$(".generator").on("click", function() {
    console.log($(this).closest(".computer").find(".BUS").text());
 });
 

 $(".validator").on("click", function() {
    console.log($(this).closest(".computer").find(".generator").text());
 });
 

 $(".validator").on("click", function() {
    console.log($(this).closest(".computer").find(".MB").text());
 });



 $(".validator").on("click", function() {
    console.log($(this).closest(".computer").find(".processor").find(".QR").text());
   });







   









  
