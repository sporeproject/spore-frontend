$(document).ready(function() {
    $("#btn-arrow").on("click", function() {
        $(this).toggleClass("reverted");
        $(".col-coin").toggleClass("d-none");
    });
});