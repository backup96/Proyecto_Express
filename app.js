const { menu, pause, leerInput} = require('./models/menu')
const Tareas = require('./models/listar')
const main = async () => {
    let opt = '';
    const tareas = new Tareas();

    do{
        opt = await menu();
        switch (opt) {
            case '1':
                const desc = await leerInput("Descripcion: ");
                tareas.crearTarea(desc);
                 break;
            case '2':
                console.log(tareas.listadoArr);
                break;
            default:
                break;
        }
        await pause();
    } while ( opt !== '0');
} 

main()