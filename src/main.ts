/*import { renderPost, renderUser } from "./controllers";

(async () => {
  console.time("post");
  await renderUser();
  console.timeEnd("post");
})();
*/
import * as readlineSync from 'readline-sync'
import { renderPost, renderUser } from './controllers';

async function menu() {
  let exit = false;
  while (!exit) {
    const option = readlineSync.question(`Elija una opcion: \n1. Elije Post\n2. Elije User\n3. Salir\n Ingrese la Opcion deseada`);
    switch (option) {
      case '1':
        await renderPost();
        break;
      case '2':
        await renderUser();
        break;
      case '3':
        exit = true;
        break;
      default:
        console.log('Opcion invalida, intente nuevamente.');
    }
  }
};
menu();