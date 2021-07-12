class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    obtDetalles (){
        console.log(`${this.nombre} tiene ${this.edad} anos de edad, y su genero es ${this.genero}`);
    };
};

let persona1 = new Persona ("Manuel", 39, "masculino");
persona1.obtDetalles();

class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo) {
        super(nombre, edad, genero);
        this.curso = curso;
        this.grupo = grupo;
    };
    registrar(){
        console.log(`Registrado el alumno ${this.nombre} en el curso ${this.curso} y grupo ${this.grupo}.`);
    };
};

let estudiante1 = new Estudiante("Manuel", 39, "masculino", "tercero", "C")
estudiante1.registrar();

class Profesor extends Persona {
    constructor(nombre, edad, genero, asignatura, nivel){
        super(nombre, edad, genero);
        this.asignatura = asignatura;
        this.nivel = nivel;
    };
    asignar(){
        console.log(`El profesor ${this.nombre} se ha asignado a la asignatura ${this.asignatura} con nivel ${this.nivel}`);
    };
};

let profesor1 = new Profesor("Manuel", 39, "masculino", "Lengua Extranjera", 3);
profesor1.asignar();