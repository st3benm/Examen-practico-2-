function examen() {
    let pila = [
        ({ titulo: "Don quijote de la mancha", autor: "Miguel de cervantes", año: 1660 }),
        ({ titulo: "Psicologia oscura", autor: "Daniel Velasquez", año: 1984 }),
        ({ titulo: "Nutricion y balance ", autor: "Katherine Mendez", año: 2008 }),
        ({ titulo: "Artes oscuras", autor: "Harry potter", año: 1985 }),
        ({ titulo: "Secretos de la medicina ", autor: "Darwin Campoverde", año: 2015 }),
    ];
    let nombre = prompt("Ingrese el nombre del libro que desea buscar");
    let encontra = false;
    for (let o = 0; o < pila.length; o++) {
        if (pila[o].titulo === nombre) {
            encontra = true;
            console.log(`Su libro ${nombre} si existe`)
                ; break
        }
    }
    if (!encontra) {
        console.log(`No se encontro su libro ${nombre}`)
    }


    console.log(`
        Libros Publicados depues de los 2000
        ---------------------------`)
    cv = 0;
    for (c = 0; c < pila.length; c++) {
        if (pila[c].año > 2000) {
            cv++
            console.log(` ${cv} libro es ${pila[c].titulo} ${pila[c].año} `)
        }
    }


    console.log(`--------compilacion de titulos--------------- `)
    for (i = 0; i < pila.length; i++) {
        console.log(`${pila[i].titulo}`)
    }

    console.log(`------------Cambio de año ----------------------`)
    let buscar = prompt("Ingrese el titulo del libro actualizar ")
    let nuevoAno = parseInt(prompt("Ingrese el nuevo año de actualizacion"))
    let encontrar = false;
    for (let c = 0; c < pila.length; c++) {
        if (pila[c].titulo === buscar) {
            pila[c].año = nuevoAno;
            encontrar = true
            console.log(`Libro actualizado ${pila[c].titulo} año ${pila[c].año}`)
        }

    }
    if (!encontrar) {
        console.log(`No se encontro ese titulo en la lista`)
    }
    console.log("Lista completa de libros=", pila);
}

function examen2() {
    const pila = [];
    pila.push({ titulo: "Medicina artesnal", autor: "Cristina Torres", año: 2024 }),
        pila.push({ titulo: "Atlas", autor: "Daniela Medina", año: 2015 }),
        pila.push({ titulo: "Hervez", autor: "Elma Solorzano", año: 2018 })
    console.log("Su pila actuales :", pila)
    console.log(`-------------Ultimo libro borrado  con pop--------------`)
    eliminado = pila.pop();
    function isEmpty(pila) {
        return pila.length === 0;
    }

    if (isEmpty(pila)) {
        console.log(`La pila esta vacia `)
    } else {
        console.log(`Su pila tiene ${pila.length} libros `)
    }
    console.log("Libro eliminado:", eliminado)
    console.log(`----------peek-------------------`)
    let bebe = pila[pila.length - 1]
    console.log("Libro encima de la pila:", bebe)
    while (!isEmpty(pila)) {
        let eliminados = pila.pop();
        console.log("Eliminados de la pila:",eliminados)
    }
    console.log(`La pila esta vacia `)
}





