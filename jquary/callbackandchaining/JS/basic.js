// $(function(){
//     $("h1").click(function(){
//         $(".sample").slideToggle();
//     });
   
// });
// $(function(){
//     $("h1").click(function(){
//         $(".sample").slideToggle(1000,function(){
//             alert("Animation complete.");
//         })
//     });
   
// });
$(function(){
    $("h1").click(function(){
        $(".sample").css('background-color','purple').slideUp(2000).slideDown(1000);
    });
   
});