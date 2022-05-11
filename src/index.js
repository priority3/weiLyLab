import $ from "jquery";

$(document).ready(function () {
    console.log("Hello World!");
});
$(".eav-content").mouseenter(function(){
    $(this).addClass("eav-content-hover");
})