function examen() {
    let pila = [  //CREE UNA PILA 
        ({ titulo: "Don quijote de la mancha", autor: "Miguel de cervantes", año: 1660 }),
        ({ titulo: "Psicologia oscura", autor: "Daniel Velasquez", año: 1984 }),
        ({ titulo: "Nutricion y balance ", autor: "Katherine Mendez", año: 2008 }),
        ({ titulo: "Artes oscuras", autor: "Harry potter", año: 1985 }),
        ({ titulo: "Secretos de la medicina ", autor: "Darwin Campoverde", año: 2015 }),
    ];
    let nombre = prompt("Ingrese el nombre del libro que desea buscar");//EN ESTE CASO ABRIMOS UN PROMPT PARA INTRODUCIR EL NOMBRE DEL LIBRO QUE DESEO BUSCAR
    let encontra = false; //ABRIMOS UN FALSE PARA CUANDO LO ENCONTREMOS CERREMOS EL BREAK
    for (let o = 0; o < pila.length; o++) {
        if (pila[o].titulo === nombre) {
            encontra = true;
            console.log(`Su libro ${nombre} si existe`) // SI LO ENCUENTRA SE CIERRA EL BUCLE
                ; break
        }
    }
    if (!encontra) { //SI NO LO ENCONTRAMOS ABRIMOS UN IF 
        console.log(`No se encontro su libro ${nombre}`)
    }


    console.log(`
        Libros Publicados depues de los 2000 
        ---------------------------`)
    cv = 0;                                 //ABRIMOS UN FOR Y RECORREMOS LA PILA Y PONEMOS UNA CONDICONAL Y UN CONTADOR Y POR ULTIMO PRESENTAMOS EN CONSOLA
    for (c = 0; c < pila.length; c++) {
        if (pila[c].año > 2000) {
            cv++
            console.log(` ${cv} libro es ${pila[c].titulo} ${pila[c].año} `)
        }
    }


    console.log(`--------compilacion de titulos--------------- `) 
    for (i = 0; i < pila.length; i++) {                     //IMPRIMIMOS SOLO LOS TITULOS RECORREMOS LA PILA Y PRESENTAMOS
        console.log(`${pila[i].titulo}`)
    }

    console.log(`------------Cambio de año ----------------------`)
    let buscar = prompt("Ingrese el titulo del libro actualizar ")
    let nuevoAno = parseInt(prompt("Ingrese el nuevo año de actualizacion"))
    let encontrar = false;                      //INGRESAMOS EL LIBRO Y PONEMOS LA FUNCION ENCONTRAR 
    for (let c = 0; c < pila.length; c++) { //ABRIMOS UN FOR Y RECORREMOS EL ARREGLO
        if (pila[c].titulo === buscar) { //BUSCAMOS Y PRESENTAMOS
            pila[c].año = nuevoAno; //SI LO ENCONTRAMOS LO GUARDAMOS EN PILA
            encontrar = true
            console.log(`Libro actualizado ${pila[c].titulo} año ${pila[c].año}`)
        }

    }
    if (!encontrar) { //CREAMOS UN IF EN CASO DE NO ENCONTRAR
        console.log(`No se encontro ese titulo en la lista`)
    }
    console.log("Lista completa de libros=", pila);
}

function examen2() {                                                //CREAMOS UNA PILA VACIA 
    const pila = [];
    pila.push({ titulo: "Medicina artesnal", autor: "Cristina Torres", año: 2024 }),
        pila.push({ titulo: "Atlas", autor: "Daniela Medina", año: 2015 }),             // CON EL PUSH MANDAMOS LOS VALORES A LA PILA
        pila.push({ titulo: "Hervez", autor: "Elma Solorzano", año: 2018 })
    console.log("Su pila actuales :", pila)
    console.log(`-------------Ultimo libro borrado  con pop--------------`)  
    eliminado = pila.pop();                     //ABRIMOS UNA VARIABLE PARA GUARDAR NUESTRO OBJETO EILIMANADO
    function isEmpty(pila) {
        return pila.length === 0;       //CREAMOS UN IS EMPTY 
    }

    if (isEmpty(pila)) {
        console.log(`La pila esta vacia `) //ABRIMOS UNA CONDICIONAL PARA SI ESTA VACIA PRESENTE Y SINO QUE PRESENTE LOS LIBROS QUE TIENE
    } else {
        console.log(`Su pila tiene ${pila.length} libros `)
    }
    console.log("Libro eliminado:", eliminado)
    console.log(`----------peek-------------------`)
    let bebe = pila[pila.length - 1]            //CREAMOS UN PEEK CON LA MISMA PILA
    console.log("Libro encima de la pila:", bebe)
    while (!isEmpty(pila)) {                //Y CREAMOS UN CICLO CON WHILE MIENTRAS IS EMPTY NO ESTE VACIA SE ELIMINA CON EL POP 
        let eliminados = pila.pop();
        console.log("Eliminados de la pila:",eliminados)                //POR ULTIMO PRESENTAMOS 
    }
    console.log(`La pila esta vacia `)
}





