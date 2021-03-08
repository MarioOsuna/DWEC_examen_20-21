/**
 * @author Mario Osuna Ordóñez
 */


let init = function() {
    let inputs = Array.from(document.getElementsByTagName("input"));
    let spans = Array.from(document.getElementsByTagName("span"));
    let form = document.getElementsByTagName("form")[0];

    let button = Array.from(document.getElementsByTagName("button"));

    inputs.forEach((_, i) => {
        try {

            inputs[i].addEventListener("blur", function() {
                this.type == "text" ? spans[i].innerHTML = validar.comprobar(this.getAttribute("name"), this.value) : this.type == "checkbox" ?
                    spans[i].innerHTML = validar.comprobar(this.getAttribute("name"), this.checked) : "";

            })
        } catch (error) {

        }

    });

    button[1].addEventListener("click", function() {
        let i = 0;
        let datos = ["12345678Z", "26/08/2021", "12:30"];

        inputs.forEach(element => {
            try {
                if (element.type != "submit") {
                    element.value = datos[i];
                    i++;
                    if (element.type == "checkbox") {
                        element.checked = true;
                    }
                }

            } catch (error) {

            }
        });
    });
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        inputs.forEach(element => {

            element.dispatchEvent(new Event("blur"));
        });

        let span = spans.find(element => element.innerHTML != "");

        if (span) {
            span.parentNode.firstElementChild.focus();
        } else {

            let reservar = new Reservar(inputs[0].value, inputs[1].value, inputs[2].value);
            reservar.ventana();
        }
    });
    form.addEventListener("reset", function() {
        spans.forEach(element => {
            element.innerHTML = "";
        });

    });
}
document.addEventListener("DOMContentLoaded", init);