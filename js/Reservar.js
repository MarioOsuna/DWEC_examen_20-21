/**
 * @author Mario Osuna Ordóñez
 */


function Reservar(Ndni, Nfecha, Nhora) {
    this.dni = Ndni;
    this.fecha = Nfecha;
    this.hora = Nhora;
}
Reservar.prototype.getDni = function() {
    return this.dni;
}
Reservar.prototype.getHora = function() {
    return this.hora;
}
Reservar.prototype.getFecha = function() {
    return this.fecha;
}
Reservar.prototype.ventana = function() {
    let ventana = window.open('', '', 'width=300px,height=200px,top=0px,left=0px,resizable,scrollbars,status');
    ventana.document.write(`<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mario Osuna Ordóñez</title>  
        <script src="js/Reservar.js"></script>
        <noscript>
        <p>La página que estás viendo requiere para su funcionamiento el uso de JavaScript.
            Si lo has deshabilitado intencionadamente, por favor vuelve a activarlo.</p>
        </noscript>
    </head>
    <body>
    <h1>Mario Osuna Ordóñez</h1>    
    <h2>${this.getDni()}</h2>
    <h2>${this.getFecha()}</h2>
    <h2>${this.getHora()}</h2>  
    </body>
    </html>`);
    ventana.document.close();
}