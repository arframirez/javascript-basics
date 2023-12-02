

const afer = {
    nombre: 'Alejandro',
    edad: 13,
    imprimir() {
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`)
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 40,
    imprimir() {
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`)
    }
}



function Persona(nombre, edad) {
    console.log("Se ejecuto esta linea");

    this.nombre = nombre;
    this.edad = edad ;

    this.imprimir = function() {
        console.log(`Nombre: ${ this.nombre} - Edad: ${ this. edad }`);
    }

}

const maria = new Persona('María', 18);
const melissa = new Persona('Melissa', 21);
console.log( maria );
maria.imprimir();