/**
 * @author Mario Osuna Ordóñez
 */


let validar = function() {


    let regex = {
        dni: [
            /^(\d{8})[ -]?([A-Z(^IÑOU)]$)/i, ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'],
            "Introduce un dni válido 12345678Z"
        ],
        fecha: [/^([012][1-9]|3[01])(\/|\-)(0[1-9]|1[012])(\/|\-)(\d{4})$/,
            "Introduce una fecha válida: 14/01/1999"
        ],
        hora: [/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/g,
            "Hora incorrecta, ejemplo: 20:00"
        ]

    };

    function comprobar(tipo, value) {
        if (value.trim != "") {
            switch (tipo) {
                case "dni":
                    try {
                        let [, num, letra] = regex.dni[0].exec(value);
                        return (regex.dni[1][num % 23] == letra.toUpperCase()) ? "" : "La letra introducida no es la correcta";
                    } catch (error) {
                        return regex.dni[2];
                    }

                case "fecha":
                    let [fech, res] = regex.fecha;

                    if (fech.test(value)) {

                        return existeFecha(value) ? "" : "La fecha no existe";
                    } else {
                        return res;
                    }
                case "hora":
                    let [hora, resp] = regex.hora;

                    if (hora.test(value)) {
                        return "";
                    } else {
                        return resp;
                    }
                case "check":
                    return value == true ? "" : "Selecciona la casilla si quieres continuar";
            }
        } else {
            return "El campo " + tipo + " no puede estar vacío";
        }
    }

    function existeFecha(fecha) {
        var fechaf = fecha.split("/");
        var day = fechaf[0];
        var month = fechaf[1];
        var year = fechaf[2];
        var date = new Date(year, month, '0');
        if ((day - 0) > (date.getDate() - 0)) {
            return false;
        }
        return true;
    }
    return {
        comprobar: comprobar
    }
}();