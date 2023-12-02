

class Persona {

    static conteo = 0; 
    static get conteo() {
        return Persona._conteo + 'Instancias'
    }

    static mensaje (){
        console.log(this.nombre);
        console.log('Hola a todos, soy un metodo statico')
    }


    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    constructor( nombre = 'Sin nombre ', codigo = ' Sin codigo', frase = ' sin frase' ){

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;  

        Persona._conteo++;
    }

    set setComidaFavorita( comida ){
        this.comida = comida.toUpperCase;
    }

    get getComidaFavorita(){
        return `La comida favorita de ${ this.nombre } es ${ this.comida }`
    }


    quienSoy() {
        console.log (`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`)
    }

    mifrase () {
        this.quienSoy()
        console.log(`${ this.codigo } dice: ${ this.frase }`);
    }

}


const spiderman = new Persona('Peter Parker',' Spider Man', ' Yo soy tu amigable vecino Spider Man');
const ironman = new Persona('Tony Stark',' Iron Man', ' Yo soy Iron Man');
//console.log(ironman);

spiderman.mifrase();
//ironman.quienSoy();

spiderman.setComidaFavorita = 'El pay de cereza de la tia May';






//Persona._conteo = 2;
console.log( 'Conteo statico', Persona._conteo);
console.log(Persona.conteo)
Persona.mensaje();

Persona.propiedadExterna = 'Hola Mundo'

console.log( Persona.propiedadExterna );
console.log( Persona );