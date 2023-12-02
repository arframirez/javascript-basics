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

class Heroe extends Persona{
   
    clan;

    constructor (nombre, codigo, frase) {

        super(nombre, codigo, frase);

        this.clan = 'Los avengers'

        quienSoy() 
           console.log(`Soy ${ this.nombre }, ${this.clan}`);
           super.quienSoy();
        
    }
}

const spiderman = new Heroe('Peter Parker',' Spider Man', ' Yo soy tu amigable vecino Spider Man');

console.log(spiderman);
