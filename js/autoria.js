/**
 * @author Mario Osuna Ordóñez
 */

let init = function() {

    document.addEventListener("contextmenu", function(event) {
        event.preventDefault();
    });

    let h2 = document.getElementsByTagName("h2");
    document.getElementsByTagName("p")[0].addEventListener("click", function() {
        document.body.removeChild(this);
    });

    h2[0].addEventListener("auxclick", function(event) {
        this.innerHTML = `MARIO (${event.offsetX},${event.offsetY})`;
        this.classList.toggle("rojo");
    });
    let cambiarApellido = function() {
        let ap1 = document.createElement("h2");
        ap1.innerHTML = "OSUNA";
        ap1.classList.add("amarillo");
        document.body.insertBefore(ap1, this);
        this.innerHTML = "ORDÓÑEZ";
        this.classList.add("verde");
        this.removeEventListener("mouseenter", cambiarApellido);
    }
    h2[1].addEventListener("mouseenter", cambiarApellido);
}
document.addEventListener("DOMContentLoaded", init);