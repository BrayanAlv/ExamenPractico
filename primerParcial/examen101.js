
const readline = require('readline');

async function fetchDataJSON() {
    var jsonUrl = 'http://jsonplaceholder.typicode.com/todos';
    var rs = await fetch(jsonUrl);
    return await rs.json();
}

async function pendIDs() {
    var rs = await fetchDataJSON(); 

    for(let i = 0; i < rs.length; i++) {
        console.log("ID: " + rs[i].id);
    }
}

async function pendIDsTitles() {
    var rs = await fetchDataJSON(); 

    for(let i = 0; i < rs.length; i++) {
        console.log("ID: " + rs[i].id + " Titles: " + rs[i].title);
    }
}

async function pendIDsTitleSR() {
    var rs = await fetchDataJSON(); 
    const nonComplete = rs.filter(item => !item.completed); 
    for(let i = 0; i < nonComplete.length; i++) {
        console.log("ID: " + nonComplete[i].id + " Titles: " + nonComplete[i].title);
    }
}

async function pendIDsTitleR() {
    var rs = await fetchDataJSON(); 
    const completed = rs.filter(item => item.completed); 

    for(let i = 0; i < completed.length; i++) {
        console.log("ID: " + completed[i].id + " Titles: " + completed[i].title);
    }
}

async function pendIdUserID() {
    var rs = await fetchDataJSON(); 
   
    for(let i = 0; i < rs.length; i++) {
        console.log("ID: " + rs[i].id + " UserID: " + rs[i].userId);
    }
}

async function pendIDsUserIDR() {
    var rs = await fetchDataJSON(); 
    const completed = rs.filter(item => item.completed); 
    for(let i = 0; i < completed.length; i++) {
        console.log("ID: " + completed[i].id + " UserID: " + completed[i].userId);
    }
}

async function pendIDsUserIDSR() {
    var rs = await fetchDataJSON(); 
    const nonComplete = rs.filter(item => !item.completed); 
    for(let i = 0; i < nonComplete.length; i++) {
        console.log("ID: " + nonComplete[i].id + " UserID: " + nonComplete[i].userId);
    }
}


function mostrarMenu() {
    console.log("1. Lista de todos los pendientes (solo IDs)");
    console.log("2. Lista de todos los pendientes (IDs y Titles)");
    console.log("3. Lista de todos los pendientes sin resolver (ID y Title)");
    console.log("4. Lista de todos los pendientes resueltos (ID y Title)");
    console.log("5. Lista de todos los pendientes (IDs y userID)");
    console.log("6. Lista de todos los pendientes resueltos (ID y userID)");
    console.log("7. Lista de todos los pendientes sin resolver (ID y userID)");
    console.log("8. Salir");
}

function ejecutarOpcion(opcion) {
    switch (opcion) {
    case '1':
        console.log("-------- Pendientes (solo IDs) --------");
        pendIDs();

        break;
    case '2':
        console.log("-------- Pendientes (IDs y Titles) --------");
        pendIDsTitles();
        break;
    case '3':
        console.log("-------- Pendientes sin resolver (ID y Title) --------");
        pendIDsTitleSR()
        break;
    case '4':
        console.log("-------- Pendientes resueltos (ID y Title) --------");
        pendIDsTitleR();
        break;
    case '5':
        console.log("-------- Pendientes (IDs y userID) --------");
        pendIdUserID();
        break;
    case '6':
        console.log("-------- Pendientes resueltos (ID y userID) --------");
        pendIDsUserIDR();
        break;
    case '7':
        console.log("-------- Pendientes sin resolver (ID y userID) --------");
        pendIDsUserIDSR();
        break;
    case '8':
        console.log("Saliendo del programa...");
        rl.close();
        break;
    default:
        console.log("Opción no válida");
        break;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main() {
    mostrarMenu();
  
    rl.question('Ingrese el número de opción deseada: ', (opcion) => {
        ejecutarOpcion(opcion);
        if (opcion !== '8') {
            main();
        }
    });
}

main();
