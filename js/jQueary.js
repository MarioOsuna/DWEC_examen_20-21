/**
 * @author Mario Osuna Ordóñez
 */

$(function() {
    (function($) {
        jQuery.fn.plugin = function() {
            $(this).fadeOut("slow");
            $(this).fadeIn("slow");
            return this;
        };
    })(jQuery);

    let contadorTitulos = 1;
    let $nombre = $("<p>Mario</p>");
    let $ap1 = $("<p>Osuna</p>");
    let $ap2 = $("<p>Ordóñez</p>");


    $nombre.appendTo("body");
    $ap1.appendTo("body");
    $ap2.appendTo("body");
    let boton = $("<input type='button' name='enviar' value='Enviar'>");
    boton.appendTo("body");
    boton.click(function(e) {
        $(`<h1>Título-${contadorTitulos++}</h1>`).insertBefore(this).on("click", function() {
            $('p').css("color", "blue");
            $('h1').css("color", "green");
        });
    });
    $("p").mousemove(function() {
        $(this).animate({ "font-size": "30px" });
    });
    $("p").click(function() {
        $(this).plugin();
        $(this).css("color", "red");
    });

});