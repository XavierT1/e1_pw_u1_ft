function agregarNombre() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;

    if (nombre === "" && apellido === "") {
        alert("Complete todos los campos");
        return;
    }

    let tabla = document.getElementById("tabla-registros");

    let fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${apellido}</td>
    `;

    tabla.appendChild(fila);

    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
}
